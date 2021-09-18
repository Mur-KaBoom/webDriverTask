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
        this.loadMoreResultsButton = new Element ('.mcd-search--load-more__btn');
    }

    runSearch(searchTerm) {
        this.searchField.sendKeys(searchTerm);
        this.runSearchButton.click();
    }


}

module.exports = SearchPage;