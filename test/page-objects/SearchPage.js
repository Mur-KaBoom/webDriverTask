const Collection = require("./Collection");
const Element = require("./Element");
const Page = require("./Page");

class SearchPage extends Page {
    constructor () {
        super();
        this.searchField = new Element ('.mcd-search__input--main[name=search]');
        this.runSearchButton = new Element ('.mcd-search__button');
        this.clearSearchField = new Element ('.mcd-search__input--close-btn');
        this.searchResults = new Collection ('.mcd-card--result__without-image');
        this.readMoreAboutResultButtons = new Collection ('.small.link');
        this.loadMoreResultsButton = new Element ('.btn[ng-click="loadSearchResults(false)"]');
        this.noSearchResults = new Element ('.mcd-search__no-item');
        this.resultsAmount = new Element ('.mcd-filter__carousel__item-link .ng-binding:last-child');
    }

    async runSearch(searchTerm) {
        await this.searchField.sendKeys(searchTerm);
        return this.runSearchButton.click();
    }

}

module.exports = SearchPage;