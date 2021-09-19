const Page = require ('./Page');
const Collection = require ('./Collection');
const SearchPage = require ('./SearchPage');
const searchPage = new SearchPage ();

class MainPage extends Page {

    constructor () {
        super();
        this.titles = new Collection ('.mcd-publication__text-container h2');
        this.articleButtons = new Collection ('.mcd-publication__text-container .button');
    }

    open () {
        return super.open('https://www.mcdonalds.com/');
    }

    performSearchOf (searchTerm) {
        this.header.searchIcon.click();
        searchPage.searchField.waitForElement();
        searchPage.runSearch(searchTerm);
    }

}

module.exports = MainPage;