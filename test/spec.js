const {
    expect
} = require("chai");
const MainPage = require("./page-objects/MainPage");
const SearchPage = require("./page-objects/SearchPage");

const mainPage = new MainPage();
const searchPage = new SearchPage();

describe('McDonalds: ', function () {

    beforeEach(function (done) {
        mainPage.open();
        this.timeout(25000);
        done();
    })

    it('should have a title', async function () {
        expect(await mainPage.getTitle()).to.be.equal("McDonald's: Burgers, Fries & More. Quality Ingredients.");
    });

    it('should display search results for valid search query', async function () {
        this.timeout(10000);
        mainPage.performSearchOf('Nuggets');
        searchPage.searchResults.waitForElement();
        expect(await searchPage.searchResults.getCount()).to.be.greaterThan(0);
    });

    it('should display "no search results" for invalid search query', async function () {
        this.timeout(10000);
        mainPage.performSearchOf('sldk;aslkd');
        expect(await searchPage.noSearchResults.elementIsDisplayed());
    });

    it('should display more results after click on Load More button', async function () {
        this.timeout(25000);
        mainPage.performSearchOf('Nuggets');
        searchPage.searchResults.waitForElement();
        searchPage.loadMoreResultsButton.waitForElement();
        let amountOfResultsBeforeLoadMore = await searchPage.searchResults.getCount();
        searchPage.loadMoreResultsButton.scrollTo();
        searchPage.loadMoreResultsButton.click();
        expect(await searchPage.searchResults.getCount()).to.be.greaterThan(amountOfResultsBeforeLoadMore);
    });

    it('should change language', async function () {
        this.timeout(10000);
        mainPage.header.additionalLinks.clickTextInCollection('Language');
        mainPage.header.languageItems.waitForElement();
        mainPage.header.languageItems.clickTextInCollection('Español');
        mainPage.header.spanishLanguageButton.waitForElement();
        expect(await mainPage.getTitle()).to.be.equal('McDonald’s: Hamburguesas, Papitas y Más. Ingredientes de Calidad');
    });

});