describe('CSS Locators',()=>{
    //test-1
    it('csslocators',()=>{
        //launch web page
        cy.visit('https://www.flipkart.com/')

        cy.get("input[placeholder='Search for Products, Brands and More']").type('T-Shirt')

        cy.get("button[title='Search for Products, Brands and More']").click()

        cy.get("._10Ermr").contains("T-Shirt")
    })
})