const Footer = require ("./Footer");
const Header = require ("./Header");
const { browser } = require("protractor");


class Page {
    constructor () {
        this.header = new Header();
        this.footer = new Footer();
    }

    open (path) {
        return browser.get(path);
    }

    wait (waitInMilliseconds) {
        return browser.sleep(waitInMilliseconds);
    }

    getCurrentUrl () {
        return browser.getCurrentUrl();
    }

    getTitle () {
        return browser.getTitle();
    }  
}

module.exports = Page;