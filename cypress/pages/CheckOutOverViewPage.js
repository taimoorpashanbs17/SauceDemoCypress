class CheckOutOverView{
    urlVerification(url){
        cy
            .verifyURL(url)
    }

    checkOutOverViewHeaderDisplaying(){
        return cy
            .get('.title')
            .should('exist')
    }

    checkProductDisplaying(){
        return cy
                .get('.inventory_item_name')
                .should('exist')
    }

    verifyProductName(productName){
        this.checkProductDisplaying()
        cy.verifyText(cy
                        .get('.inventory_item_name'),
                        productName)
    }

    checkProductDescriptionDisplaying(){
        return cy
                .get('.inventory_item_desc')
                .should('exist')
    }

    verifyProductDescription(description){
        this.checkProductDescriptionDisplaying()
        cy.verifyText(cy
                        .get('.inventory_item_desc')
                        , description)
    }

    checkProductPriceDisplaying(){
        return cy
                .get('.inventory_item_price')
                .should('exist')
    }

    verifyProductPrice(price){
        this.checkProductPriceDisplaying()
        cy.verifyText(cy
                        .get('.inventory_item_price')
                        , price)
    }

    checkProductQuantityDisplaying(){
        return cy
                .get('.cart_quantity')
                .should('exist')
    }

    verifyProductQuantity(quantity){
        this.checkProductQuantityDisplaying()
        cy.verifyText( cy
                        .get('.cart_quantity')
                        , quantity)
    }

    checkCartCount(count){
        cy
            .verifyText(cy
                     .get('.shopping_cart_badge'), 
                     count)
    }

    checkItemTotalDisplaying(){
        return cy
                .get('.summary_subtotal_label')
                .should('exist')
    }

    verifyItemPrice(price){
        this.checkItemTotalDisplaying()
        let priceText = "Item total: "+price
        cy.verifyText(cy
                        .get('.summary_subtotal_label')
                        , priceText)
    }

    checkTaxPriceDisplaying(){
        return cy
                .get('.summary_tax_label')
                .should('exist')
    }

    verifyItemTaxPrice(taxPrice){
        this.checkTaxPriceDisplaying()
        let taxPriceText = "Tax: "+taxPrice
        cy.verifyText(cy
                        .get('.summary_tax_label')
                        , taxPriceText)
    }

    checkTotalPriceDisplaying(){
        return cy
                .get('.summary_total_label')
                .should('exist')
    }

    verifyTotalProductCartPrice(itemPrice, taxPrice){
        this.checkTotalPriceDisplaying()
        let itemPriceText = parseFloat(itemPrice.replace(/[^0-9.]/g, ''))
        let taxPriceText = parseFloat(taxPrice.replace(/[^0-9.]/g, ''))
        let totalPrice = itemPriceText + taxPriceText
        let totalPriceText = "Total: $"+totalPrice
        cy.verifyText(cy
                        .get('.summary_total_label')
                        , totalPriceText)
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

    }

}

module.exports = CheckOutOverView