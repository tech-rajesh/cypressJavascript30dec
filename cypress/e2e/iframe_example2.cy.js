/// <reference types="cypress" />
require('@4tw/cypress-drag-drop')


describe('IFrames testing in Cypress', () => {
    
    beforeEach(() => {
      cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
    });
  
      
    it('should let you switch to the iframe using the cypress iframe plugin', () => {
      
      cy.get('#box6').drag('#box106', {force: true})

    });


  });