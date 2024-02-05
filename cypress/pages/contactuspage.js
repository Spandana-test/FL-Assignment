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
    
    

    
    
    }
    module.exports = new contactusPage();

   