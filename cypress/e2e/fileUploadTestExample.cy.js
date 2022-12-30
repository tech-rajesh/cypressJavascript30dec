/// <reference types="cypress"/>

import 'cypress-file-upload';

describe('file upload test', ()=>{


    it.skip('file upload test1' , ()=>{


        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('sample.pdf')      //take file from fixture
        //cy.get('#file-upload').attachFile('C:/Users/Act/OneDrive/Desktop/CyPresssTrainingProgram/CypressLearning/Playwright_Course_Overview.pdf')
        cy.get('#file-submit').click()
        
        cy.wait(5000)
        
        cy.get('h3').should('have.text', 'File Uploaded!')
        //file uploaded name

    })

    
    it.skip('file upload test - rename' , ()=>{


        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'sample.pdf', fileName:'myFileUploaddemo.pdf'})      //take file from fixture
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get('h3').should('have.text', 'File Uploaded!')

    })

    it.skip('file upload test - dragdrop' , ()=>{


        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile("sample2.pdf", {subjectType:'drag-n-drop'})      //take file from fixture
        
        cy.wait(5000)
        //cy.get('h3').should('have.text', 'File Uploaded!')

    })

    it.skip('file upload test - multiple file' , ()=>{


        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(  ["sample.pdf", "sample2.pdf"]  )      //take file from fixture
        
        cy.wait(5000)
        cy.get('#main > div > p:nth-child(6) > strong').should('have.text', 'Files You Selected:')

    })


    it('file upload test - shadow dom example' , ()=>{


        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        
        cy.get('.smart-browse-input', {includeShadowDom: true}).attachFile("sample.pdf")      //take file from fixture
        
        cy.wait(5000)
       cy.get('.smart-item-name', {includeShadowDom: true}).contains('sample.pdf')

    })

})