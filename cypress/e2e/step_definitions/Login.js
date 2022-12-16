import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import { loginpage } from "../Pages/loginPage";

//const loginpage =  require("../Pages/loginpage");

Given('I am on front page and I want to log in to sauce demo', () => {
   cy.visit(Cypress.config('baseUrl'));
});
Then('I enter the username {string}', (username) => {
    loginpage.typeUsername(username);
});
Then ('I enter the password {string}', (password) => {
    loginpage.typePassword(password);
});
Then ('I click on the login button', () => {
    loginpage.clickLogin();
})

When("A user enters an incorrect {string} and {string}" , (username, password) => {
    loginpage.typeUsername(username);
    loginpage.typePassword(password);
})

Then('The error message should contain {string}', (errormessage) => {
    loginpage.getErrorMessage(errormessage);
})
//inventory.html
Then('Verify that I am logged in {string}', (message) => {
    loginpage.getUrl(message);
})
// })


