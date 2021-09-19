const { browser } = require("protractor");

class Element {

    constructor (selector) {
        this.element = element(by.css(selector));
    }

    click () {
        return this.element.click();
    }

    sendKeys (searchTerm) {
        return this.element.sendKeys(searchTerm);
    }

    waitForElement () {
        return browser.wait(ExpectedConditions.presenceOf(this.element), 30000);
    }

    elementIsDisplayed () {
        return this.element.isDisplayed();
    }

    getText () {
        return this.element.getText();
    }

    scrollTo() {
        this.element.getLocation().then((location) => {
            return browser.driver.executeScript('window.scrollTo(0,arguments[0]);', location.y);
        });
    };
}

module.exports = Element;