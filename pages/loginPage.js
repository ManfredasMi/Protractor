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
    this.toThePreviousVersion = by.css(".swed-button-group_container .swed-button[sw-priority=primary]");
    this.swedbankLogo = by.css("[src='images/swedbank/logo/08999.gif']");
    this.OIBbutton = by.cssContainingText('div#sidebar .swed-main-menu-item__title._flex-grow', 'Tidigare versionen av internetbanken');
    this.linkToNIB = by.cssContainingText('[onclick="onLinkClick(this)"]', 'Till nya versionen av internetbanken');

    this.clickSecurityToken = () => {
        this.selectDropdownByOptionValue(element(this.authMethodDropDown), "string:SECURITY_TOKEN");
    };

    this.inputUserId = (userId) => {
        element(this.userId).sendKeys(userId);
    };

    this.clickLogin = () => {
        element(this.loginButton).click();
        return ibankBasePage;
    };

    this.inputPassword = (password) => {
        element(this.password).sendKeys(password);
    };

    this.selectPrivateProfile = () => {
        element(this.privateProfileItem).click();
    };

    this.selectCustomerPanelButton = () => {
        element(this.customerPanelButton).click();
    };

    this.selectOIB = () => {
        element(this.oldInternetBank).click();
    };

    this.displayStayOnThisPage = () => {
        return element(this.stayOnThisPage).isDisplayed();
    };

    this.displayToOIB = () => {
        return element(this.toThePreviousVersion).isDisplayed();
    };

    this.selectToThePreviousVersion = () => {
        element(this.toThePreviousVersion).click();
    };

    this.displayNIB = () => {
        return element(this.customerPanelButton).isDisplayed();
    };

    this.displaySwedbankLogo = () => {
        return element(this.swedbankLogo).isDisplayed();
    };

    this.selectOIBbutton = () => {
        element(this.OIBbutton).click();
    };

    this.selectLinkToNIB = () => {
        element(this.linkToNIB).click();
    };
};

LoginPage.prototype = abstractPage;
module.exports = LoginPage;
