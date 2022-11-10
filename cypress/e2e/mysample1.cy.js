

describe('my sample project1', () => {
  it('should launch url', () => {
    cy.visit('https://react-shopping-cart-67954.firebaseapp.com/')
  })
  it("should select size", ()=>{
    cy.get('.checkmark').eq(0).click()
  })
  it("should add to cart", function(){
    cy.get('.sc-124al1g-0.jCsgpZ').eq(3).click()
    cy.get('.sc-11uohgb-6.cgtUCJ').eq(5).click()
    cy.get('.sc-1h98xa9-0.gFkyvN').click()
  })
  it('should add item', ()=> {
    cy.get('.sc-124al1g-0.jCsgpZ').eq(1).click()
  })
})