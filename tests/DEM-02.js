let pageObject = {}

module.exports = {
    before: function(browser){
        pageObject = browser.page.pageObject()
        pageObject.navigate()
    },
    after: function(browser) {
        browser.end()},

'DEM-02 Inital page load': function(browser){
    pageObject
        .verify.element('@titleBar')
        .expect.element('@titleText').text.to.equal('Employee Manager')

}
}
