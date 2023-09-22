const { $ } = require('@wdio/globals')

class ElementHelper {
    async elementClick(element){
        await $(element).click()
    }
    async waitForElement(){
       await browser.pause(1000);
    }
    async waitForElementAndClick(element){
        await browser.pause(1000);
        await $(element).click()
     }
    async elementForType(element,text){
        await $(element).setValue(text)
    }
    async elementClickAndType(element,text){
        await $(element).click()
        await $(element).setValue(text)
    }
}
module.exports = new ElementHelper();