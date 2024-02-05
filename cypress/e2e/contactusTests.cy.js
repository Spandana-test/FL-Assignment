import contactusPage from "../pages/contactuspage"

describe('contactUs Page Tests', () => {

  beforeEach('Launch the page and clear cookies',() => {
    cy.visit("https://www.founderandlightning.com/contact");
    cy.getCookies()
    cy.clearAllCookies()
    cy.get('#hs-eu-decline-button').click()

  })
  it("loads the contact page and has the correct title", () => {
    cy.title().should("eq", "Reach out to Founder and Lightning today");
  });

  it("checks for required fields in the contact form and submit", () => {
    
    contactusPage.elements.firstName().invoke('prop', 'validationMessage')
    .should('equal', 'Please fill out this field.')
    contactusPage.elements.firstName().type('Spandana')
    contactusPage.elements.lastName().invoke('prop', 'validationMessage')
    .should('equal', 'Please fill out this field.')
    contactusPage.elements.lastName().type("mantri")
    contactusPage.elements.email().invoke('prop', 'validationMessage')
    .should('equal', 'Please fill out this field.')
    contactusPage.elements.email().type("testxyz@gmail.com")
    contactusPage.elements.mobileNumber().invoke('prop', 'validationMessage')
    .should('equal', 'Please fill out this field.')
    contactusPage.elements.mobileNumber().type("9000000000")
    contactusPage.elements.message().invoke('prop', 'validationMessage')
    .should('equal', 'Please fill out this field.')
    contactusPage.elements.message().type("Test Message")
    contactusPage.elements.sendMessageButton().click()
  });

  it("prevents form submission with invalid data (incorrect format) and insifficient data", () => {
   
    contactusPage.elements.firstName().type("John");
    contactusPage.elements.email().type("testxyz.com")
    contactusPage.elements.InvalidInputerror("Email must be formatted correctly.").should('have.text','Email must be formatted correctly.')
    contactusPage.elements.mobileNumber().type("91")
   contactusPage.elements.InvalidInputerror("The number you entered is not in range.").should('have.text','The number you entered is not in range.')
   contactusPage.elements.mobileNumber().type("aabb")
   contactusPage.elements.InvalidInputerror("A valid phone number may only contain numbers, +()-. or x").should('have.text','A valid phone number may only contain numbers, +()-. or x') 
   contactusPage.elements.sendMessageButton().click();
    contactusPage.elements.InvalidInputerror("Please complete all required fields.").contains("Please complete all required fields.")
  })
})