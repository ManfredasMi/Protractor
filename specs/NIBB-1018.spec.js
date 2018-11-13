const userData = require('../testData/userData');
const LoginPage = require("../pages/NIBB-1018");
const path = require("path");
const moment = require("moment");

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

    it("1.displays Swedbank or Sparbanken logo", function() {
        expect(bank_logo.isPresent()).toBe(true);
    });

    it("2.displays customer service icon", function() {
        customer_service_icon_content = getCssContent(customer_service_icon, '::before');
        customer_service_icon_content.then((cssValue) => expect(cssValue.length > 0).toBe(true));

    });

    it("3.contains proper text near the customer service icon", function() {
        expect(customerServiceText.getText()).toContain('Kundservice');
    });

    it("4.shows digits in inbox counter", function() {
        inbox_counter.getText().then((text) => expect(parseInt(text) >= 0).toBe(true));
    });

    it("5.shows a bell icon", function() {
        inbox_icon_content = getCssContent(inbox_icon, '::before');
        inbox_icon_content.then((cssValue) => expect(cssValue.length > 0).toBe(true));
    });
    it("6.shows text near the bell icon", () =>
        inbox_text.getText().then((text) => expect(text).toContain("Inkorg"))
    );

    it("7.shows a user profile icon", () => {
        profile_menu_icon_content = getCssContent(profile_menu_icon, '::before');
        profile_menu_icon_content.then((cssValue) => expect(cssValue.length > 0).toBe(true));
    });

    it("8.shows user name and lastname", () =>
        profile_menu_icon_text.getText().then((text) =>
            expect(text).toContain(testUser.userName))
    );

    it("9.bank logo works as a shortcut to home page", function() {
        insurance_menu_button.click();
        browser.getCurrentUrl().then((url) => expect(url.includes(insurance_page_url)).toBe(true));
        bank_logo.click();
        browser.getCurrentUrl().then((url) => expect(url.includes(start_page_url)).toBe(true));
    });

    it("10.'Kundservice>FAQ' leads you to faq page ", function() {
        customerServiceText.click();
        faq_submenu.click();
        expect(faq_page_header.isDisplayed()).toBe(true);
        browser.getCurrentUrl().then((url) => expect(url.includes(faq_page_url)).toBe(true));
    });

    it("11.'Kundservice>Tips' leads you to tips modal ", function() {
        customerServiceText.click();
        tips_submenu.click();
        browser.sleep(500);
        expect(tips_modal_header.isDisplayed()).toBe(true);
        expect(tips_modal_image.isDisplayed()).toBe(true);
        tips_modal_closeCross.click();
    });

    it("12.'Kundservice>Kontakta oss' leads to Contact us page", function() {
        customerServiceText.click();
        contact_us_submenu.click();
        expect(contact_us_page_header.isDisplayed()).toBe(true);
        browser.getCurrentUrl().then((url) => expect(url.includes(contact_us_url)).toBe(true));
    });

    it("13.Inbox button is clickable and reminder options lead to other pages", function() {
        inbox_text.click();

        element.all(inbox_submenus).then((array) => {
            inbox_text.click();
            if (array.length === 0) {
                expect(inbox_empty_submenu.isDisplayed()).toBe(true);
            } else if (array.length > 0) {

                for (var i = 0; i < array.length; i++) {
                    inbox_text.click();
                    var currentUrl;
                    browser.getCurrentUrl().then((url) => currentUrl = url);
                    element.all(inbox_submenus).get(i).click();
                    browser.getCurrentUrl().then((new_url) => {
                        expect(new_url === currentUrl).toBe(false);

                    });
                }
            }
        })
    });

    it("14.user menu has 'Change profile' submenu with icon & text", () => {
        if (testUser.has_multiple_accounts === 'true') {
            profile_menu_icon_text.click();
            expect(change_profile_submenu.isDisplayed()).toBe(true);
            change_profile_icon_content = getCssContent(change_profile_submenu_icon, '::before');
            change_profile_icon_content.then((cssValue) => expect(cssValue.length > 0).toBe(true));
            expect(change_profile_submenu.getText()).toContain("Byt profil");


        } else if (testUser.has_multiple_accounts === "false") {
            it("'Change profile' is not displayed if user has single user account", () => {
                profile_menu_icon_text.click();
                expect(change_profile_submenu.isDisplayed()).toBe(false);
            })
        }
    });

    it("15.'Change profile' submenu  leads to another page", () => {
        if (testUser.has_multiple_accounts === 'true') {
            change_profile_submenu.click();
            browser.getCurrentUrl().then((url) => expect(url.includes(change_profile_url)).toBe(true));
            browser.navigate().back();
        }
    });


    it("16.user menu shows 'Settings' submenu with text & icon ", () => {
        profile_menu_icon_text.click();
        expect(settings_submenu.isDisplayed()).toBe(true);

        settings_icon_content = getCssContent(settings_submenu_icon, '::before');
        settings_icon_content.then((cssValue) => expect(cssValue.length > 0).toBe(true));
        expect(settings_submenu.getText()).toContain("Inställningar");

    });

    it("17.'Settings' submenu leads to correct url", () => {
        settings_submenu.click();
        browser.getCurrentUrl().then((url) => expect(url.includes(settings_page_url)).toBe(true));
    });

    it("18.user menu shows 'To Earlier version of IB' text & icon", () => {
        profile_menu_icon_text.click();
        to_old_bank_submenu.getText().then((text) => expect(text).toContain("Tidigare versionen av internetbanken"));
        to_old_bank_icon_content = getCssContent(to_old_bank_icon, '::before');
        to_old_bank_icon_content.then((cssValue) => expect(cssValue.length > 0).toBe(true));
    });

    it("19.shows user info summary", () => {
        today = moment().format('YYYY-MM-DD');

        expect(user_info_block.getText()).toContain(testUser.userName);
        expect(user_info_block.getText()).toContain('Inloggad ' + today);

    });

    it("20.shows a language change option", () => {
        expect(user_info_block.getText()).toContain("Change language:");
        expect(change_language_flag.isDisplayed()).toBe(true);
    });

    it("21.shows a logout button", () => {
        expect(log_out_button.isDisplayed()).toBe(true);
    });

    it("22.Log out button works", () => {
        browser.waitForAngularEnabled(false);
        log_out_button.click();
        browser.sleep(2000);
        browser.getCurrentUrl().then((url) => expect(url).toContain('https://extib42.s05.tde.swedbank.net/app/privat/utloggad?bankId=08999'));
    });
});
