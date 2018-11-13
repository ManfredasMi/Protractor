const login = require("../login/login");
const ph = require("../pages/page-header");
const moment = require("moment");


describe("Page header bar: ", function() {

  beforeAll(function() {
    browser.get("https://www.delfi.lt");
    browser.sleep(3000)

    //browser.get("https://extib51.s14.tde.swedbank.net/app/privat/login");
    //userObject = login("Tiburius Stow");

  });

  it("displays Swedbank or Sparbanken logo", function() {
    expect(bank_logo.isPresent()).toBe(true);
  });

  it("displays customer service icon", function () {
      customer_service_icon_content = getCssContent(customer_service_icon, '::before');
      customer_service_icon_content.then((cssValue) => expect(cssValue.length > 0).toBe(true));

  });

  it("contains proper text near the customer service icon", function () {
      expect(customerServiceText.getText()).toContain('Kundservice');
  });

  it("shows digits in inbox counter", function () {
      inbox_counter.getText().then((text) => expect(parseInt(text) >= 0).toBe(true));
  });

  it("shows a bell icon", function () {
      inbox_icon_content = getCssContent(inbox_icon, '::before');
      inbox_icon_content.then((cssValue) => expect(cssValue.length > 0).toBe(true));
  });
  it("shows text near the bell icon", () =>
      inbox_text.getText().then((text) => expect(text).toContain("Inkorg"))
  );

  it("shows a user profile icon", () => {
          profile_menu_icon_content = getCssContent(profile_menu_icon, '::before');
          profile_menu_icon_content.then((cssValue) => expect(cssValue.length > 0).toBe(true));
      }
  );
  it("shows user name and lastname", () =>
      profile_menu_icon_text.getText().then((text) =>
          expect(text).toContain(userObject.userName))
  );
  it("bank logo works as a shortcut to home page", function () {
      insurance_menu_button.click();
      browser.getCurrentUrl().then((url) => expect(url.includes(insurance_page_url)).toBe(true));
      bank_logo.click();
      browser.getCurrentUrl().then((url) => expect(url.includes(start_page_url)).toBe(true));
  });

  it("'Kundservice>FAQ' leads you to faq page ", function () {
      customerServiceText.click();
      faq_submenu.click();
      expect(faq_page_header.isDisplayed()).toBe(true);
      browser.getCurrentUrl().then((url) => expect(url.includes(faq_page_url)).toBe(true));
  });

  it("'Kundservice>Tips' leads you to tips modal ", function () {
      customerServiceText.click();
      tips_submenu.click();
      browser.sleep(500);
      expect(tips_modal_header.isDisplayed()).toBe(true);
      expect(tips_modal_image.isDisplayed()).toBe(true);
      tips_modal_closeCross.click();
  });

  it("'Kundservice>Kontakta oss' leads to Contact us page", function () {
      customerServiceText.click();
      contact_us_submenu.click();
      expect(contact_us_page_header.isDisplayed()).toBe(true);
      browser.getCurrentUrl().then((url) => expect(url.includes(contact_us_url)).toBe(true));
  });

  it("Inbox button is clickable and reminder options lead to other pages", function () {
      inbox_text.click();

      element.all(inbox_submenus).then((array) => {
          inbox_text.click();
          if (array.length === 0) {
              expect(inbox_empty_submenu.isDisplayed()).toBe(true);
          }
          else if (array.length > 0) {

              for (var i = 0; i < array.length; i++) {
                  inbox_text.click();
                  var currentUrl;
                  browser.getCurrentUrl().then((url)=> currentUrl = url);
                  element.all(inbox_submenus).get(i).click();
                  browser.getCurrentUrl().then((new_url)=> {
                          expect(new_url === currentUrl).toBe(false);

                      }
                  );
              }
          }
      })
  });

  it("user menu has 'Change profile' submenu with icon & text", ()=> {
      if (userObject.has_multiple_accounts === 'true') {
          profile_menu_icon_text.click();
          expect(change_profile_submenu.isDisplayed()).toBe(true);
          change_profile_icon_content = getCssContent(change_profile_submenu_icon, '::before');
          change_profile_icon_content.then((cssValue) => expect(cssValue.length > 0).toBe(true));
          expect(change_profile_submenu.getText()).toContain("Byt profil");


      } else if (userObject.has_multiple_accounts === "false") {
          it("'Change profile' is not displayed if user has single user account", ()=> {
              profile_menu_icon_text.click();
              expect(change_profile_submenu.isDisplayed()).toBe(false);
          })
      }
  });

  it("'Change profile' submenu  leads to another page", ()=> {
      if (userObject.has_multiple_accounts === 'true') {
          change_profile_submenu.click();
          browser.getCurrentUrl().then((url)=>expect(url.includes(change_profile_url)).toBe(true));
          browser.navigate().back();
      }
  });


  it("user menu shows 'Settings' submenu with text & icon ", ()=> {
      profile_menu_icon_text.click();
      expect(settings_submenu.isDisplayed()).toBe(true);

      settings_icon_content = getCssContent(settings_submenu_icon, '::before');
      settings_icon_content.then((cssValue) => expect(cssValue.length > 0).toBe(true));
      expect(settings_submenu.getText()).toContain("Inställningar");

  });

  it("'Settings' submenu leads to correct url", ()=> {
      settings_submenu.click();
      browser.getCurrentUrl().then((url) => expect(url.includes(settings_page_url)).toBe(true));
      }
  );

  it("user menu shows 'To Earlier version of IB' text & icon", ()=> {
      profile_menu_icon_text.click();
      to_old_bank_submenu.getText().then((text)=> expect(text).toContain("Tidigare versionen av internetbanken"));
      to_old_bank_icon_content = getCssContent(to_old_bank_icon, '::before');
      to_old_bank_icon_content.then((cssValue) => expect(cssValue.length > 0).toBe(true));
  });

  it("shows user info summary", ()=> {
          today = moment().format('YYYY-MM-DD');

          expect(user_info_block.getText()).toContain(userObject.userName);
          expect(user_info_block.getText()).toContain('Inloggad '  + today);

      }
  );

  it("shows a language change option", ()=> {
          expect(user_info_block.getText()).toContain("Change language:");
          expect(change_language_flag.isDisplayed()).toBe(true);
      }
  );

  it("shows a logout button", ()=> {
      expect(log_out_button.isDisplayed()).toBe(true);
  });

  it("Log out button works", ()=> {
      log_out_button.click();
      browser.sleep(600);
      //expect(customerServiceText.isPresent()).toBe(false)
      browser.getCurrentUrl().then((url)=> expect(url).toContain('https://www.swedbank.se/'));

  });

})
