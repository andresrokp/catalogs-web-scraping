const pptr = require('puppeteer');
const x4n = require('excel4node');

console.log("-\n-----\n---------\n-----\n-");
let begTime = performance.now();

let allTitles = [];
let allDescriptions = [];
let workBook = new x4n.Workbook();
let workSheet = workBook.addWorksheet('Sheet 1');

let timeArray = ['beg',0,'-'];

( async ()=>{
    const browser = await pptr.launch({ headless: false });         timeArray.push('browser',performance.now()-begTime,'-');
    var page = await browser.newPage();         timeArray.push('page',performance.now()-begTime,'-');
    
    for(let pgN = 1; pgN < 3; pgN++){
        let url = `https://www.gprindustrial.com/es/16-correas-en-v-tipo-a?order=product.price.asc&page=${pgN}`;
        await page.goto(url, {waitUntil: "domcontentloaded"});          timeArray.push('goto',performance.now()-begTime,'-');
        let { titles,descs } = await page.evaluate(()=>{
            return { titles : [...document.getElementsByClassName("product-title")].map( tit => {return tit.innerText})
                    ,descs : [...document.getElementsByClassName("product-price")].map( pri => {return pri.innerText})};
        });
        timeArray.push('evaluate',performance.now()-begTime,'-');
        allTitles.push(...titles);
        allDescriptions.push(...descs);
        page.waitForTimeout(8000);
    };
    
    browser.close();            timeArray.push('browserClose',performance.now()-begTime,'-');
    console.log(wholeData);
    console.log(timeArray);
    writeToExcel(timeArray);        timeArray.push('writeToExcel',performance.now()-begTime);
})();

workBook.write('test.xlsx');


function writeToExcel(data){
    for(let i = 0; i < data.length; i++){
        workSheet.cell(i+1,1).value(data[i]);
    }
}