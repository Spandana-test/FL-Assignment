class contactusPage{


    elements ={
    
    
    firstName : () =>  cy.get("input[name='firstname']"),

    lastName : () => cy.get('input[name="lastname"]'),
    
    
    email : () => cy.get("input[name='email']"),
    
    mobileNumber : () => cy.get("input[name='mobilephone']"),
    
    message : () => cy.get("textarea[name='message']"),

    
    
   sendMessageButton : () => cy.get("input[type='submit']"),

   selectDropsdown : () =>cy.xpath("//div[@class='input']//select[1]"),

    
   InvalidInputerror : (text) => cy.xpath(`//label[text()="${text}"]`),

      
    }
    
    
//    submitEnquiry(){
    
    
//    this.elements.firstName().type("Spandana");
    
    
//    this.elements.lastName().type("Mantripragada")
    
    
//    this.elements.email().type("testemail@gmail.com")
    
    
//    this.elements.mobileNumber().type("9000890987")
    
    
//    this.elements.selectDropsdown().select("LinkedIn")

//    this.elements.message().type("Test message");

//    this.elements.submitButton().click();

    
    
//    }
    
    
    }
    module.exports = new contactusPage();

   