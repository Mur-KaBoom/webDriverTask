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


//using webdriver and protractor, css and xpath selectors (mostly css, cause I like them more, and also devs can easily change classes, which is a great virtue)

describe('McDonalds: ', function () {

    beforeEach(function (done) {
        browser.get('https://www.mcdonalds.com/us/en-us.html');
        this.timeout(25000);
        done();
    })

    it('should have a title', async function () {
        expect(await browser.getTitle()).to.be.equal("McDonald's: Burgers, Fries & More. Quality Ingredients.");
    });

    it('should display search results for valid search query', async function (done) {
        const searchFromMainPage = browser.findElement(By.css('.right__rail .link[href="/us/en-us/search-results.html"]'));
        searchFromMainPage.click();
        const searchField = browser.findElement(By.xpath('//input[@id="search"]'));
        searchField.sendKeys('Nuggets');
        const searchIcon = browser.findElement(By.css('.button[aria-label = search]'));
        searchIcon.click();
        const resultsTitle = element(By.css('.mcd-filter__result-heading'));
        browser.wait(ExpectedConditions.presenceOf(resultsTitle), 30000);
        const countOfResults = element.all(By.css('.mcd-card--result__without-image')).count();
        countOfResults.then((size) => {
            expect(size).to.be.greaterThan(0);
        });
        this.timeout(25000);
        done();
    });

});