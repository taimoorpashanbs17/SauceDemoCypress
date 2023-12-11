/// <reference types="Cypress" />


class CheckOutOverView{
    urlVerification(url){
        cy
            .verifyURL(url)
        cy
            .addContext("URL displaying is correct i.e. "+url)
    }

    checkOutOverViewHeaderDisplaying(){
        cy
            .get('.title')
            .should('exist')
        cy
            .addContext("Check-Out Over View Header Displaying.")
    }

    checkProductDisplaying(){
        return cy
            .get('.inventory_item_name')
            .should('exist')
    }

    verifyProductName(productName){
        this
            .checkProductDisplaying()
        cy.
            verifyText(cy
                            .get('.inventory_item_name'),
                                    productName)
        cy. 
            addContext(productName+" is displaying")
    }

    checkProductDescriptionDisplaying(){
        return cy
            .get('.inventory_item_desc')
            .should('exist')
    }

    verifyProductDescription(description){
        this
            .checkProductDescriptionDisplaying()
        cy
            .verifyText(cy
                        .get('.inventory_item_desc')
                        , description)
        cy
            .addContext("Valid Description of Product is displaying")
    }

    checkProductPriceDisplaying(){
        return cy
            .get('.inventory_item_price')
            .should('exist')
    }

    verifyProductPrice(price){
        this
            .checkProductPriceDisplaying()
        cy
            .verifyText(cy
                        .get('.inventory_item_price')
                        , price)
        cy
            .addContext("Valid Product price is displaying i.e. "+price)
    }

    checkProductQuantityDisplaying(){
        return cy
            .get('.cart_quantity')
            .should('exist')

    }

    verifyProductQuantity(quantity){
        this
            .checkProductQuantityDisplaying()
        cy
            .verifyText(cy
                        .get('.cart_quantity')
                        , quantity)
        cy
            .addContext("Product Quantity is displaying fine i.e. "+quantity)
    }

    checkCartCount(count){
        cy
            .verifyText(cy
                     .get('.shopping_cart_badge'), 
                     count)
        cy
            .addContext("Correct Cart count i.e. "+count+" is displaying.")
    }

    checkItemTotalDisplaying(){
        return cy
            .get('.summary_subtotal_label')
            .should('exist')
    }

    verifyItemPrice(price){
        this
            .checkItemTotalDisplaying()
        let priceText = "Item total: "+price
        cy
            .verifyText(cy
                        .get('.summary_subtotal_label')
                        , priceText)
        cy
            .addContext("Correct Item price was displaying i.e. "+price)
    }

    checkTaxPriceDisplaying(){
        return cy
            .get('.summary_tax_label')
            .should('exist')
    }

    verifyItemTaxPrice(taxPrice){
        this
            .checkTaxPriceDisplaying()
        let taxPriceText = "Tax: "+taxPrice
        cy
            .verifyText(cy
                        .get('.summary_tax_label')
                        , taxPriceText)
        cy
            .addContext("Item Tax price is displaying")
    }

    checkTotalPriceDisplaying(){
        return cy
            .get('.summary_total_label')
            .should('exist')
    }

    verifyTotalProductCartPrice(itemPrice, taxPrice){
        this
            .checkTotalPriceDisplaying()
        let itemPriceText = parseFloat(itemPrice.replace(/[^0-9.]/g, ''))
        let taxPriceText = parseFloat(taxPrice.replace(/[^0-9.]/g, ''))
        let totalPrice = itemPriceText + taxPriceText
        let totalPriceText = "Total: $"+totalPrice
        cy
            .verifyText(cy
                        .get('.summary_total_label')
                        , totalPriceText)
        cy
            .addContext("Price of Product is displaying on cart")
    }

    checkThatFinishButtonDisplaying(){
        return cy
            .get('#finish')
            .should('exist')
    }

    clickOnFinishButton(){
        this
            .checkThatFinishButtonDisplaying()
            .click()
        cy
            .addContext("Clicked on Finish Button")
    }

}

module.exports = CheckOutOverView