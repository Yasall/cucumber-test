import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import { addcart } from "../Pages/addCart"
import { loginpage } from "../Pages/loginPage";

Given('I have logged in to saucedemo {string}, {string}', (username, password) => {
    cy.visit(Cypress.config('baseUrl'));
    loginpage.typeUsername(username);
    loginpage.typePassword(password);
    loginpage.clickLogin();
});

Then('I add the backpack to the cart', () => {
    addcart.clickBag();
});

Then('I add light to the cart', () => {
    addcart.clickLight();
});

Then('I verify I have items in cart', () => {
    addcart.getCart();
});

Then('I remove the bag from my cart', () => {
    addcart.removeBag();
});

Then('I remove the light from my cart', () => {
    addcart.removeLight();
});

Then('I verify the cart should be empty', () => {
    addcart.verifyEmptyCart();
})


