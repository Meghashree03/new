const { defineConfig } = require("Cypress");
async function setupNodeEvents(on, config) {
  // implement node event listeners here
  return config
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    // specPattern:'cypress/Test Example/MyFirstTest.cy.js',
    // specPattern:'cypress/Test Example/*.cy.js'
    specPattern:'cypress/Integration/API test/*.cy.js'
    
  },
});

  
  
    
    