

/// <reference types="cypress"/>



describe('dropdown Example ', function () {


    it.skip('dropdown Example - with Select tag ', function () {
        cy.visit('https://www.zoho.com/commerce/free-demo.html')

        cy.get('#zcf_address_country')
        .select('Canada')
        .should('have.value', 'Canada')
        
        cy.get('#zcf_address_country')
        .select(3)
        .should('have.value', 'Algeria')
        

    })

    it.skip('dropdown Example - without Select tag ', function () {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        
        cy.get('#select2-billing_country-container').click()

        cy.get('.select2-search__field').type('Italy').type('{enter}')
        

        cy.get('#select2-billing_country-container').should('have.text', 'Italy')



    })

    
    it.skip('dropdown Example - autosuggestion ', function () {
        cy.visit('https://www.wikipedia.org/')

        
        cy.get('[name="search"]').type('Delhi')



        //validate autosuggestion count
        cy.get('h3.suggestion-title').should('have.length', 6)

        cy.get('h3.suggestion-title').contains('Delhi University').click()

        
    })

    it('dropdown Example - autosuggestion - google/dynamic ', function () {
        cy.visit('https://www.google.com/')

        
        cy.get('[name="q"]').type('iphone 14')

        cy.get('div.wM6W7d').should('have.length', 11)
        cy.get('div.wM6W7d').contains('iphone 14 pro').click()

        
    })


})