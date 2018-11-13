const userData = require('../testData/userData');
const LoginPage = require("../pages/NIBB-1078");
const mocker = require("fdp-tool-protractormocker");
const path = require("path");

describe('Starting test', function() {
    var loginPage;
    var testUser = userData.ivanSterosedulac;
    var text = userData.message;

    beforeAll(function() {
        loginPage = new LoginPage();
        loginPage.goTo();
        loginPage.clickSecurityToken();
        loginPage.inputUserId(testUser.userId);
        loginPage.clickLogin();
        loginPage.inputPassword(testUser.password);
        loginPage.clickLogin();
        loginPage.selectPrivateProfile();
        loginPage.selectCustomerPanelButton();
        loginPage.selectSettingsButton();
    });

    it('1. Page contains Contact information button', function() {
        expect(loginPage.displayContactInformationButton()).toBe(true);
    });

    it('2. Page contains Economical Profile button', function() {
        expect(loginPage.displayEconomicalProfileButton()).toBe(true);
    });

    it('3. After clicking on to Economical Profile, go to OIB is displayed', function() {
        loginPage.selectEconomicalProfileButton();
        expect(loginPage.displayToOIB()).toBe(true);
    });

    it('4. You are being redirected to OIB', function() {
        browser.waitForAngularEnabled(false);
        loginPage.selectOIBbutton();
        browser.sleep(5000);
        expect(loginPage.displayinforRadgivning()).toBe(true);
    });
});
