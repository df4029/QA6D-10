module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html',
    elements: {
        //pageobjects elements
        "employeeID" :'span[name="employeeID"]',
        "employeeTit" :'p[id="employeeTitle"]',
        "saveBut" :'button[name="save"]',
        "cancelBut" :'button[name="cancel"]',
        "nameEnt" :'input[name="nameEntry"]',
        "phoneEnt" :'input[name="phoneEntry"]',
        "titleEnt" :'input[name="titleEntry"]',
        "errorCar" :'div[class="errorCard"]',
        "titleText" :'span[class="titleText"]',
        "footer" :'footer[class="footer"]',
        "titleBar" :'div[class="titleBar"]',
        "noemployee" :'p[id="noEmployee"]',
        "infoCard" :'div[class="infoCard"]',
        "empName" :'p[name="employeeName"]',
        //xpath selectors
        "listCon" :{ selector: '//ul[1]', locateStrategy: 'xpath' },
        "cell1" :{ selector: '//li[1]', locateStrategy: 'xpath' },
        "cell2" :{ selector: '//li[2]', locateStrategy: 'xpath' },
        "cell3" :{ selector: '//li[3]', locateStrategy: 'xpath' },
        "cell4" :{ selector: '//li[4]', locateStrategy: 'xpath' },
        "cell5" :{ selector: '//li[5]', locateStrategy: 'xpath' },
        "cell6" :{ selector: '//li[6]', locateStrategy: 'xpath' },
        "cell7" :{ selector: '//li[7]', locateStrategy: 'xpath' },
        "cell8" :{ selector: '//li[8]', locateStrategy: 'xpath' },
        "cell9" :{ selector: '//li[9]', locateStrategy: 'xpath' },
        "cell0" :{ selector: '//li[10]', locateStrategy: 'xpath' },
        "disCan" :{ selector: '//button[2]', locateStrategy: 'xpath' },
        "newEmp" :{ selector: '//li[11]', locateStrategy: 'xpath' },
        "namField" :{ selector: '//input[1]', locateStrategy: 'xpath' },
        "phonField" :{ selector: '//input[2]', locateStrategy: 'xpath' },
        "titlField" :{ selector: '//input[3]', locateStrategy: 'xpath' },
        "savButx" :{ selector: '//button[1]', locateStrategy: 'xpath' },
    
    
    
    
    }


}