class downloadPage {
    elements = {
        downloadPageLink: () => cy.get('#content > ul > li:nth-child(17) > a')   ,
        secureDownloadPageLink: () => cy.get('#content > ul > li:nth-child(37) > a'),
        username: () => cy.get('#username'),
        password: () => cy.get('#password'),
        submitButton: () => cy.get('#submit-button')
    };

    navigate() {
        this.elements.downloadPageLink().click();
    }

    fileDownload(file) {
        cy.downloadFile("https://the-internet.herokuapp.com/download", 'Downloads', file);     
    }

    verifyLocation(file) {
        cy.readFile('Downloads/' + file);
    }

    secureDownload(file) {
        cy.downloadFile("https://admin:admin@the-internet.herokuapp.com/download_secure", 'Downloads', file); 
    }

} 

export const downloadfile = new downloadPage();