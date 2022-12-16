class downloadPage {
    elements = {
        downloadPageLink: () => cy.get('#content > ul > li:nth-child(17) > a')   
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

} 

export const downloadfile = new downloadPage();