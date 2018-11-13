const LoginPage = require("../pages/NIBB-1087");
const mocker = require("fdp-tool-protractormocker");
const path = require("path");

describe('Starting test', function() {

    var loginPage;

    beforeAll(function() {
        loginPage = new LoginPage();
        loginPage.goTo();
        loginPage.clickLogin();
        loginPage.clickLogin();
        loginPage.clickPrivateProfile();
    });

    it('1. To earlier version button exists in customer panel option menu and opens a modal with two options when clicked', () => {
        loginPage.clickCustomerPanelButton();
        loginPage.clickOIB();
        expect(loginPage.displayStayOnThisPage()).toBe(true);
    });

    // disabled for now as there is no button at least at the moment
    xit('2. To earlier version button exists on side menu bar and opens a modal with two options when clicked', () => {
        loginPage.clickStayOnThisPage();
        loginPage.clickToThePreviousVersion();
        expect(loginPage.displayStayOnThisPage()).toBe(true);
    });

    it('3. Country flag to change the language is visible', () => {
        loginPage.clickStayOnThisPage();
        loginPage.clickCustomerPanelButton();
        expect(loginPage.displayLanguageFlag()).toBe(true);
    });

    it('4. Skip tips on loan page and check if the tips are left on transfers & payments page', () => {
        loginPage.clickLoans();
        loginPage.clickSkipButton();
        loginPage.clickOK();
        loginPage.clickPaymentsAndTransfers();
        expect(loginPage.displayReadTips()).toBe(true);
    });

    it('5. Click on to read tips and check if tips modal is opened', () => {
        loginPage.clickReadTips();
        expect(loginPage.DisplayReadTipsModal()).toBe(true);
    });

    it('6. Contact information is shown under settings', () => {
        loginPage.clickClose();
        loginPage.clickCustomerPanelButton();
        loginPage.selectSettingsButton();
        expect(loginPage.displayContactInformationButton()).toBe(true);
    });

    it('7. Your economical profile is shown under settings', () => {
        expect(loginPage.displayEconomicalProfileButton()).toBe(true);
    });

    it('8. You are able to get into manage children services and 4 options are shown', () => {
        loginPage.clickManageServices();
        loginPage.clickManageChildrensServices();
        loginPage.clickChooseChildren();
        expect(loginPage.displaySwish()).toBe(true);
    });
});
