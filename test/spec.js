const {
    expect
} = require("chai");
const {
    browser,
    element,
    ExpectedConditions
} = require("protractor");
const {
    By
} = require("selenium-webdriver");
const MainPage = require("./page-objects/MainPage");
const SearchPage = require("./page-objects/SearchPage");

const mainPage = new MainPage();
const searchPage = new SearchPage();


//using webdriver and protractor, css and xpath selectors (mostly css, cause I like them more, and also devs can easily change classes, which is a great virtue)

describe('McDonalds: ', function () {

    beforeEach(function (done) {
        mainPage.open();
        this.timeout(25000);
        done();
    })

    it('should have a title', async function () {
        expect(await browser.getTitle()).to.be.equal("McDonald's: Burgers, Fries & More. Quality Ingredients.");
    });

    // it('should display search results for valid search query', function (done) {
    //     const searchFromMainPage = browser.findElement(By.css('.right__rail .link[href="/us/en-us/search-results.html"]'));
    //     searchFromMainPage.click();
    //     const searchField = browser.findElement(By.xpath('//input[@id="search"]'));
    //     searchField.sendKeys('Nuggets');
    //     const searchIcon = browser.findElement(By.css('.button[aria-label = search]'));
    //     searchIcon.click();
    //     const resultsTitle = element(By.css('.mcd-filter__result-heading'));
    //     browser.wait(ExpectedConditions.presenceOf(resultsTitle), 30000);
    //     const countOfResults = element.all(By.css('.mcd-card--result__without-image')).count();
    //     countOfResults.then((size) => {
    //         expect(size).to.be.greaterThan(0);
    //     });
    //     this.timeout(25000);
    //     done();
    // });

    it('should display search results for valid search query', function (done) {
        mainPage.header.searchIcon.click();
        mainPage.waitForPageLoading();
        searchPage.searchField.sendKeys('Nuggets');
        searchPage.runSearchButton.click();
        // searchPage.runSearch('Nuggets');
        mainPage.waitForPageLoading();
        searchPage.searchResults.waitForElement();
        const countResult = searchPage.searchResults.getCount()
        countResult.then((size) => {
            expect(size).to.be.greaterThan(0);
        });
        this.timeout(25000);
        done();
    });

    it('should change language', async function (done) {
        mainPage.open();
        mainPage.header.additionalLinks.clickTextInCollection('Language');
        mainPage.header.languageItems.waitForElement();
        mainPage.header.languageItems.clickTextInCollection('Español');
        mainPage.waitForPageLoading();
        this.timeout(10000);
        expect(await mainPage.getTitle()).to.be.equal('McDonald’s: Hamburguesas, Papitas y Más. Ingredientes de Calidad ');
        done();
    });

});