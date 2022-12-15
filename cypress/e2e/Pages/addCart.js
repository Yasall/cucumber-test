class addCart {
    elements = {
       bagButton: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
       lightButton: () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),
       cartButton: () => cy.get('.shopping_cart_badge'),
       removeBagButton: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
       removeLightButton: () => cy.get('[data-test="remove-sauce-labs-bike-light"]')

    };

    clickBag() {
        this.elements.bagButton().click();
    }

    clickLight() {
        this.elements.lightButton().click();
    }

    getCart() {
       this.elements.cartButton().should('exist');
    }

    removeBag() {
        this.elements.removeBagButton().should('exist');
        this.elements.removeBagButton().click();
    }

    removeLight() {
        this.elements.removeLightButton().should('exist');
        this.elements.removeLightButton().click();
    }

    verifyEmptyCart() {
        this.elements.cartButton().should('not.exist');
    }

}

export const addcart = new addCart();