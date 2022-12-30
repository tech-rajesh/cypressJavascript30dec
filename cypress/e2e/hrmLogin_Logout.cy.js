/// <reference types="cypress" />

describe('Nop Comm App' , ()=>{


    it('verifyloginTest', ()=>{


        cy.viewport(1900,1200)
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')

        //CSS - selector

        cy.get('input[id=Email]').clear()
        cy.get('input[id=Email]').type('admin@yourstorewrong.com')


        cy.get('input[id=Email]').clear().type('admin@yourstore.com')


        //enter password 
        //cy.get('input[id=Password]').clear().type('admin')


        cy.get('.password').clear().type('admin')


        //click on Login button
        cy.get('button[type="submit"]').click()

        //validation step

        //application title / url / specific element 
        cy.title().should('eql','Dashboard / nopCommerce administration')

        cy.url().should('eql','https://admin-demo.nopcommerce.com/admin/')

    })


})