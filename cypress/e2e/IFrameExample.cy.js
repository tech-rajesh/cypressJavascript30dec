/// <reference types="cypress"/>



describe('Frame Example ', function () {


    it.skip('Frame Example - without plugin ', function () {
        cy.visit('https://the-internet.herokuapp.com/iframe')

        const iframe = cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)
        
        iframe.clear().type('Welcome you all in today session !!  {ctrl}A');
        
        //.type('{ctrl}A')
        
        
        
        cy.get('button[aria-label="Bold"]').click()
       
        

    })


    it.skip('Frame Example - with custom method ', function () {
        cy.visit('https://the-internet.herokuapp.com/iframe')

        // const iframe = cy.get('#mce_0_ifr')
        //     .its('0.contentDocument.body')
        //     .should('be.visible')
        //     .then(cy.wrap)
        

        cy.switchToFrame('#mce_0_ifr')
            .clear().type('Welcome you all in today session !!  {ctrl}A');
        
        //.type('{ctrl}A')
        
        
        
        cy.get('button[aria-label="Bold"]').click()
       
        

    })


    it('Frame Example - with iframe plugin ', function () {
        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.frameLoaded('#mce_0_ifr')

        cy.iframe('#mce_0_ifr').clear().type('Welcome you all in today session !! {ctrl+a}');
        
        cy.get('button[aria-label="Bold"]').click()
       
        

    })

    

})