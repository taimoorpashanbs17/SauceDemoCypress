class CheckOutComplete{
    urlVerification(url){
        cy
            .verifyURL(url)
    }

    checkCheckOutCompleteTitleDisplaying(){
        cy
            .get('.title')
            .should('exist')
    }

    checkHeaderMessageDisplaying(){
        cy
            .get('.complete-header')
            .should('exist')
    }

    verifyHeaderMessage(message){
        cy.verifyText(
            cy
            .get('.complete-header')
            , message
        )
    }

    checkOrderTextMessageDisplaying(){
        cy
            .get('.complete-text')
            .should('exist')
    }

    verifyTextMessage(message){
        cy.verifyText(cy
                    .get('.complete-text')
                    , message)
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
    }

}

module.exports = CheckOutComplete