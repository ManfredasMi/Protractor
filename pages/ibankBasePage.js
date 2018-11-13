/**
 * Created by p998rgz
 */
var abstractPage = require('./abstractPage');

var IBankBasePage = function() {

    // Čia reikia selektoriaus
    //this.savingInvestmentsLink = by.css("");


    this.clickSavingsInvestments = function() {
        element(this.savingInvestmentsLink).click();
    };



}

IBankBasePage.prototype = abstractPage; // extend abstractPage...
var ibankBasePage = new IBankBasePage();
module.exports = ibankBasePage;
