//let pageObject ={}

let editEmployee = (pageObject, name, phone, title ) =>{
    //employee1
    pageObject
    .click(cell)
    .clearValue('@nameEnt')
    .setValue('@nameEnt', name)
    .clearValue('@phoneEnt')
    .setValue('@phoneEnt', phone)
    .clearValue('@titleEnt')
    .setValue('@titleEnt', title )
    .click('@saveBut')
    .expect.element('@cell1').text.to.equal(name)
}
    //employee2
    /*pageObject
    .click('@cell2')
    .clearValue('@nameEnt')
    .setValue('@nameEnt', name)
    .clearValue('@phoneEnt')
    .setValue('@phoneEnt', phone)
    .clearValue('@titleEnt')
    .setValue('@titleEnt', title )
    .click('@saveBut')
    .expect.element('@cell1').text.to.equal(name)
}

module.exports ={
    editEmployee: editEmployee
    





}
let clickEmployee = (pageObject, employeeName)=>{
    pageObject.click(`(//li[@class="listText"])[text()="${employeeName}"]`)
}

*/
