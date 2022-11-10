describe('sample4', ()=> {
    it('should launch url',()=> {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    it('should login user',()=>{
        cy.get("input[placeholder='Username']").eq(0).type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()

    })
})