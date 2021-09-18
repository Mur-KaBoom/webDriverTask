const Page = require ('./Page');
const Collection = require ('./Collection');

class MainPage extends Page {

    constructor () {
        super();
        this.titles = new Collection ('.mcd-publication__text-container h2');
        this.articleButtons = new Collection ('.mcd-publication__text-container .button');
    }

    open () {
        return super.open('https://www.mcdonalds.com/');
    }

}

module.exports = MainPage;