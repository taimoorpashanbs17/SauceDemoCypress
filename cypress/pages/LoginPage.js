class Login{
    navigate(){
        cy
        .visit("/")
        
        cy
        .url()
        .should('eq', 
        "https://www.saucedemo.com/")

        cy
        .log("Naviagting to Home Screen")
    }

    swagLogoDisplaying(){
        cy
        .get('.login_logo')
        .should('exist')

        cy
        .log("Swag Logo is displaying")
    }

    enterUser(userName){
        cy
        .get('#user-name')
        .should('exist')
        .type(userName)

        cy
        .log("Enter "+userName+" on username field.")
    }

    enterPassword(password){
        cy
        .get('#password')
        .should('exist')
        .type(password)

        cy
        .log("Enter "+password+" on password field.")
    }

    clickOnLoginButton(){
        cy
        .get('#login-button')
        .click()

        cy
        .log("Click on Login Button")
    }
}

module.exports = Login