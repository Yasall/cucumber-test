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

Then('I navigate to secure file Downloader', () => {
    cy.visit('https://admin:admin@the-internet.herokuapp.com/download_secure', {failOnStatusCode: false})
})

Then('I securely download {string}', (file) => {
    console.log('finish waiting');
    downloadfile.secureDownload(file);
})

Then('I verify {string} exists in download folder too', (file) => {
    downloadfile.verifyLocation(file);
})