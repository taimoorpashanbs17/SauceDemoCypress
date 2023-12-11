/// <reference types="Cypress" />

class CheckOutComplete{
    urlVerification(url){
        cy
            .verifyURL(url)
        cy
            .addContext("Correct URL is displaying i.e. "+url)
    }

    checkCheckOutCompleteTitleDisplaying(){
        cy
            .get('.title')
            .should('exist')
        cy
            .addContext("CheckOut Complete Title is displaying")
    }

    checkHeaderMessageDisplaying(){
        cy
            .get('.complete-header')
            .should('exist')
        cy
            .addContext("Header Message displaying")
    }

    verifyHeaderMessage(message){
        cy
            .verifyText(
                cy
                .get('.complete-header')
                , message)
        cy
            .addContext(message+" is displaying")
    }

    checkOrderTextMessageDisplaying(){
        cy
            .get('.complete-text')
            .should('exist')
        cy
            .addContext("Order Text Message is displaying")
    }

    verifyTextMessage(message){
        cy
            .verifyText(cy
                        .get('.complete-text')
                        , message)
        cy
            .addContext(message+" is displaying")
                
    }

    checkBackHomeButtonDisplaying(){
        return cy
            .get('#back-to-products')
            .should('exist')
            .contains('Back Home')
    }

    clickOnBackHomeButton(){
        this
            .checkBackHomeButtonDisplaying()
            .click()
        cy
            .addContext("Clicked on Back to Home Button")
    }

}

module.exports = CheckOutComplete