

describe('Custome Exampple', ()=>{


    it('click on element ', ()=>{

        cy.visit('https://demo.nopcommerce.com/')


        //cy.get('a').contains('Apple MacBook Pro 13-inch').click();
        cy.LinkText('Apple MacBook Pro 13-inch')

        //create a object of class
        //method()


        cy.url().should('eq', 'https://demo.nopcommerce.com/apple-macbook-pro-13-inch')


    })


    it.skip('click on element ', ()=>{

        cy.visit('https://demo.nopcommerce.com/')


        cy.get('a').contains('Apple MacBook Pro 13-inch').click();

        cy.url().should('eq', 'https://demo.nopcommerce.com/apple-macbook-pro-13-inch')


    })

})