let pageObject = {}

module.exports = {
    before: function(browser){
        pageObject = browser.page.pageObject()
        pageObject.navigate()
    },
    after: function(browser) {
        browser.end
    },
    'test saving blank field, navigate out doesnt save QA6D-10': function(browser){
        pageObject
            //attempt to save three blank fields
            browser.useXpath()
        pageObject
            .click('@cell1')
            browser.useCss()
            //browser.pause(5000)
            .expect.element('span[id="employeeID"]').text.to.equal('ID: 1')
        pageObject
            //clear name, phone and title fields
            .click('@nameEnt')
            .clearValue('@nameEnt')
            .setValue('@nameEnt','')
            .click('@phoneEnt')
            .clearValue('@phoneEnt')
            .setValue('@phoneEnt','')
            .click('@titleEnt')
            .clearValue('@titleEnt')
            .setValue('@titleEnt','')
            browser.pause(5000)
            //attempt to click save button
            .click('button[name="save"]')
            //navigate to another page
            browser.useXpath()
            .click('//li[2]')
            browser.pause(5000)
            //verify changes didnt save
            .click('//li[1]')
        pageObject
            browser.pause(5000)
            browser.useCss()
            .click('input[name="nameEntry"]')
            browser.useXpath()
            .verify.containsText('//li[1]','Bernice Ortiz')

    }
    






}