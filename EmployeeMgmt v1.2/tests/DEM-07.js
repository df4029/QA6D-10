/*The app is loaded and an employee is selected.
(See   DEM-3 IDEA  if directions are needed)

Test Script:
Change one or more fields so that it/they does/do not match the requirements (as laid out in   DEM-1 DONE  ).
The save/cancel buttons are enabled.
Click "Save".
Test Postconditions:
The field(s) in error is/are underlined in red and each field in error has a contextualized error message displayed.
*/
let pageObject = {}

module.exports = {
    before: function (browser) {
        pageObject = browser.page.pageObject()
        pageObject.navigate()
    },
    after: function (browser) {
        browser.end
    },
    'DEM-07 Generating Errors': function (browser) {
        pageObject
        browser.useXpath()
        pageObject   
            .click('@cell1')
        //browser.useCss()
        pageObject
            .click('@namField')
            .clearValue('@namField')
            .setValue('@namField', '')
            .click('@namField')
            .click('@phonField')
            .clearValue('@phonField')
            .setValue('@phonField', '')
            .click('@phonField')
            .click('@titlField')
            .clearValue('@titlField')
            .setValue('@titlField', '')
            .click('@titlField')
            .click('@savButx')
            browser.pause(5000)

    }
}