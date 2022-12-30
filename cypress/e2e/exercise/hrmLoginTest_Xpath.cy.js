

describe('XPATH test', ()=>{


    it('perform action using xpath', ()=>{


        cy.visit('https://www.amazon.in/')

        //cy.get('')              //css selector
        cy.xpath('//input[@id="twotabsearchtextbox"]').type('iphone 14')


    })


    it('finds list items', () => {


        cy.visit('https://www.amazon.in/')
        cy.xpath('//div[@class="nav-search-field "]/input').type('iphone 14 pro')
        cy.xpath('//div[@class="nav-search-field "]/input').clear()

        cy.xpath('//div[@class="nav-search-field "]').xpath('/input').type('iphone 14 pro')

        
        

      });


})