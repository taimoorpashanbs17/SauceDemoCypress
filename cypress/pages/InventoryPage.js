/// <reference types="Cypress" />


class Inventory{
    urlVerification(url){
        cy
            .url()
            .should('eq', url)

        cy
            .addContext("URL validated as correct as "+url)
    }

    clickOnProductAddCartButton(){
        cy
            .get('[data-test="add-to-cart-sauce-labs-backpack"]')
            .click()
        
        cy
            .addContext("Clicked on Product Add Button")
    }

    checkCartCount(count){
        cy.
            scrollTo('top')
        cy
            .addContext("Scroll to Top")
        cy
            .get('.shopping_cart_badge')
            .then(function(e){
                let numb = count.toString();
                const t = e.text()
                expect(t).to.contains(numb)
            })
        
        cy
            .addContext("Shopping cart showing correct count i.e. "+count)

    }

    clickOnCartLogo(){
        cy
            .get('.shopping_cart_link')
            .click()
        
        cy
            .addContext("Click on Cart logo")
    }

}

module.exports = Inventory