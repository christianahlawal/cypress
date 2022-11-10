describe('my sample project3', ()=>{
  it('should launch url', function(){
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
  })
  it('should add to cart', ()=> {
    cy.get('#SidebarContent >a').eq(1).click()
    cy.get('tr td >a').eq(0).click()
    cy.get('tr td>a').eq(0).click()
    cy.get('.Button').click()
    cy.get('#BackLink').click()
    cy.get('#SidebarContent >a').eq(0).click()
    cy.get('tr td >a').eq(0).click()
    cy.get('tr td>a').eq(0).click()
    cy.get('.Button').click()
    cy.get('#BackLink').click()
  })
})