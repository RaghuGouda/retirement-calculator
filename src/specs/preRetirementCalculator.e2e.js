const PreRetirementCalculator = require('../pageobjects/preRetirementCalculator.page')
const AdjustDefault = require('../pageobjects/adjustDefault.page')
const config = require('../../wdio.conf')

const data= require('../../testdata/pre_retirement_data.json')

describe('My Login application', () => {
    it('should enter age details', async () => {
        await browser.url(config.config.baseUrl)
        await PreRetirementCalculator.age(data.CurrentAge,data.RetirementAge)
    })

    it('should enter Income/Savings', async () => {
        await PreRetirementCalculator.savings(data.CurrentAnnualIncome,data.SpouseAnnualIncome,data.CurrentRetirementSavings,data.CurrentRetirementContribution,data.AnnualRetirement)
    })

    it('should enter Social Security income', async () => {
        await PreRetirementCalculator.socialSecurityIncome(data.SocialSecurity,data.SocialSecurityOverride)
    })
    
    it('should enter Default calculator values', async () => {
        await AdjustDefault.adjustDefaultValues(data.additionalIncome,data.retirementDuration,data.retirementAnnualIncome,data.preRetirementRoi,data.postRetirementRoi)
        await AdjustDefault.calculateRetirement()
    })
     
    it('should able to edit the calculator values', async () => {
        await PreRetirementCalculator.editCalculatorValues()
        await PreRetirementCalculator.updateRetirementAge(data.UpdatedRetirementAge)
        await AdjustDefault.calculateRetirement()
    })
})

