

describe('Amazon App', () => {
  it('test1', () => {



    cy.visit('https://www.amazon.in/')
    

    cy.get("a[href*='nav_cs_mobiles']").then($ele  => {


        const MobileText = $ele.text()
        console.log(MobileText);

        cy.log("=========================", MobileText)


        //webelement ------ wrap 

    })


    





  })
})