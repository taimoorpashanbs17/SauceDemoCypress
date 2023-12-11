/// <reference types="Cypress" />

class Cart{
    urlVerification(url){
        cy
            .url()
            .should('eq', 
            url)
        cy
            .addContext("Correct URL is displaying i.e. "+url)
    }

    checkCartCount(count){
        cy
            .verifyText(cy
                     .get('.shopping_cart_badge'), 
                     count)
        cy
            .addContext(count+" count is displaying")
    }

    verifyProductName(productName){
        cy
            .verifyText(cy
                     .get('.inventory_item_name'), 
                     productName)
        cy
            .addContext(productName+" is displaying as Product Name")
    }

    verifyProductDescription(productDescription){
        cy
            .verifyText(cy
                     .get('.inventory_item_desc'), 
                     productDescription)
        cy
            .addContext(productDescription+" is displaying")
    }

    verifyProductPrice(prodcutPrice){
        cy
            .verifyText(cy
                     .get('.inventory_item_price'), 
                     prodcutPrice)
        cy
            .addContext(prodcutPrice+" is displaying")
    }

    verifyProductQuantity(productQuantity){
        cy
            .verifyText(cy
                     .get('.cart_quantity'), 
                     productQuantity)
        cy
            .addContext(productQuantity+" is displaying as Product Quantity")
    }

    clickOnCheckButton(){
        cy
            .get('[data-test="checkout"]')
            .click()
        cy
            .addContext("Clicked on Check Button")
    }

}

module.exports = Cart