class downloadPage {
    elements = {
        downloadPageLink: () => cy.get('#content > ul > li:nth-child(17) > a')   
    };

    navigate() {
        this.elements.downloadPageLink().click();
    }

    fileDownload(file) {
        // var url = cy.get(URL) + "/";
        // console.log(url);
        // cy.request(url + "/" + file).then((response) => {
        //     cy.writeFile('/downloads/{file}', response.body)
        // })
        cy.downloadFile("https://the-internet.herokuapp.com/download", 'Downloads', file);
        
    }

    verifyLocation(file) {
        cy.readFile('Downloads/' + file);
    }

} 

export const downloadfile = new downloadPage();