//import ----- cypress autosuggestion




describe('login feature', function () {


    it('verify app title - positive test ', function () {
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2')

        //validation step
        //mocha/chai  ------- 
        cy.title().should('eq', 'Your store. Login')



    })


})