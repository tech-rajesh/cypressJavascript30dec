

describe('login feature', function () {

    it('testcase1', () => {

        cy.viewport(1920,1080)
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')

        cy.title().should('eq', 'Your store. Login')



        cy.get('input[id="Email"]').clear().type('admin@yourstore.com')



        cy.get('input[id="Password"]').clear().type('admin')



        cy.get('button[type="submit"]').click()



        cy.url().should('eq', 'https://admin-demo.nopcommerce.com/admin/')



        cy.get('.content-header > h1').should('be.visible')



        //force 
        //cy.get('a[href="/logout"]').click({force : true})

        //cy.get('a[href="/logout"]').trigger("click")

        //cy.get('a[href="/logout"]').trigger("mouseover").click({force: true})
        //cy.reload()
        cy.get('a[href="/logout"]').reload().click()

        //cy.get('a[href="/logout"]').focus().type('{enter}')

        // cy.wait(7000)

        // cy.contains('.nav-link', 'Logout')
        // .focus()
        // .click({force: true})

        // cy.wait(7000)



      // cy.url().should('eq', 'https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F', {timeout: 10000})

        cy.url()


    })

})