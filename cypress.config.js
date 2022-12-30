const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',      //html reports

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here


      hideXHRInCommandLog= true
      trashAssetsBeforeRuns= false
      screenshotOnRunFailure= true
      watchForFileChanges = false
      defaultCommandTimeout= 10000

      //baseUrl= 'https://demo.opencart.com'

      retries= {
        runMode: 1,
        openMode: 1,

        
        }
      
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },

  

});
