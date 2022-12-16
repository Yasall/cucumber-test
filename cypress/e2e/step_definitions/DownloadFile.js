import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import { downloadfile } from "../Pages/downloadPage";

Given('I am on the heroku website', () => {
    cy.visit(Cypress.config('sauceUrl'));
})

Then('I navigate to file Download', () => {
    downloadfile.navigate();
})

Then('I download {string}', (file) => {
    downloadfile.fileDownload(file);
})

Then('I Verify {string} exists in download folder', (file) => {
    downloadfile.verifyLocation(file);
})