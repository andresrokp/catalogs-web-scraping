const pptr = require('puppeteer');
const x4n = require('excel4node');

console.log("-\n-----\n---------\n-----\n-");
let begTime = performance.now();

var allTitles = [];
var allDescriptions = [];
let workBook = new x4n.Workbook();
let workSheet = workBook.addWorksheet('Correas');

var timeArray = ['beg',0,'-'];

( async ()=>{
    const browser = await pptr.launch({ headless: false });         timeArray.push('browser',performance.now()-begTime,'-');
    var page = await browser.newPage();         timeArray.push('page',performance.now()-begTime,'-');
    
    for(let pgN = 1; pgN < 17; pgN++){
        let url = `https://www.gprindustrial.com/es/16-correas-en-v-tipo-a?order=product.price.asc&page=${pgN}`;
        await page.goto(url, {waitUntil: "domcontentloaded"});          timeArray.push('goto',performance.now()-begTime,'-');
        let { titles,descs } = await page.evaluate(()=>{
            return { titles : [...document.getElementsByClassName("product-title")].map( tit => {return tit.innerText.split("")[0]})
                    ,descs : [...document.getElementsByClassName("product-desc")].map( desc => {return desc.innerText})};
        });
        timeArray.push('evaluate',performance.now()-begTime,'-');
        allTitles.push(...titles);
        allDescriptions.push(...descs);
        await page.waitForTimeout(5000);
    };
    
    browser.close();            timeArray.push('browserClose',performance.now()-begTime,'-');
    
    console.log(timeArray);
    console.log(allTitles);
    console.log(allDescriptions);
    
    for(let i = 0; i < allTitles.length; i++){
        workSheet.cell(i+1,1).string(allTitles[i]);
        workSheet.cell(i+1,2).string(allDescriptions[i]);
    }
    
    workBook.write('belts-V-A.xlsx');
})();