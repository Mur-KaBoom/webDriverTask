class Collection {

    constructor (selector) {
        this.collection = element.all(by.css(selector));
    }

    getCount () {
        return this.collection.count();
    }

    getText () {
        return this.collection.getText();
    }

    waitForElement () {
        return browser.wait(ExpectedConditions.presenceOf(this.collection), 30000);
    }

    async clickTextInCollection (textToClick) {
        const arrayOfCollectionText = await this.collection.getText();
        const elementToClick = arrayOfCollectionText.indexOf(textToClick);
        if(elementToClick === -1) {
            throw new Error (`No element with expected text ${textToClick}`);
        }
        return this.collection.get(elementToClick).click();
    }

    async clickElementByNumber (numberToClick) {
        const collectionCount = this.collection.count();
        if (numberToClick <= collectionCount && numberToClick > 0) {
            return this.collection.get(numberToClick).click();
        } else {
            throw new Error (`${numberToClick} is out of array boundaries`)
        }
    }
}

module.exports = Collection;