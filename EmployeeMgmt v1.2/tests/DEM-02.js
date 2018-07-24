let pageObject = {}

module.exports = {
    before: function(browser){
        pageObject = browser.page.pageObject()
        pageObject.navigate()
    },
    after: function(browser) {
        browser.end()},

'DEM-02 Inital page load': function(browser) {
    pageObject
        //The page title is "Employee Manager"
        .verify.visible('@titleBar')
        //There is a header bar with a header "Employee Manager"
        .expect.element('@titleText').text.to.equal('Employee Manager')
    pageObject
        //There is a footer bar with the current version number ("Version 1.2")
        .expect.element('@footer').text.to.equal('Version 1.2')
        
    pageObject     
      //There is a card in the center of the page with the message "No Employee Selected"
        .verify.visible('@infoCard')
        .expect.element('@noemployee').text.to.equal('No Employee Selected')
   
        browser.useXpath()
    pageObject    
        /* There is a list of default employees to the left (all clickable links)
*# Bernice Ortiz
*# Marnie Barnett
*# Phillip Weaver
*# Teresa Osborne
*# Dollie Berry
*# Harriet Williamson
*# Ruby Estrada
*# Lou White
*# Eve Sparks
*# Lois Brewer */
        .verify.visible('@listCon')
        .click('@cell1')
        .click('@cell2')
        .click('@cell3')
        .click('@cell4')
        .click('@cell5')
        .click('@cell6')
        .click('@cell7')
        .click('@cell8')
        .click('@cell9')
        .click('@cell0')
        .expect.element('@newEmp').text.to.equal('+ Add Employee')





}
}
