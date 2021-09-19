const Element = require('./Element');
const Collection = require('./Collection');

class Header {
    constructor () {
        this.mainLinks = new Collection ('.desktop-nav a.main-link');
        this.additionalLinks = new Collection ('.desktop-nav a.link');
        this.languageItems = new Collection ('.desktop-nav .language-item');
        this.orderNowButton = new Element ('.desktop-nav .external-delivery');
        this.searchIcon = new Element ('.desktop-nav .icon-search');
        this.viewFullMenuButton = new Element ('.desktop-nav .view-full-menu.d-none .button');
        this.logo = new Element ('.desktop-nav .component-logo');
        this.spanishLanguageButton = new Element ('.desktop-nav .external-delivery[aria-label = "Ordena Ahora"]');
        this.englishLanguageButton = new Element ('.desktop-nav .external-delivery[aria-label = "Order Now"]');
    }
}

module.exports = Header;