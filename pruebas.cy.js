describe("Pruebas Automaticas Cypress", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/");
  });
  /*
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
      cy.get('.oxd-brand-banner > img').should("be.visible")
  
    })
  
    it("Navegacion de barra lateral", () => {
  
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
      cy.get('.oxd-button').click()
      cy.get(':nth-child(1) > .oxd-main-menu-item').should("be.visible")
      cy.get(':nth-child(2) > .oxd-main-menu-item').should("be.visible")
      cy.get(':nth-child(3) > .oxd-main-menu-item').should("be.visible")
      cy.get(':nth-child(4) > .oxd-main-menu-item').should("be.visible")
      cy.get(':nth-child(5) > .oxd-main-menu-item').should("be.visible")
      cy.get(':nth-child(6) > .oxd-main-menu-item').should("be.visible")
      cy.get(':nth-child(7) > .oxd-main-menu-item').should("be.visible")
      cy.get(':nth-child(8) > .oxd-main-menu-item').should("be.visible")
      cy.get(':nth-child(9) > .oxd-main-menu-item').should("be.visible")
      cy.get(':nth-child(10) > .oxd-main-menu-item').should("be.visible")
      cy.get(':nth-child(11) > .oxd-main-menu-item').should("be.visible")
  
    }) 
    it("Eliminar un Usuario", () => {
  
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
      cy.get('.oxd-button').click()
      cy.get(':nth-child(1) > .oxd-main-menu-item').click()
      cy.get('.oxd-layout-context').scrollTo("bottom", { ensureScrollable: false })
      cy.get(':nth-child(3) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click()
      cy.get('.orangehrm-text-center-align > .oxd-text').should("be.visible")
      cy.get('.orangehrm-text-center-align > .oxd-text').contains('The selected record will be permanently deleted. Are you sure you want to continue?')
      cy.get('.oxd-button--label-danger').click()
  
    })*/

  it("Elegir un desplegable de la lista", () => {
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).click();
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).click();
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();

    cy.get(":nth-child(5) > .oxd-main-menu-item").click();
    cy.get(':nth-child(3) > .oxd-grid-4 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').select("Online"); //Da igual el valor que coloque, no selecciona
    cy.get(
      ":nth-child(3) > .oxd-grid-4 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input"
    ).should("Online");
  });
});
