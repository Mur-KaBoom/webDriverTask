exports.config = {
    framework: 'mocha',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs : ['spec.js'],
    capabilities: {
        browserName : 'chrome',
        chromeOptions: {
            args: ['--window-size=1920,1080']
        }
    },
}