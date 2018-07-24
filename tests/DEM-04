let pageObject = {}

module.exports = {
    before: function(browser){
        pageObject = browser.page.pageObject()
        pageObject.navigate()
    },
    after: function(browser) {
        browser.end()},
'DEM-04 Cancelling Changes': function(browser) {
        browser.useXpath()
    pageObject
        .click('@cell1')
        browser.useCss()
    pageObject
        .click('@nameEnt')
        .expect.element('@nameEnt').value.to.equal('Bernice Ortiz')
    pageObject
        .clearValue('@nameEnt')
        .setValue('@nameEnt','\uE003')
        browser.pause(5000)

}





}