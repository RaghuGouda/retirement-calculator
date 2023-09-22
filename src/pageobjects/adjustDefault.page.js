const ElementHelper = require('../support/elementHelper')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AdjustDefault {
    /**
     * define selectors in contractor
     */
    constructor(){
        this.adjustDefault="//*[text()='Adjust default values']"
        this.additionalIncome = '#additional-income',
        this.retirementDuration = '#retirement-duration',
        this.includeInflation = "//*[@id='include-inflation']//../label",
        this.expectedInflationRate = '#expected-inflation-rate',
        this.retirementAnnualIncome = '#retirement-annual-income',
        this.preRetirementRoi = '#pre-retirement-roi',
        this.postRetirementRoi = '#post-retirement-roi',
        this.saveChanges = "//button[text()='Save changes']"
        this.calculate="//button[text()='Calculate']"
    }
    async adjustDefaultValues(additionalIncome,retirementDuration,retirementAnnualIncome,preRetirementRoi,postRetirementRoi) {
        await ElementHelper.elementClick(this.adjustDefault);
        await ElementHelper.waitForElement()
        await ElementHelper.elementClickAndType(this.additionalIncome,additionalIncome);
        await ElementHelper.elementForType(this.retirementDuration,retirementDuration);
        await ElementHelper.elementClick(this.includeInflation);
        await ElementHelper.elementForType(this.retirementAnnualIncome,retirementAnnualIncome);
        await ElementHelper.elementForType(this.preRetirementRoi,preRetirementRoi);
        await ElementHelper.elementForType(this.postRetirementRoi,postRetirementRoi);
        await ElementHelper.elementClick(this.saveChanges);
    }
   
    async calculateRetirement() {
        await ElementHelper.waitForElementAndClick(this.calculate);
    } 

}

module.exports = new AdjustDefault();
