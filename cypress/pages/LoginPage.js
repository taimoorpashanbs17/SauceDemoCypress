class Login{
    navigate(){
        cy
        .visit("/")
        
        cy
        .url()
        .should('eq', 
        "https://www.saucedemo.com/")
    }

    swagLogoDisplaying(){
        cy
        .get('.login_logo')
        .should('exist')
    }

    enterUser(userName){
        cy
        .get('#user-name')
        .should('exist')
        .type(userName)
    }

    enterPassword(password){
        cy
        .get('#password')
        .should('exist')
        .type(password)
    }

    clickOnLoginButton(){
        cy
        .get('#login-button')
        .click()
    }
}

module.exports = Login