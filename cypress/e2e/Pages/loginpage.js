class loginPage {
    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button'),
        errorMessage: () => cy.get('[data-test="error"]'),
        url: () => cy.url()
    };

    typeUsername(username) {
        this.elements.usernameInput().type(username);
    }

    typePassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickLogin() {
        this.elements.loginBtn().click();
    }

    getErrorMessage(errormessage) {
        this.elements.errorMessage().should('contain', errormessage);
    }

    getUrl(message) {
        this.elements.url().should('contain', message);
    }
}
export const loginpage = new loginPage();