const { expect } = require("chai");
const MainPage = require("./page-objects/MainPage");
const SearchPage = require("./page-objects/SearchPage");
const mainPage = new MainPage();
const searchPage = new SearchPage();

describe('McDonalds Search Page: ', function () {

    beforeEach(async function () {
        this.timeout(10000)
        await mainPage.open();
    });

    it('should display search results for valid search query', async function () {
        mainPage.performSearchOf('Nuggets');
        searchPage.searchResults.waitForElement();
        expect(await searchPage.searchResults.getCount()).to.be.greaterThan(0);
    });

    it('should display "no search results" for invalid search query', async function () {
        mainPage.performSearchOf('sldk;aslkd');
        expect(await searchPage.noSearchResults.elementIsDisplayed());
    });

    it('should display more results after click on Load More button', async function () {
        mainPage.performSearchOf('Nuggets');
        searchPage.searchResults.waitForElement();
        searchPage.loadMoreResultsButton.waitForElement();
        let amountOfResultsBeforeLoadMore = await searchPage.searchResults.getCount();
        searchPage.loadMoreResultsButton.click();
        expect(await searchPage.searchResults.getCount()).to.be.greaterThan(amountOfResultsBeforeLoadMore);
    });
});