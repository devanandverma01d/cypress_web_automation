describe('Assertions',()=>{
    //test-1
    it('Implicit Assertion',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //should & and--->Assertions on url
        // cy.url().should('include',"orangehrmlive.com")
        // cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.url().should('contain','opensource-demo')


        // cy.url().should('include',"orangehrmlive.com")
        // .should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // .should('contain','opensource-demo')
        // .should('not.contain','closesource-demo')


        cy.url().should('include',"orangehrmlive.com")
        .and('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .and('contain','opensource-demo')
        .and('not.contain','closesource-demo')

        //Assertions on 
        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')
    })
})     