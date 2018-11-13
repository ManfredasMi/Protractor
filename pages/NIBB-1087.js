var ibankBasePage = require('./ibankBasePage');
var abstractPage = require('./abstractPage');
var UserData = require('../testData/userData');

var LoginPage = function() {
    this.url = '/login';
    this.loginButton = by.css('div.widget-login-form button[sw-type="submit"]');
    this.authMethodDropDown = by.css("select[ng-model='$ctrl.authMethod']");
    this.userId = by.css("input[name='userId']");
    this.password = by.css("#response");
    this.privateProfileItem = by.css("li[ng-if='bank.privateProfile']>swed-item");
    this.customerPanelButton = by.css("span[class='_icon-profile']");
    this.oldInternetBank = by.css("swed-menu-item[ng-if='::$ctrl.showOldIBLink']");
    this.stayOnThisPage = by.css(".swed-button-group_container .swed-button[sw-priority='secondary'][type='button']");
    this.toThePreviousVersion = by.css("div#sidebar [sw-icon='deep-link']");
    this.languageFlag = by.css('swed-widget-language-picker');
    this.readTipsButton = by.css("button[ng-click='$ctrl.startTutorial()']");
    this.loans = by.css("[sw-icon='loans']");
    this.skipTipsButton = by.css("button[ng-click='$ctrl.skipTutorial()']");
    this.paymentsAndTransfers = by.css("[sw-icon='payments-transfers']");
    this.okReadTipsLater = by.css("[ng-click='modal.close()']");
    this.readTipsModal = by.css("[class='swed-tutorial--header']");
    this.settingsButton = by.css("swed-menu-item[ng-click='$ctrl.navigateToSettings()']");
    this.contactInformationButton = by.css("swed-ui-link-button[href$=contactinformation]");
    this.economicalProfileButton = by.css("swed-ui-link-button[ng-click='$ctrl.openModal(link)']");
    this.closeButton = by.css("button[ng-click='closeStack()']");
    this.manageServicesButton = by.css("[sw-icon='settings']");
    this.manageChildrensServices = by.css("swed-ui-link-button[ui-sref='main.parental-control']");
    this.chooseChildren = by.css("div[ng-if='!$ctrl.hasValueDetails']");
    this.swishButton = by.css("div[ng-hide='$ctrl.child.services.SwishAgreement.active']");

    this.clickSecurityToken = function() {
        this.selectDropdownByOptionValue(element(this.authMethodDropDown), "string:SECURITY_TOKEN");
    };

    this.inputUserId = function(userId) {
        element(this.userId).sendKeys(userId);
    };

    this.clickLogin = () => {
        element(this.loginButton).click();
        return ibankBasePage;
    };

    this.inputPassword = function(password) {
        element(this.password).sendKeys(password);
    };

    this.clickPrivateProfile = () => {
        element(this.privateProfileItem).click();
    };

    this.clickCustomerPanelButton = () => {
        element(this.customerPanelButton).click();
    };

    this.clickOIB = () => {
        element(this.oldInternetBank).click();
    };

    this.displayStayOnThisPage = () => {
        return element(this.stayOnThisPage).isDisplayed();
    };

    this.clickStayOnThisPage = () => {
        element(this.stayOnThisPage).click();
    };

    this.clickToThePreviousVersion = () => {
        element(this.toThePreviousVersion).click();
    };

    this.displayLanguageFlag = () => {
        return element(this.languageFlag).isDisplayed();
    };

    this.clickReadTips = () => {
        element(this.readTipsButton).click();
    };

    this.clickLoans = () => {
        element(this.loans).click();
    };

    this.clickSkipButton = () => {
        element(this.skipTipsButton).click();
    };

    this.clickPaymentsAndTransfers = () => {
        element(this.paymentsAndTransfers).click();
    };

    this.displayReadTips = () => {
        return element(this.readTipsButton).isDisplayed();
    };

    this.clickOK = () => {
        element(this.okReadTipsLater).click();
    };

    this.DisplayReadTipsModal = () => {
        return element(this.readTipsModal).isDisplayed();
    };

    this.selectSettingsButton = () => {
        element(this.settingsButton).click();
    };

    this.displayEconomicalProfileButton = () => {
        return element(this.economicalProfileButton).isDisplayed();
    };

    this.displayContactInformationButton = () => {
        return element(this.contactInformationButton).isDisplayed();
    };

    this.clickClose = () => {
        element(this.closeButton).click();
    };

    this.clickManageServices = () => {
        element(this.manageServicesButton).click();
    };

    this.clickManageChildrensServices = () => {
        element(this.manageChildrensServices).click();
    };

    this.clickChooseChildren = () => {
        element(this.chooseChildren).click();
    };

    this.displaySwish = () => {
        return element(this.swishButton).isDisplayed();
    };
};

LoginPage.prototype = abstractPage;
module.exports = LoginPage;
