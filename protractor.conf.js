const ConsoleReporter = require('jasmine-reporter-console');

var timeout = 70;
var width = 800;
var height = 600;

exports.config = {

  specs: ['e2e/specs/NIBB-1087.spec.js'],
  baseUrl: 'https://extib42.s03.tde.swedbank.net/app/privat/login',

  framework: 'jasmine2',

  allScriptsTimeout: timeout * 1000,

  onPrepare: function() {
    // set implicit wait times in ms...
    browser.manage().timeouts().pageLoadTimeout(timeout * 1000);
    browser.manage().timeouts().implicitlyWait(timeout * 1000);
    // set browser size...
    // browser.manage().window().maximize();
    browser.manage().window().maximize();

    jasmine.getEnv().addReporter(new ConsoleReporter);
  },

  capabilities: {
    'browserName': 'chrome',
    proxy: {
      proxyType: 'manual',
      httpProxy: 'http://p998fmm:p998fmm@proxyvip.foreningssparbanken.se:8080',
      sslProxy: 'http://p998fmm:p998fmm@proxyvip.foreningssparbanken.se:8080'
   }

    // this to let the browser run in mobile view

    // 'chromeOptions': {
    //   'mobileEmulation': {
    //     'deviceName': 'iPhone 6'
    //   }
    // }

    // this part is for NIBB-1018 test only, manually check tablet/mobile view

    // 'chromeOptions': {
    //         'args': ['--load-extension=' + "C:\\Users\\P998FMM\\fdp-portal-private\\e2e\\chromeAutoProxy"]
    //     }

  },

  jasmineNodeOpts: {
    showColors: true,
    displayStacktrace: true,
    displaySpecDuration: true,
    // overrides jasmine's print method to report dot syntax for custom reports
    print: function() {},
    defaultTimeoutInterval: timeout * 1000
  }

};
