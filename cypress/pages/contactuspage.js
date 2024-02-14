class contactusPage {
  getfirstName() {
    return cy.get("input[name='firstname']");
  }
  getLastName() {
    return cy.get('input[name="lastname"]');
  }

  getemail() {
    return cy.get("input[name='email']");
  }

  getmobileNumber() {
    return cy.get("input[name='mobilephone']");
  }

  getmessage() {
    return cy.get("textarea[name='message']");
  }

  getsendMessageButton() {
    return cy.get("input[type='submit']");
  }

  gethearAboutUsDropdown() {
    return cy.xpath("//div[@class='input']//select[1]");
  }

  getinvalidInputError(text) {
    return cy.xpath(`//label[text()="${text}"]`);
  }
}

module.exports = new contactusPage();
