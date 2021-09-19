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

    // closeLeaveFeedbackPopup () {

    // }

    waitForPageToChangeLanguageTo(language) {
        if(language === 'Eng' || language === 'English') {
            browser.wait(ExpectedConditions.presenceOf(this.header.englishLanguageButton), 30000);
        } else if (language === 'Esp' || language === 'Spanish') {
            browser.wait(ExpectedConditions.presenceOf(this.header.spanishLanguageButton), 30000);
        } else {
            throw new Error (`Current page doesn't support ${language} language`);
        }
    }

    waitForPageLoading() {
        return browser.waitForAngular();
    }    

    getTextOutOfBrackets(stringWithBrackets) {
        const regEx = /\(([^)]+)\)/;
        const stringWithoutBrackets = regEx.exec(stringWithBrackets);
        return stringWithoutBrackets[1];
    }
    
}

module.exports = Page;