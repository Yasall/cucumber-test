import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
const loginpage = require('../Pages/loginpage');

Given('I am on front page and I want to log in to sauce demo'), () => {
   cy.visit(Cypress.config('baseUrl'));
}
Then('A user enters the username {string}', (username) => {
    loginpage.typeUsername(username);
});
Then ('A user enters the password {string}', (password) => {
    loginpage.typePassword(password);
});
Then ('a user clicks on the login button', () => {
    loginpage.clickLogin();
})
// })