describe('Pruebas Automaticas Cypress', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/')
 })

it("Elemento basicos pagina inicio e ingreso", () => {
  //cy.visit("https://opensource-demo.orangehrmlive.com/web/")

  cy.get('.orangehrm-login-branding').should("be.visible")
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible")
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible")
  cy.get('.oxd-button').should("be.visible")
  cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').should("be.visible")
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
  cy.get('.oxd-button').click()
})

 })
