/*The app is loaded and an employee is selected.
(See   DEM-3 IDEA  if directions are needed)

Test Script:
Make changes to one or more fields.
The save/cancel buttons are enabled.
Select a different employee from the list to the left.
Their record is now displayed.
The save/cancel buttons are disabled.
Select the original employee's record to the left.
Test Postconditions:
The employee record should have returned to its initial state.*/

let pageObject = {}

module.exports = {
    before: function (browser) {
        pageObject = browser.page.pageObject()
        pageObject.navigate()
    },
    after: function (browser) {
        browser.end()
    },
    'DEM-06 Saving Changes': function (browser) {
        pageObject
        browser.useXpath()
        pageObject   
            .click('@cell1')
        browser.useCss()
        pageObject
            .click('@nameEnt')
            
            .clearValue('@nameEnt')
            .setValue('@nameEnt', 'Seymour Butts')
            .click('@phoneEnt')
            .clearValue('@phoneEnt')
            .setValue('@phoneEnt', '5558675309')
            .click('@titleEnt')
            .clearValue('@titleEnt')
            .setValue('@titleEnt', 'Hisenberg')
        
        browser.pause(5000)
        browser.useXpath()
        pageObject
            .click('@cell2')
        browser.useCss()
        pageObject
            .expect.element('@empName').text.to.equal('Marnie Barnett')
        //There is also a disabled cancel and save button
        pageObject
            .verify.visible('@disCan')
            .verify.visible('@disSub')
        browser.useXpath()
        pageObject
            .click('@cell1')
        browser.useCss()
        pageObject
            .expect.element('@nameEnt').value.to.equal('Bernice Ortiz')
        pageObject    
            .expect.element('@phoneEnt').value.to.equal('4824931093')
        pageObject    
            .expect.element('@titleEnt').value.to.equal('CEO')
        
    }
}