class CheckOutInformation{

    urlVerification(url){
        cy
            .verifyURL(url)
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
    }

    checkContinueButtonDisplaying(){
        return cy
                .get('#continue')
                .should('exist')
    }

    clickOnContinueButton(){
        this.checkContinueButtonDisplaying()
                .click()
    }

}

module.exports = CheckOutInformation