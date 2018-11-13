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
    this.settingsButton = by.css("swed-menu-item[ng-click='$ctrl.navigateToSettings()']");
    this.contactInformationButton = by.css("swed-ui-link-button[href$=contactinformation]");
    this.economicalProfileButton = by.css("swed-ui-link-button[ng-click='$ctrl.openModal(link)']");
    this.OIBbutton = by.css(".swed-button-group_container .swed-button[sw-priority=primary]");
    this.inforRadgivning = by.cssContainingText('[class="sub-nav"]', 'Inför rådgivning');

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

    this.selectPrivateProfile = function() {
        element(this.privateProfileItem).click();
    };

    this.inputPassword = function(password) {
        element(this.password).sendKeys(password);
    };

    this.selectCustomerPanelButton = function() {
        element(this.customerPanelButton).click();
    };

    this.selectSettingsButton = function() {
        element(this.settingsButton).click();
    };

    this.selectEconomicalProfileButton = function() {
        element(this.economicalProfileButton).click();
    };

    this.displayEconomicalProfileButton = function() {
        return element(this.economicalProfileButton).isDisplayed();
    };

    this.displayContactInformationButton = function() {
        return element(this.contactInformationButton).isDisplayed();
    };

    this.displayToOIB = function() {
        return element(this.OIBbutton).isDisplayed();
    };

    this.selectOIBbutton = function() {
        element(this.OIBbutton).click();
    };

    this.displayinforRadgivning = function() {
        return element(this.inforRadgivning).isDisplayed();
    };
};

LoginPage.prototype = abstractPage;
module.exports = LoginPage;
