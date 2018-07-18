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
        //xpath selectors
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
        

    
    }


}