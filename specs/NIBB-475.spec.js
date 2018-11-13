const userData = require('../testData/userData');
const LoginPage = require("../pages/NIBB-475");
const path = require("path");
const mocker = require("fdp-tool-protractormocker");

describe ('Starting test', function() {

    var loginPage;
    var testUser = userData.ivanSterosedulac;
    var text = userData.message ;

    beforeAll(function() {
        loginPage = new LoginPage();
        loginPage.goTo();
        loginPage.selectChangeLanguage();
    });

    it('1. Language is changed on page loadup', function(){
        expect(loginPage.displayChangedLanguage()).toBe(true);
    });

    it('2. Language is changed from customers profile', function(){
      loginPage.clickSecurityToken();
      loginPage.inputUserId(testUser.userId);
      loginPage.clickLogin();
      loginPage.inputPassword(testUser.password);
      loginPage.clickLogin();
      loginPage.selectPrivateProfile();
      loginPage.selectCustomerPanelButton();
      loginPage.selectLanguageFlag();
      browser.refresh();
      expect(loginPage.displayChangedLanguage2()).toBe(true);
    });
});
