/*The app is loaded and an employee is selected.
(See   DEM-3 IDEA  if directions are needed)

Test Script:
Change one or more fields in a way that meets the requirements (as laid out in   DEM-1 DONE  ).
The save/cancel buttons are enabled.
Click "Save".
No errors should be presented and the save and cancel buttons are disabled.
If the employee's name was edited, their name in the employee list to the left has been updated.
Click another employee's name on the left.
The edit fields are populated with that employee's record.
Click back to the modified employee's record.
Test Postconditions:
The changes made to the employee's record are still present after navigating to another employee's record and back.
*/

let pageObject = {}

module.exports = {
    before: function(browser){
        pageObject = browser.page.pageObject()
        pageObject.navigate()
    },
    after: function(browser) {
        browser.end()},
'DEM-05 Saving Changes' : function(browser) {
    browser.useXpath()
    pageObject
        .click('@cell1')
        browser.useCss()
    pageObject
        .click('@nameEnt')
       // .expect.element('@nameEnt').value.to.equal('Bernice Ortiz')
   //pageObject
        .clearValue('@nameEnt')
        .setValue('@nameEnt','Seymour Butts')
        .click('@phoneEnt')
        .clearValue('@phoneEnt')
        .setValue('@phoneEnt','5558675309')
        .click('@titleEnt')
        .clearValue('@titleEnt')
        .setValue('@titleEnt','Hisenberg')
        .click('@saveBut')
    browser.pause(5000)
    browser.useXpath()
    pageObject
        .click('@cell2')
        .click('@cell1')
    browser.useCss()
    pageObject
        .expect.element('@nameEnt').value.to.equal('Seymour Butts')
    pageObject
        .expect.element('@phoneEnt').value.to.equal('5558675309')
    pageObject
        .expect.element('@titleEnt').value.to.equal('Hisenberg')
}





}