class Inventory{
    urlVerification(url){
        cy
            .url()
            .should('eq', url)
    }

    clickOnProductAddCartButton(){
        cy
            .get('[data-test="add-to-cart-sauce-labs-backpack"]')
            .click()
    }

    checkCartCount(count){
        cy.
            scrollTo('top')
        cy
            .get('.shopping_cart_badge')
            .then(function(e){
                let numb = count.toString();
                const t = e.text()
                expect(t).to.contains(numb)
            })

    }

    clickOnCartLogo(){
        cy
            .get('.shopping_cart_link')
            .click()
    }

}

module.exports = Inventory