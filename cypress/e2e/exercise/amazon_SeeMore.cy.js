

describe('empty spec', () => {
    it('passes', () => {
      
      
      
      cy.visit('https://www.amazon.in/')
      //cy.visit()
    cy.get('').click();
    cy.title().should('include', '')
  
  
    })
  })