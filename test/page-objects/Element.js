const { browser } = require("protractor");

class Element {

    constructor (selector) {
        this.element = element(by.css(selector));
    }

    click () {
        return this.element.click();
    }

    sendKeys () {
        return this.element.sendKeys();
    }

    waitForElement() {
        return browser.wait(ExpectedConditions.presenceOf(this.element), 30000);
    }

    getText () {
        return this.element.getText();
    }
}

module.exports = Element;