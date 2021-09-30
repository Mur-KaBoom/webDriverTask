const { browser } = require("protractor");

class Element {

    constructor (selector, id) {
        if(id) {
            this.element = element(by.id(selector));
        } else {
            this.element = element(by.css(selector));
        }
    }

    async click () {
        this.scrollTo();
        await this.element.click();
        await this.highlightWithJS(this.element);
    }

    highlightWithJS(elementToHighlight) {
        let background;
        return elementToHighlight.getCssValue("backgroundColor").then(function (color) {
            background = color;
        }).then(function () {
            return browser.executeScript("arguments[0].style.backgroundColor = '" + "red" + "'", elementToHighlight)
        }).then(function () {
            return browser.executeScript("arguments[0].style.backgroundColor = '" + background + "'", elementToHighlight);
        })
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
        return this.element.getLocation().then((location) => {
            return browser.driver.executeScript('window.scrollTo(0,arguments[0]);', location.y);
        });
    }
}

module.exports = Element;