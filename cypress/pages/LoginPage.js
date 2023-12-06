class Login{
    navigate(){
        cy
        .visit("/")
        
        cy
        .url()
        .should('eq', 
        "https://www.saucedemo.com/")

        cy
        .addContext("Navigating Home Page")
    }

    swagLogoDisplaying(){
        cy
        .get('.login_logo')
        .should('exist')

        cy
        .addContext("Swag Logo is displaying")
    }

    enterUser(userName){
        cy
        .get('#user-name')
        .should('exist')
        .type(userName)

        cy
        .addContext("Enter "+userName+" on username field.")
    }

    enterPassword(password){
        cy
        .get('#password')
        .should('exist')
        .type(password)

        cy
        .addContext("Enter "+password+" on password field.")
    }

    clickOnLoginButton(){
        cy
        .get('#login-button')
        .click()

        cy
        .addContext("Click on Login Button")
    }
}

module.exports = Login