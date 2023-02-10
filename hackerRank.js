const puppeteer=require('puppeteer');
const codeObj=require('./answer')

const browserPromise=puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args:['--start-maximized']
})
const email="fixes97668@aosod.com";
const pass="password";
let page;
browserPromise.then(function (browser){
    let browserOpenPromise=browser.newPage();
    return browserOpenPromise;
}).then(function (newTab){
    page=newTab;
    let go2googlePromise=page.goto('https://www.google.com/');
    return go2googlePromise;
}).then(function (){
    const elementWaitPromise=page.waitForSelector('input[type="text"]',{visible:true});
    return elementWaitPromise;
}).then(function (){
    const keysWillBeTyped=page.type('input[type="text"]','HackerRank login',{delay:50})
    return keysWillBeTyped;
}).then(function (){
    const enterWillBePressed=page.keyboard.press('Enter');
    return enterWillBePressed;
}).then(function (){
    const elementWaitPromise=page.waitForSelector('.LC20lb.MBeuO.DKV0Md',{visible:true});
    return elementWaitPromise;
}).then(function (){
    const linkWillBeClickedPromise=page.click('.LC20lb.MBeuO.DKV0Md');
    return linkWillBeClickedPromise;
}).then(function (){
    const elementWaitPromise=page.waitForSelector('#input-1',{visible:true});
    return elementWaitPromise;
}).then(function (){
    const keysWillBeTyped=page.type('#input-1',email)
    return keysWillBeTyped;
}).then(function (){
    const enterWillBePressed=page.keyboard.press('Enter');
    return enterWillBePressed;
}).then(function (){
    const elementWaitPromise=page.waitForSelector('#input-2',{visible:true});
    return elementWaitPromise;
}).then(function (){
    const keysWillBeTyped=page.type('#input-2',pass,{delay:50})
    return keysWillBeTyped;
}).then(function (){
    const enterWillBePressed=page.keyboard.press('Enter');
    return enterWillBePressed;
}).then(function(){
    const clickOnAlgoPromise=waitAndClick('a[data-attr1="algorithms"]',page);
    return clickOnAlgoPromise;
}).then(function(){
    const warmUpclickPromise=waitAndClick('input[value="warmup"]',page);
    return warmUpclickPromise;
}).then(function(){
    const waitFor3secPromise=page.waitForTimeout(3000);
    return waitFor3secPromise;
}).then(function(){
    const allButtonPromise=page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-styled',{delay:50});
    return allButtonPromise;
}).then(function(allButton){
    console.log('no. of questions:',allButton.length);
    let ans=codeObj.answers[0];
    console.log(ans);
    // page.waitForTimeout(10000)
    const questionWillBeSolved=questionSolver(page,allButton[0],ans);
    return questionWillBeSolved;
}).then(function(){
    const waitFor3secPromise=page.waitForTimeout(3000);
    return waitFor3secPromise;
}).then(function(){
    const allButtonPromise=page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-styled',{delay:50});
    return allButtonPromise;
}).then(function(allButton){
    console.log('no. of questions:',allButton.length);
    let ans=codeObj.answers[1];
    console.log(ans);
    const questionWillBeSolved=questionSolver(page,allButton[0],ans);
    return questionWillBeSolved;
}).catch(function(err){
    console.log(err)
})

function questionSolver(page,question,answer){
    return new Promise(function(resolve,reject){
        const questionWillBeClickedPromise=question.click();
        questionWillBeClickedPromise.then(function(){
            const clickEditorPromise=waitAndClick('.monaco-editor.no-user-select.vs',page);
            return clickEditorPromise;
        }).then(function(){
            return waitAndClick('.checkbox-input',page);
        }).then(function(){
            return page.type(".text-area",answer);
        }).then(function(){
            const PressCtrlPromise=page.keyboard.down("Control");
            return PressCtrlPromise;
        }).then(function(){
            const PressAPromise=page.keyboard.press('A',{delay:50});
            return PressAPromise;
        }).then(function(){
            const PressXPromise=page.keyboard.press('X',{delay:50});
            return PressXPromise;
        }).then(function(){
            const unPressCtrlPromise=page.keyboard.up('Control');
            return unPressCtrlPromise;
        }).then(function(){
            const clickEditorPromise=waitAndClick('.monaco-editor.no-user-select.vs',page);
            return clickEditorPromise;
        }).then(function(){
            const PressCtrlPromise=page.keyboard.down("Control");
            return PressCtrlPromise;
        }).then(function(){
            const PressAPromise=page.keyboard.press('A',{delay:50});
            return PressAPromise;
        }).then(function(){
            const PressXPromise=page.keyboard.press('V',{delay:50});
            return PressXPromise;
        }).then(function(){
            const unPressCtrlPromise=page.keyboard.up('Control');
            return unPressCtrlPromise;
        }).then(function(){
            const pressSubmitPromise=page.click('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled');
            return pressSubmitPromise;
        }).then(function(){
            const waitFor3secPromise=page.waitForTimeout(3000);
            return waitFor3secPromise;
        }).then(function(){
            return page.goBack();
        }).then(function(){
            resolve();
        }).catch(function(err){
            reject();
        })
    })
}

function waitAndClick(selector,cpage){
    return new Promise(function(resolve,reject){
        const elementWaitPromise=cpage.waitForSelector(selector);
        elementWaitPromise.then(function(){
            const elementClickPromise=cpage.click(selector);
            return elementClickPromise;
        }).then(function(){
            resolve();
        }).catch(function(err){
            reject();
        })
    })
}

