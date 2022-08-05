const pptr = require('puppeteer')
console.log("-\n-----\n---------\n-----\n-");

( async ()=>{
    const browser = await pptr.launch()
    const page = await browser.newPage()

    let url = "https://www.gprindustrial.com/es/16-correas-en-v-tipo-a?order=product.price.asc&page=1";
    
    await page.goto(url, {waitUntil: "domcontentloaded"})

    let data = await page.evaluate(()=>{
        return [...document.getElementsByClassName("product-title")].map( tit => {return tit.innerText})
    })
    
    console.log(data)

    browser.close()

})();