describe("XPATH Locators",()=>{
    //test-1
    it.only('xpath',()=>{
        //launch web page
        cy.visit('https://practice.automationtesting.in/')
        //click on menu icon
        cy.xpath("(//ul[@id='main-nav'])[1]").click({force:true})
        //click on shop-menu
        cy.xpath("(//a[normalize-space()='Shop'])[1]").click({force:true})
        //assert number of product
        cy.xpath("(//ul[@id='main-nav'])[1]/li").should('have.length', 6)

    })
    //test-2
    it('Chained-xpath',()=>{
        //launch web page
        cy.visit('https://practice.automationtesting.in/')
        //click on menu icon
        cy.xpath("(//ul[@id='main-nav'])[1]").click({force:true})
        //click on shop-menu
        cy.xpath("(//a[normalize-space()='Shop'])[1]").click({force:true})
        //assert number of product
        cy.xpath("(//ul[@id='main-nav'])[1]").xpath("./li").should('have.length', 6)

    })
})