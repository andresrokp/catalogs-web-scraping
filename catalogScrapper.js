const pptr = require('puppeteer');
const x4n = require('excel4node');

console.log("-\n-----\n---------\n-----\n-");
let begTime = performance.now();

let allTitles = [];
let allDescriptions = [];
let workBook = new x4n.Workbook();
let workSheet = workBook.addWorksheet('Correas');

( async ()=>{
    const browser = await pptr.launch(); //{ headless: false }
    let page = await browser.newPage(); 
    
    for(let pgN = 1; pgN <= 159; pgN++){
        let url = `https://www.gprindustrial.com/es/341-correas-de-tiempo-tipo-8m?order=product.price.asc&page=${pgN}`;
        await page.goto(url, {waitUntil: "domcontentloaded"});
        
        let { titles,descs } = await page.evaluate(()=>{
            return { titles : [...document.getElementsByClassName("product-title")].map( tit => {return tit.innerText.split(" ")[0]})
                    ,descs : [...document.getElementsByClassName("product-desc")].map( desc => {return desc.innerText})};
        });
        
        console.log('evaluate > ',pgN,' > ',performance.now()-begTime);
        allTitles.push(...titles);
        allDescriptions.push(...descs);
        await page.waitForTimeout(1000);
    };
    
    browser.close();
    
    for(let i = 0; i < allTitles.length; i++){
        workSheet.cell(i+1,1).string(allTitles[i]);
        workSheet.cell(i+1,2).string(allDescriptions[i]);
    }
    
    workBook.write('belts- TIMING - 8M.xlsx');
})();