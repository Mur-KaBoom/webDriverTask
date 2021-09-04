import { $ } from "protractor";
const {
    browser,
    element,
    ExpectedConditions
} = require("protractor");
const {
    By
} = require("selenium-webdriver");

export default class Page {
    constructor() {
    }

    async open (path) {
        await browser.get(path);
    }

    get logo() {
        return $('.nav__logo .component-logo');
    }

    changeLanguage(language) {
        const languageDropdown = element(By.css('.desktop-nav .language-toggle'));
        browser.wait(ExpectedConditions.presenceOf(languageDropdown), 30000);
        languageDropdown.click();
        if(language == 'English') {
            const englishLanguage = element(By.css('.desktop-nav .mcd-language-toggle .language-items :first-child .language'));
            englishLanguage.click();
        }
        if(language == 'Spanish') {
            const englishLanguage = element(By.css('.desktop-nav .mcd-language-toggle .language-items :last-child .language'));
            englishLanguage.click();
        }        
    }

}   