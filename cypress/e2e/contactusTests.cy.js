import contactusPage from "../pages/contactuspage"
describe('contactUs Page Tests', () => {

  beforeEach('Launch the page and clear cookies',() => {
    cy.visit('/')
    cy.getCookies()
    cy.clearAllCookies()
    cy.get('#hs-eu-decline-button').click()

  })
  it("loads the contact page and has the correct title", () => {
    cy.title().should("eq", "Reach out to Founder and Lightning today");
  });

  it("checks for required fields in the contact form and submit", () => {
    
   contactusPage.getfirstName().invoke('prop', 'validationMessage')
    .should('equal', 'Please fill out this field.')
    contactusPage.getfirstName().type('Spandana')
    contactusPage.getLastName().invoke('prop', 'validationMessage')
    .should('equal', 'Please fill out this field.')
    contactusPage.getLastName().type("mantri")
    contactusPage.getemail().invoke('prop', 'validationMessage')
    .should('equal', 'Please fill out this field.')
    contactusPage.getemail().type("testxyz@gmail.com")
    contactusPage.getmobileNumber().invoke('prop', 'validationMessage')
    .should('equal', 'Please fill out this field.')
    contactusPage.getmobileNumber().type("9000000000")
    contactusPage.gethearAboutUsDropdown().select("LinkedIn")
    contactusPage.getmessage().invoke('prop', 'validationMessage')
    .should('equal', 'Please fill out this field.')
    contactusPage.getmessage().type("Test Message")
    contactusPage.getsendMessageButton().click()
  });

  it("prevents form submission with invalid data (incorrect format) and insifficient data", () => {
   
    contactusPage.getfirstName().type("John");
    contactusPage.getemail().type("testxyz.com")
    contactusPage.getinvalidInputError("Email must be formatted correctly.").should('have.text','Email must be formatted correctly.')
    contactusPage.getmobileNumber().type("91")
   contactusPage.getinvalidInputError("The number you entered is not in range.").should('have.text','The number you entered is not in range.')
   contactusPage.getmobileNumber().type("aabb")
   contactusPage.getinvalidInputError("A valid phone number may only contain numbers, +()-. or x").should('have.text','A valid phone number may only contain numbers, +()-. or x') 
   contactusPage.getsendMessageButton().click();
    contactusPage.getinvalidInputError("Please complete all required fields.").contains("Please complete all required fields.")
  })
})