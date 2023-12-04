class Cart{
    urlVerification(url){
        cy
            .url()
            .should('eq', 
            url)
    }

    checkCartCount(count){
        cy
            .verifyText(cy
                     .get('.shopping_cart_badge'), 
                     count)
    }

    verifyProductName(productName){
        cy
            .verifyText(cy
                     .get('.inventory_item_name'), 
                     productName)
    }

    verifyProductDescription(productDescription){
        cy
            .verifyText(cy
                     .get('.inventory_item_desc'), 
                     productDescription)
    }

    verifyProductPrice(prodcutPrice){
        cy
            .verifyText(cy
                     .get('.inventory_item_price'), 
                     prodcutPrice)
    }

    verifyProductQuantity(productQuantity){
        cy
            .verifyText(cy
                     .get('.cart_quantity'), 
                     productQuantity)
    }

    clickOnCheckButton(){
        cy
            .get('[data-test="checkout"]')
            .click()
    }

}

module.exports = Cart