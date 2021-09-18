const Footer = require ("./Footer");
const Header = require ("./Header");
const {
    browser,
    element,
    ExpectedConditions,
    $
} = require("protractor");

class Page {
    constructor() {
        this.header = new Header();
        this.footer = new Footer();
    }

    async open (path) {
        await browser.get(path);
    }

    wait (waitInMilliseconds) {
        return browser.sleep(waitInMilliseconds);
    }

    getCurrentUrl() {
        return browser.getCurrentUrl();
    }

    getTitle() {
        return browser.getTitle();
    }

    waitForPageLoading() {
        return browser.waitForAngular();
    }
}

module.exports = Page;