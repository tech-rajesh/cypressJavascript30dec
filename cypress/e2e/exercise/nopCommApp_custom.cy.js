/// <reference types="cypress"/>


describe('custom command Example', ()=>{


    it('click on link', ()=>{

        cy.visit('https://demo.nopcommerce.com/')
        //cy.clickLink('Apple macbook Pro 13-inch')
        cy.clickLink('Apple MacBook Pro 13-inch')
        cy.url().should('eq', 'https://demo.nopcommerce.com/apple-macbook-pro-13-inch')
        //cy.contains()

    })
})