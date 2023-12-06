/// <reference types = "cypress" />

describe("Testing Assignments", () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click()
      })
    it("Checking Checkboxes", () => {
        cy.get('#checkboxes > :nth-child(1) > input').as("Option 1")
        cy.get("@Option 1").check().should("be.checked")

        cy.get(':nth-child(3) > input').as("Option 2")
        cy.get("@Option 2").check().should("be.checked")
    });

    it("UnCheck Checkbox and Validate", () => {
        cy.get("input[type='checkbox']").uncheck('option-3').should("not.be.checked")
    });


    it("Check All Checkboxes", () => {
        cy.get("input[type='checkbox']").check(['option-3', 'option-1', 'option-2', 'option-4']).should("be.checked")
    });
});
