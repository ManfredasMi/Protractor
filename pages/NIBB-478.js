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
    this.readTipsButton = by.css("button[ng-click='$ctrl.startTutorial()']");
    this.skipTipsButton = by.css("button[ng-click='$ctrl.skipTutorial()']");
    this.emptySkipButton = by.css("#swed-hero__collapsible");
    this.savingsAndInvestments = by.css("div#sidebar [sw-icon='savings-investments']");
    this.okReadTipsLater = by.css("[ng-click='modal.close()']");
    this.paymentsAndTransfers = by.css("div#sidebar [sw-icon='payments-transfers']");
    this.customerPanel = by.css("span[class='_icon-profile']");
    this.logOut = by.css("button[ng-keydown='$ctrl.onLogoutKeydown($event)']");
    this.loans = by.css("#sidebar [sw-icon='loans']");
    this.customerService = by.css("span[class='_icon-customer-service']");
    this.tips = by.css("swed-menu-item[ng-if='$ctrl.showTutorialLink']");
    this.tipsModal = by.css("ng-transclude[ng-show='isReady']");

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

    this.displayReadTips = () => {
        return element(this.readTipsButton).isDisplayed();
    };

    this.displaySkipTips = () => {
        return element(this.skipTipsButton).isDisplayed();
    };

    this.clickSkipButton = () => {
        element(this.skipTipsButton).click();
    };

    this.clickSavingsAndInvestments = () => {
        element(this.savingsAndInvestments).click();
    };

    this.clickOK = () => {
        element(this.okReadTipsLater).click();
    };

    this.clickPaymentsAndTransfers = () => {
        element(this.paymentsAndTransfers).click();
    };

    this.skipButtonDoesNotExist = () => {
        return element.all(this.emptySkipButton).filter((div) => {
            return div.getAttribute("ng-show").then(attrVal => attrVal.includes("expanded"));
        }).count().then(cnt => cnt > 0);
    }

    this.clickCustomerPanel = () => {
        element(this.customerPanel).click();
    };

    this.clickLogOut = () => {
        element(this.logOut).click();
    };

    this.clickLoans = () => {
        element(this.loans).click();
    };

    this.clickCustomerService = () => {
        element(this.customerService).click();
    };

    this.clickTips = () => {
        element(this.tips).click();
    };

    this.displayTipsModal = () => {
        return element(this.tipsModal).isDisplayed();
    };
};

LoginPage.prototype = abstractPage;
module.exports = LoginPage;
