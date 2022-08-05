const puppeteer = require('puppeteer');

console.log("-\n-----\n---------\n-----\n-");


(async () =>{
    let url = "https://www.imdb.com/title/tt0111161/?ref_=nv_sr_srsg_0";
    let browser = await puppeteer.launch({args: ['--lang=en-US,en']})
    let page = await browser.newPage()
    await page.setExtraHTTPHeaders({
        'Accept-Language': 'en'
    });
    
    await page.goto(url,{ waitUntil: "domcontentloaded"})

    let data = await page.evaluate(()=>{
        return document.querySelector('h1[data-testid="hero-title-block__title"]').innerText;
    })

    console.log(data)

    browser.close()

})();

// async function run() {
//     const browser = await puppeteer.launch({
//         headless: false,
//         args: ['--no-sandbox', '--disable-setuid-sandbox'],
//     });
//     const page = await browser.newPage();
//     await page.goto('https://www.google.com/');
//     await page.screenshot({ path: 'google.png' });
//     await browser.close();
//     }