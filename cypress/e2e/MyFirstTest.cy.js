describe('My First Test',()=>{
    //test-1
    it('test1',()=>{
        //launch web page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //asertion-1
        cy.title().should('eq','OrangeHRM')
    })
    //test-2
    // it('test2',()=>{
    //     //launch web page
    //     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //     //asertion-1
    //     cy.title().should('eq','OrangeHRMmmm')
    // })
})