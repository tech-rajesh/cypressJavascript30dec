/// <reference types="cypress"/>



describe('Action Trigger Example ', function () {


    xit('mouse over operation ', function () {
        cy.visit('https://demo.opencart.com')


        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()

        //cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mo')
    })

    it('mouse over operation - amazonPage ', function () {
        cy.visit('https://www.amazon.in')


        cy.get('#nav-link-accountList-nav-line-1').trigger('mouseover')
        cy.xpath("//span[contains(text(),'Create a')]").trigger('mouseover').click()
        

        //validation step

    })


    it.skip('right click - example ', function () {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')


        //cy.xpath("//span[contains(text(),'right')]")
        //app1
        //cy.get('#authentication > span').trigger('contextmenu')
        
        
        //app2
        cy.get('#authentication > span').rightclick()



    })


    it.only('double click - example ', function () {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')


        //cy.xpath("//span[contains(text(),'right')]")
        //app1
        // cy.get('#authentication > button').trigger('dblclick')
        

        // cy.on('window:alert', ( alert) => {

        //     expect(alert).to.contains('You double clicked me.. Thank You')

        // })
        
        //app2
        cy.get('#authentication > button').dblclick()


        cy.on('window:alert', ( alert) => {

            expect(alert).to.contains('You double clicked me.. Thank You')

        })

    })



    it.skip('Alert Example - Simple Alert -validate alert Text', function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        

    })

    


})