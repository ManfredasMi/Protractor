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
    this.OIBbutton = by.cssContainingText('.swed-main-menu-item__title', 'Tidigare versionen av internetbanken');
    this.linkToNIB = by.cssContainingText('[onclick="onLinkClick(this)"]', 'Till nya versionen av internetbanken');
    customer_service_icon = element(by.css('._icon-customer-service'));
    customerServiceText = element(by.css('[sw-icon="customer-service"]+._show-sm'));
    faq_submenu = element(by.css('[ng-click="$ctrl.openFAQ()"]'));
    faq_page_header = element(by.cssContainingText('h1', 'Vanliga frågor och svar'));
    faq_page_url = "/app/privat/faq";
    tips_submenu = element(by.css('[ng-click="$ctrl.openTutorial()"]'));
    tips_modal_header = element(by.css('[ng-bind-html="title | translate"]'));
    tips_modal_image = element(by.css('.swed-tutorial--image [src*=".png"]'));
    tips_modal_closeCross = element(by.css('._icon-close-clean'));
    contact_us_submenu = element(by.css('[ng-click="$ctrl.openContactUs()"]'));
    contact_us_url = "/app/privat/kontaktaoss";
    contact_us_page_header = element(by.cssContainingText('header h1', 'Kontakta oss'));
    inbox_counter = element(by.css('.swed-menu__toggle .swed-ui-badge__number'));
    inbox_icon = element(by.css('._icon-notifications-bell'));
    inbox_text = element(by.css('swed-ui-badge~._show-sm'));
    inbox_submenus = by.css('.swed-scrollpane__container swed-menu-item[aria-hidden="false"]');
    inbox_empty_submenu = by.css('.no-reminders');
    profile_menu_icon = element(by.css('.page-header__menu-icon ._icon-profile'));
    profile_menu_icon_text = element(by.css('._layout-column ._show-sm'));
    change_profile_submenu = element(by.css('[ng-click="$ctrl.selectProfile()"]'));
    change_profile_submenu_icon = element(by.css('.swed-menu-item_content ._icon-profile'));
    change_profile_url = "/app/privat/valj-profil";
    settings_submenu = element(by.css('[ng-click="$ctrl.navigateToSettings()"]'));
    settings_submenu_icon = element(by.css('._icon--left._icon-settings'));
    settings_page_url = "/app/privat/installningar";
    to_old_bank_submenu = element(by.css('[ng-if="::$ctrl.showOldIBLink"]'));
    to_old_bank_icon = element(by.css('._icon--left._icon-deep-link'));
    user_info_block = element(by.css('._copy-secondary'));
    change_language_flag = element(by.css('.swed-flag_flag[src*=".png"]'));
    change_language_picker = element(by.css('.language-picker'));
    log_out_button = element(by.css('[ng-click="swedBusyClick($ctrl.logout(), $event)"]'));
    start_page_url = "/app/privat/start-page";
    insurance_page_url = "/app/privat/forsakring";
    insurance_menu_button = element(by.css("#sidebar [sw-icon='insurance']"));
    login_dropdown = element(by.css('[ng-change="$ctrl.setMockCustomer()"]'));
    bank_logo = element(by.css('.page-header .bank-logo'));

    getCssContent = function(selector, type) {
        return browser.executeScript("return window.getComputedStyle(arguments[0], arguments[1]).content", selector.getWebElement(), type);
    };

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
};

LoginPage.prototype = abstractPage;
module.exports = LoginPage;
