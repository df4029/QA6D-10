let pageObject = {}

module.exports = {
    before: function(browser){
        pageObject = browser.page.pageObject()
        pageObject.navigate()
    },
    after: function(browser) {
        browser.end()},
    'DEM-3 Select an Employee' : function(browser){
        browser.useXpath()
    pageObject    
        //Select an employee on the left hand side of the page
        .click('@cell1')
        browser.useCss()
    pageObject
       //The center card of the application is populated with the selected employee's information:
        .verify.visible('@infoCard')
        // Name in the card's title bar
        .expect.element('@empName').text.to.equal('Bernice Ortiz')
        console.log('verify')
    pageObject
        //ID number
        .verify.visible('@employeeID')
        .expect.element('@employeeID').text.to.equal('ID: 1')
    pageObject    
    //input fields for name, phone, and title
        .verify.visible('@nameEnt')
        .verify.visible('@phoneEnt')
        .verify.visible('@employeeTit')
    browser.useXpath()
    pageObject
        //There is also a disabled cancel and save button
        .verify.visible('@disCan')
        .verify.visible('@disSub')


        

    }






    }