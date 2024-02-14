const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    baseUrl: "https://www.founderandlightning.com/contact",
  },
  

  "reporter" : "mochawesome",
  "reporterOptions" : {
    "reportDir" : "cypress/results",
    "overwrite" : false,
    "html" : true,
    "junit" : false
  },

  
    "watchForFileChanges": false,
    "video": false,
    "viewportWidth": 1920,
    "viewportHeight": 1080,
    "chromeWebSecurity": false,
    "firefoxGcInterval": {
        "runMode": null,
        "openMode": null
    },
    "retries": {
        "runMode": 2,
        "openMode": 0
    },
   "execTimout": 60000,
    "defaultCommandTimeout": 10000,
    "pageLoadTimeout": 60000,
    "requestTimeout": 10000,
    "responseTimeout": 30000

});
