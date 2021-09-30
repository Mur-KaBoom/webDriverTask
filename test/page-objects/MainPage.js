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

    async performSearchOf (searchTerm) {
        await this.header.searchIcon.click();
        await searchPage.searchField.waitForElement();
        await searchPage.runSearch(searchTerm);
    }

}

module.exports = MainPage;