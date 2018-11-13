const userData = require('../testData/userData');
const LoginPage = require("../pages/NIBB-474");
const path = require("path");

browser.waitForAngularEnabled(false);

describe('Starting test', function() {

    var loginPage;
    var testUser = userData.malteCarey;
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
        loginPage.selectOIB();
    });

    it('1. Stay on this page button is visible', function() {
        expect(loginPage.displayStayOnThisPage()).toBe(true);
    });

    it('2. To the previous version button is visible', function() {
        expect(loginPage.displayToOIB()).toBe(true);
    });

    it("3. Clicking to the previous version button OIB page is loaded and Swedbank logo is shown", () => {
        loginPage.selectToThePreviousVersion();
        expect(loginPage.displaySwedbankLogo()).toBe(true);
    });

    it("4. Returned to NIB when Clicking on top blue banner while in OIB", () => {
        loginPage.selectLinkToNIB();
        expect(loginPage.displayNIB()).toBe(true);
    });

    it("5. After clicking on To earlier version of the internet bank in the left menu stay on this page button is visible", () => {
        loginPage.selectOIBbutton();
        expect(loginPage.displayStayOnThisPage()).toBe(true);
    });

    it('6. To the previous version button is visible', function() {
        expect(loginPage.displayToOIB()).toBe(true);
    });

    it("7. Clicking to the previous version button OIB page is loaded and Swedbank logo is shown. Test is finished!", () => {
        loginPage.selectToThePreviousVersion();
        expect(loginPage.displaySwedbankLogo()).toBe(true);
    });
});
