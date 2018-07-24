//const functions = require('../supporting/functions')
let editEmployee = (pageObject, name, phone, title ) =>{
    //employee1
    pageObject
    .click('@cell1')
    .clearValue('@nameEnt')
    .setValue('@nameEnt', name)
    .clearValue('@phoneEnt')
    .setValue('@phoneEnt', phone)
    .clearValue('@titleEnt')
    .setValue('@titleEnt', title )
    .click('@saveBut')
    .expect.element('@cell1').text.to.equal(name)}

let editEmployee2 = (pageObject, name, phone, title ) =>{
        //employee1
        pageObject
        .click('@cell2')
        .clearValue('@nameEnt')
        .setValue('@nameEnt', name)
        .clearValue('@phoneEnt')
        .setValue('@phoneEnt', phone)
        .clearValue('@titleEnt')
        .setValue('@titleEnt', title )
        .click('@saveBut')
        .expect.element('@cell2').text.to.equal(name)}

let editEmployee3 = (pageObject, name, phone, title ) =>{
            //employee1
            pageObject
            .click('@cell3')
            .clearValue('@nameEnt')
            .setValue('@nameEnt', name)
            .clearValue('@phoneEnt')
            .setValue('@phoneEnt', phone)
            .clearValue('@titleEnt')
            .setValue('@titleEnt', title )
            .click('@saveBut')
            .expect.element('@cell3').text.to.equal(name)}

let pageObject = {}



module.exports = {
    before: function(browser){
        pageObject = browser.page.pageObject()
        pageObject.navigate()
    },
    after: function(browser) {
        browser.end()},
    
    'edit employee with good data': browser =>{
        editEmployee(pageObject, 'Capt Picard', '6315379888','Starship Capitain')
        browser.pause(10000)},

    'edit employee with bad data': browser =>{
        //enter name with 31 characters, 10 char phone, 30 char title
        editEmployee2(pageObject, 'Thissentenceisexactly30charact', '16319746080','Thissentenceisexactly30charact')
        browser.pause(10000)},
    
    'edit employee with no data': browser =>{
        //enter name with 0 characters, 1 alpha phone, 0 char title
         editEmployee3(pageObject, ' ', ' ',' ')
        browser.pause(10000)},
    
}