const ElementHelper = require('../support/elementHelper')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PreRetirementCalculator {
    /**
     * define selectors in contractor
     */
    constructor(){
        this.currentAge='#current-age',
        this.retirementAge='#retirement-age',
        this.currentIncome = '#current-income',
        this.spouseIncome = '#spouse-income',
        this.currentTotalSavings='#current-total-savings'
        this.currentAnnualSavings = '#current-annual-savings',
        this.savingsIncreaseRate = '#savings-increase-rate',
        this.yesSocialBenefits = "//*[@id='yes-social-benefits']//../label",
        this.married = "//*[text()='Married']",
        this.socialSecurityOverride = '#social-security-override',
        this.adjustDefaultValues="//*[contains(text(),'Adjust default values')]"
        this.Calculate="//button[contains(text(),'Calculate')]"
        this.editInfo="//button[contains(text(),'Edit')]"

    }

    async age(CurrentAge, RetirementAge) {
        await ElementHelper.elementForType(this.currentAge,CurrentAge);
        await ElementHelper.elementForType(this.retirementAge,RetirementAge);
    }

    async savings(CurrentAnnualIncome, SpouseAnnualIncome,CurrentRetirementSavings,CurrentRetirementContribution,AnnualRetirement) {
        await ElementHelper.elementClickAndType(this.currentIncome,CurrentAnnualIncome);
        await ElementHelper.elementClickAndType(this.spouseIncome,SpouseAnnualIncome);
        await ElementHelper.elementClickAndType(this.currentTotalSavings,CurrentRetirementSavings);
        await ElementHelper.elementForType(this.currentAnnualSavings,CurrentRetirementContribution);
        await ElementHelper.elementForType(this.savingsIncreaseRate ,AnnualRetirement);
    }

    async socialSecurityIncome(SocialSecurity, SocialSecurityOverride) {
        if(SocialSecurity==="Yes"){
            await ElementHelper.elementClick(this.yesSocialBenefits);
            await ElementHelper.waitForElementAndClick(this.married);
            await ElementHelper.elementClickAndType(this.socialSecurityOverride,SocialSecurityOverride);
        }
    }

    async editCalculatorValues() {
        await ElementHelper.waitForElementAndClick(this.editInfo);
    }

    async updateRetirementAge(UpdatedRetirementAge) {
        await ElementHelper.elementForType(this.retirementAge,UpdatedRetirementAge);
    }

}

module.exports = new PreRetirementCalculator();
