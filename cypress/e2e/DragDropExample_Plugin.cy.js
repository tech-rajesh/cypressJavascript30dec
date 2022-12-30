/// <reference types="cypress"/>
require('@4tw/cypress-drag-drop')


describe('dragDrop Example ', function () {


    it('DragDrop Example - using plugin ', function () {
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')


        cy.get('#box6').should('be.visible')
        cy.get('#box106').should('be.visible')
        
        //source ----- target
        //cy.get('#box6').drag('#box106')
        cy.get('#box6').drag('#box106', {force: true})


    })


    

})