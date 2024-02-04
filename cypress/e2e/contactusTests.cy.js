import contactusPage from "../pages/contactuspage"

describe('template spec', () => {
  it("loads the contact page and has the correct title", () => {
    cy.visit("https://www.founderandlightning.com/contact");
    cy.title().should("eq", "Reach out to Founder and Lightning today");
  });

  it("checks for required fields in the contact form", () => {
    cy.visit("https://www.founderandlightning.com/contact");
    contactusPage.elements.firstName().should("be.required");
    contactusPage.elements.lastName().should("be.required");
    contactusPage.elements.email().should("be.required");
    contactusPage.elements.mobileNumber().should("be.required");
    contactusPage.elements.message().should("be.required");
  });

  it("submits the contact form with valid data", () => {
    cy.visit("https://www.founderandlightning.com/contact");
   contactusPage.submitEnquiry()
  })

  it("prevents form submission with invalid data (missing email)", () => {
    cy.visit("https://www.founderandlightning.com/contact");
    contactusPage.elements.firstName().type("John");
    contactusPage.elements.message().type("This is a test message.");
    contactusPage.elements.submitButton().click();
    contactusPage.elements.InvalidInputerror().should('eq', "Please complete all required fields.")
  })
})