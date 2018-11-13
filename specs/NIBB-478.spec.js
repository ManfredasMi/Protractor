const userData = require('../testData/userData');
const LoginPage = require("../pages/NIBB-478");
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
    });

    it('1. Read tips button is displayed', () => {
        expect(loginPage.displayReadTips()).toBe(true);
    });

    it('2. Skip tips button is displayed', () => {
        expect(loginPage.displaySkipTips()).toBe(true);
    });

    it('3. Testing if after skipping tips, S&I page, does not have tips enabled', () => {
        loginPage.clickSkipButton();
        loginPage.clickOK();
        loginPage.clickSavingsAndInvestments();
        expect(loginPage.skipButtonDoesNotExist()).toBe(true);
    });

    it('4. Testing if after skipping tips, Payments and Transfers page, does not have tips enabled', () => {
        loginPage.clickPaymentsAndTransfers();
        expect(loginPage.skipButtonDoesNotExist()).toBe(true);
    });

    it('5. Restarting browser to get back tips on. Skipping tips on Loans page and checking if read and skip tips buttons are displayed', () => {
        browser.restart();
        loginPage.goTo();
        loginPage.clickSecurityToken();
        loginPage.inputUserId(testUser.userId);
        loginPage.clickLogin();
        loginPage.inputPassword(testUser.password);
        loginPage.clickLogin();
        loginPage.selectPrivateProfile();
        loginPage.clickLoans();
        loginPage.clickSkipButton();
        loginPage.clickOK();
        loginPage.clickSavingsAndInvestments();
        expect(loginPage.displayReadTips()).toBe(true);
    });

    it('6. Read tips is displayed on Payments and transfers page', () => {
        loginPage.clickPaymentsAndTransfers();
        expect(loginPage.displayReadTips()).toBe(true);
    });

    it('7. Select tips for the internet bank from customer service menu and check if tips are being displayed', () => {
        loginPage.clickCustomerService();
        loginPage.clickTips();
        expect(loginPage.displayTipsModal()).toBe(true);
    });
});
