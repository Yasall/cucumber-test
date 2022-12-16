const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const {createEsbuildPlugin} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/Features/*.feature',
    chromeWebSecurity: false,
    baseUrl: 'https://www.saucedemo.com/',
    sauceUrl: 'https://the-internet.herokuapp.com/',
    async setupNodeEvents(on, config) {
      on('task', {downloadFile}),
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
            plugins: [createEsbuildPlugin(config)],
          })
        );
        allureWriter(on,config)
        return config;
    
      
      // implement node event listeners here
    },
    env: {
      allureReuseAfterSpec: true,
    },
  },
});
