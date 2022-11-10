describe('my sample project2', ()=> {
  it('should launch the url', () =>{
    cy.visit('http://the-internet.herokuapp.com/login')
  })
  it('should input username and password', ()=>{
    cy.get('#username').type("tomsmith")
    cy.get('#password').type('SuperSecretPassword!')
  })
  it('should login', ()=>{
    cy.get('.radius').click()
  })
  //it('should test', ()=> {
   // cy.get
  //})
  it('should logout', ()=>{
    cy.get('.button.secondary.radius').click()
  })
  
  
})