const { expect } = require("chai");
const MainPage = require("./page-objects/MainPage");
const mainPage = new MainPage();

describe('McDonalds Main Page: ', function () {

    beforeEach(async function () {
        this.timeout(10000)
        await mainPage.open();
    });

    it('should have a title', async function () {
        expect(await mainPage.getTitle()).to.be.equal("McDonald's: Burgers, Fries & More. Quality Ingredients.");
    });

    it('should change language', async function () {
        mainPage.header.additionalLinks.clickTextInCollection('Language');
        mainPage.header.languageItems.waitForElement();
        mainPage.header.languageItems.clickTextInCollection('Español');
        mainPage.header.spanishLanguageButton.waitForElement();
        expect(await mainPage.getTitle()).to.be.equal('McDonald’s: Hamburguesas, Papitas y Más. Ingredientes de Calidad');
    });

});