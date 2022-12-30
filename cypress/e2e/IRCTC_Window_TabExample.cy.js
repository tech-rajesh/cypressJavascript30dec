/// <reference types="cypress"/>



describe('WIndow Tab Example ', function () {


    //cypress -- support -----limitation

    it.skip('app 1', function () {
        cy.visit('https://www.irctc.co.in/nget/train-search')  //parent Tab

        //invoke method --- remove an attribute 
        cy.get('.example > a').invoke('removeAttr', 'target').click() //clicking on link

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

       
        cy.wait(5000)

        //navigation command
        cy.go('back');

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows')

        
    })


    it('app 2', function () {
        cy.visit('https://www.irctc.co.in/nget/train-search')  //parent Tab

        //invoke method --- remove an attribute 
        cy.get('.example > a').invoke('removeAttr', 'target').click() //clicking on link

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

       
        cy.wait(5000)

        //navigation command
        cy.go('back');

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows')

        
    })


    


})