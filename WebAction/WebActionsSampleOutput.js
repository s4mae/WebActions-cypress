// Example usage in Cypress test file:

// Click on an element
WebActions.click('[data-test="your-button"]');

// Get the text of an element
const text = WebActions.getElementText('[data-test="your-element"]');
cy.log(`Element text: ${text}`); // Output: Element text: Your Element Text

// Get the text of multiple elements
const texts = WebActions.getElementsText('[data-test="your-elements"]');
cy.log(`Element texts: ${texts}`); // Output: Element texts: [Text1, Text2, Text3, ...]

// Get the value of a specific attribute of an element
const attributeValue = WebActions.getElementAttribute('[data-test="your-element"]', 'data-attribute');
cy.log(`Element attribute value: ${attributeValue}`); // Output: Element attribute value: AttributeValue

// Get the values of a specific attribute for multiple elements
const attributeValues = WebActions.getElementsAttribute('[data-test="your-elements"]', 'data-attribute');
cy.log(`Element attribute values: ${attributeValues}`); // Output: Element attribute values: [Value1, Value2, Value3, ...]

// Get the value of a selected element
const selectedElementValue = WebActions.getSelectedElementValue('[data-test="your-radio-button"]');
cy.log(`Selected element value: ${selectedElementValue}`); // Output: Selected element value: SelectedValue

// Navigate to a URL
WebActions.goToUrl('https://example.com', '[data-test="your-element"]', '/path');

// Hover over an element
WebActions.hoverToElement('[data-test="your-element"]');

// Hover over an element and get text from sub-elements
const subElementTexts = WebActions.hoverAndGetTextElements('[data-test="your-main-elements"]', '[data-test="your-sub-element"]');
cy.log(`Sub-element texts: ${subElementTexts}`); // Output: Sub-element texts: [Text1, Text2, Text3, ...]

// Scroll to view an element
WebActions.scrollToViewElement('[data-test="your-element"]');

// Enter text in an input field
WebActions.sendKeys('[data-test="your-input"]', 'Your Text');

// Wait for an element to be present
WebActions.waitElement('[data-test="your-element"]');

// Wait for an element to be displayed
WebActions.waitElementIsDisplayed('[data-test="your-element"]');

// Wait for an element to be enabled
WebActions.waitElementIsEnabled('[data-test="your-element"]');

// Wait for an element to be selected
WebActions.waitElementIsSelected('[data-test="your-element"]');

// Wait for an element to be invisible
const invisibleElement = cy.get('[data-test="your-element"]');
WebActions.waitElementIsInvisible(invisibleElement);

// Click an element using JavaScript
WebActions.jsClick(cy.get('[data-test="your-element"]'));
