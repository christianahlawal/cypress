describe('my sample1 copy', ()=>{
  it('should launch url', ()=>{
    cy.visit('https://www.telerik.com/support/demos')
  })
  it('should select product', () =>{
    cy.get('.TK-Products-Menu-Item-Button').click()
    cy.get('.TK-Dash-Link').eq(16).click()
    cy.get('.Btn.Btn--prim.u-db.u-fs24').eq(0).click()
  })
  it('should display menu and select shopping cart', ()=>{
    cy.get('#js-tlrk-nav-drawer-button').click()
    cy.get('.TK-Aside-Menu-Link-Text').eq(1).click()
  })

})