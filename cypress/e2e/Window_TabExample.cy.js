/// <reference types="cypress"/>



describe('WIndow Tab Example ', function () {


    //domain diiferent - it will work

    it.skip('app 1', function () {
        cy.visit('https://the-internet.herokuapp.com/windows')  //parent Tab

        //invoke method --- remove an attribute 
        cy.get('.example > a').invoke('removeAttr', 'target').click() //clicking on link

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000)

        //navigation command
        cy.go('back');

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows')

        
    })


    it('app 2', function () {


        //limitation   --- domain should be same

        let parentUrl = 'https://the-internet.herokuapp.com/windows'
        cy.visit(parentUrl)  //parent Tab

        //invoke method --- remove an attribute 
        cy.get('.example > a').then( (ele) => {


            const app_newURL = ele.prop('href')  //domainIno 

            cy.visit(app_newURL);
            //cy.visit("domainName" + app_newURL)

        }  )

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

       
        cy.wait(5000)

        //navigation command
        //cy.go('back');

        cy.visit(parentUrl)
        

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows')

        
    })


    


})