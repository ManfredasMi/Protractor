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
    this.changeLanguage = by.css("div[ng-click='$ctrl.changeLanguage(language)']");
    this.changedLanguageText = by.cssContainingText('[class="swed-identification-footer__headline"]', 'Hello and welcome');
    this.changedLanguageText2 = by.cssContainingText('[class="ng-scope"]', 'Välkommen!');
    this.languageFlag = by.css('swed-widget-language-picker');

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

    this.selectPrivateProfile = function() {
      element(this.privateProfileItem).click();
    };

    this.selectCustomerPanelButton = function() {
        element(this.customerPanelButton).click();
    };

    this.selectChangeLanguage = () => {
        element(this.changeLanguage).click();
    };

    this.displayChangedLanguage = () => {
      return element(this.changedLanguageText).isDisplayed();
    };

    this.selectLanguageFlag = () => {
      element(this.languageFlag).click();
    };

    this.displayChangedLanguage2 = () => {
      return element(this.changedLanguageText2).isDisplayed();
    };
};

LoginPage.prototype = abstractPage;
module.exports = LoginPage;
