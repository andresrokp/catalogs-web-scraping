const pptr = require('puppeteer');
console.log("-\n-----\n---------\n-----\n-");

( async ()=>{
    const browser = await pptr.launch();
    var page = await browser.newPage();
    // let pgN = 9
    for(let pgN = 1; pgN < 9; pgN++){
        let url = `https://www.gprindustrial.com/es/16-correas-en-v-tipo-a?order=product.price.asc&page=${pgN}`;
        await page.goto(url, {waitUntil: "domcontentloaded"});
        let data = await page.evaluate(()=>{
            return [...document.getElementsByClassName("product-title")].map( tit => {return tit.innerText});
        });
        console.log(data);
    };
    
    browser.close();

})();