// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// import 'cypress-iframe';
// require('@4tw/cypress-drag-drop')

// Cypress.Commands.add('clickByLabel', (ele) => {


//         cy.get('').as("txtUserName")
//         cy.get(@txtUserName).


// })


//custom method in cypress 
Cypress.Commands.add('LinkText', (label) =>{

        cy.get('a').contains(label).click()

} )
   
Cypress.Commands.add('clickLink', (label) => {

    cy.get('a').contains(label).click()

})


Cypress.Commands.add('switchToFrame', (framelocator) => {

    
    return cy.get(framelocator)
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);


})










// )


/// <reference types="cypress"/>





