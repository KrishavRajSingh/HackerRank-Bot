const puppeteer=require('puppeteer');
const codeObj=require('./answer');
const email="fixes97668@aosod.com";
const pass="password";

(async function(){
    try {
        const browserPromise=await puppeteer.launch({
            headless:false,
            defaultViewport:null,
            args:['--start-maximized']
        });
        
        let newTab=await browserPromise.newPage();
        await newTab.goto('https://www.google.com/');
        await newTab.waitForSelector('input[type="text"]');
        await newTab.type('input[type="text"]','HackerRank login');
        await newTab.keyboard.press('Enter');
        await waitAndClick('.LC20lb.MBeuO.DKV0Md',newTab);
        await newTab.waitForSelector('#input-1',{visible:true});
        await newTab.type('#input-1',email,{delay:50});  
        await newTab.type('#input-2',pass,{delay:50});
        await waitAndClick('.auth-button.ui-btn-styled',newTab);
        await waitAndClick('a[data-attr1="algorithms"]',newTab);
        await waitAndClick('input[value="warmup"]',newTab);
        const allProblems=await newTab.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-styled',{delay:50});
        console.log(allProblems.length);
        await questionSolver(newTab,allProblems[0],codeObj.answers[0]);
    } catch (error) {
        console.log(error);
    }
})()

async function waitAndClick(selector,page){
    await page.waitForSelector(selector);
    const selectorClicked=page.click(selector);
    return selectorClicked;
}

async function questionSolver(page,question,answer){
    await question.click();
    await waitAndClick('.monaco-editor.no-user-select.vs',page);
    await waitAndClick('.checkbox-input',page);
    await page.type(".text-area",answer);
    await page.keyboard.down('Control',{delay:50})
    await page.keyboard.press('A',{delay:50});
    await page.keyboard.press('X',{delay:50});
    await page.keyboard.up('Control');
    await waitAndClick('.monaco-editor.no-user-select.vs',page);
    await page.keyboard.down("Control");
    await page.keyboard.press('A',{delay:50});
    await page.keyboard.press('V',{delay:50});
    await page.keyboard.up('Control');
    await page.click('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled');
    await delay(5000)
    await page.goBack();
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }