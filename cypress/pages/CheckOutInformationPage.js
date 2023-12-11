/// <reference types="Cypress" />


class CheckOutInformation{

    urlVerification(url){
        cy
            .verifyURL(url)
        cy
            .addContext("Correct URL is displaying i.e. "+url)
    }

    checkFirstNameFieldDisplaying(){
        return cy
            .get('#first-name')
            .should('exist')
    }

    enterFirstName(firstName){
        this
            .checkFirstNameFieldDisplaying()
            .type(firstName)
        cy
            .addContext(firstName+" entered on First Name field.")
    }

    checkLastNameDisplaying(){
        return cy
            .get('#last-name')
            .should('exist')
    }

    enterlastName(lastName){
        this
            .checkLastNameDisplaying()
            .type(lastName)
        cy
            .addContext(lastName+" entered on Last Name field")
    }

    checkPostalCodeFieldDisplaying(){
        return cy
            .get('#postal-code')
            .should('exist')
    }

    enterPostalCode(postalCode){
        this
            .checkPostalCodeFieldDisplaying()
            .type(postalCode)
        cy
            .addContext(postalCode+" entered on Postal Code field.")
    }

    checkContinueButtonDisplaying(){
        return cy
            .get('#continue')
            .should('exist')
    }

    clickOnContinueButton(){
        this
            .checkContinueButtonDisplaying()
            .click()
        cy
            .addContext("Clicked on Continue Button")
    }

}

module.exports = CheckOutInformation