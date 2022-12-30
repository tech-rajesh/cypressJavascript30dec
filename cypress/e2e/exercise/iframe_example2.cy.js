/// <reference types="cypress" />
require('@4tw/cypress-drag-drop')


describe('IFrames testing in Cypress', () => {
    const iframe = '#post-2669 > div.twelve.columns > div > div > div.single_tab_div.resp-tab-content.resp-tab-content-active > p > iframe';
  
    beforeEach(() => {
      cy.visit('https://www.globalsqa.com/demo-site/draganddrop/');
    });
  
    it.skip('should let you switch to the iframe', () => {
      cy.switchToIframe(iframe)
        .clear()
        .type('hello')
        .should('have.text', 'hello');
  
      });
  
    it('should let you switch to the iframe using the cypress iframe plugin', () => {
      cy.frameLoaded("iframe[data-src*='photo']");
      //cy.iframe()
      //   .clear()
      //   .type('hello')
      //   .should('have.text', 'hello');

      //cy.wait(4000)
      cy.get('#gallery > li:nth-child(4) > img').drag('div#trash')

    });


  });