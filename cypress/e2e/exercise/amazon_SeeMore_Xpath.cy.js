

describe('XPATH test', ()=>{


    it('perform action using xpath', ()=>{


        cy.visit('https://www.amazon.in/')
        cy.xpath('//input[@id="twotabsearchtextbox"]').type('iphone 14')


    })


    

})