class WebActions {
  constructor() {
    this.timeSpan = 30000; // milliseconds
  }

  click(locator, hidden = false) {
    cy.get(locator).should('exist').then(($element) => {
      if (!hidden && $element.is(':visible') && $element.is(':enabled')) {
        cy.wrap($element).scrollIntoView().click();
      } else {
        cy.wrap($element).invoke('click');
      }
    });
  }

  getElementText(locator) {
    return cy.get(locator).should('exist').invoke('text');
  }

  getElementsText(locator) {
    return cy.get(locator).should('exist').invoke('text').then(texts => texts.split('\n'));
  }

  getElementAttribute(locator, attr) {
    return cy.get(locator).should('exist').invoke('attr', attr);
  }

  getElementsAttribute(locator, attr) {
    return cy.get(locator).should('exist').invoke('attr', attr).then(attrs => attrs.split('\n'));
  }

  getSelectedElementValue(locator) {
    return cy.get(locator).should('exist').should('be.checked').invoke('val');
  }

  goToUrl(parentUrl, locator, endpoint = '') {
    cy.visit(parentUrl + endpoint).get(locator).should('exist');
  }

  hoverToElement(locator) {
    cy.get(locator).should('exist').trigger('mouseover');
  }

  hoverAndGetTextElements(mainLocator, subLocator) {
    return cy.get(mainLocator).should('exist').find(subLocator).invoke('text').then(texts => texts.split('\n'));
  }

  scrollToViewElement(locator) {
    cy.get(locator).should('exist').scrollIntoView();
  }

  sendKeys(locator, textValue) {
    cy.get(locator).should('exist').clear().type(textValue);
  }

  waitElement(locator) {
    return cy.get(locator).should('exist');
  }

  waitElementIsDisplayed(locator) {
    cy.get(locator).should('exist').should('be.visible');
  }

  waitElementIsEnabled(locator) {
    cy.get(locator).should('exist').should('be.enabled');
  }

  waitElementIsSelected(locator) {
    cy.get(locator).should('exist').should('be.checked');
  }

  waitElementIsInvisible(elem) {
    cy.wrap(elem).should('not.be.visible');
  }

  jsClick(element) {
    cy.wrap(element).should('exist').invoke('click');
  }
}

export default new WebActions();
