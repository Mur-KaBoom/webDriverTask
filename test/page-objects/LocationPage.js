const Page = require ('./Page');
const Element = require ('./Element');
const { browser, element } = require('protractor');


class LocationPage extends Page {
    constructor () {
        super();
        this.locationFrame = new Element ('rl-map-view', true);
        this.refreshLocationButton = new Element ('[title="Click to recenter the map"]:not(.recenterMap)');
        this.zoomMapButton = new Element ('.gmnoprint button.gm-control-active:first-child');
        this.locationBar = new Element ('rl-jcr:content-1526839399', true);
    }

    async moveMap () {
        return browser.actions().click(element(by.id('rl-map-view'))).dragAndDrop(element(by.id('rl-map-view')), {x: -500, y: 0}).perform();
    }

}

module.exports = LocationPage;