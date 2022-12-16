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
        //cy.downloadFile(cy.get(URL), 'Downloads', file);
        cy.downloadFile(cy.get(URL)+ '/' + file).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.a('string')
        })
    }

    verifyLocation(file) {
        cy.exists('Downloads/{file}').then((exists) => {
            expect(exists).to.be.true
        })
    }

} 

export const downloadfile = new downloadPage();