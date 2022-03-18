// ==UserScript==
// @name         cwl_fillPassengerDetails
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       zqtay
// @match        https://vtl.causewaylink.com.my/bus/passengerdetails
// @icon         none
// @grant        none
// ==/UserScript==


// Update your details here
const email = "abc@gmail.com";
const countryCode = "+65";
const phoneNum = "81234567";
const name = "ABC";
const gender = "M";
const dob = "1900-01-01";
const nationality = "MY";
const passport = "A12345678";
const passportExpiry = "2025-01-01";

(function() {
    'use strict';
    window.addEventListener('load', function() {
        document.getElementById("TicketCollector_Email").value = email;
        document.getElementById("TicketCollector_RepeatedEmail").value = email;
        document.getElementsByClassName("selected-dial-code")[0].innerText = countryCode;
        document.getElementById("country-dialcode").value = phoneNum;
        document.getElementById("Passengers_0__PassengerName").value = name;
        document.getElementById("Passengers_0__PassengerGender").value = gender;
        document.getElementById("Passengers_0__PassengerDateOfBirth").value = dob;
        document.getElementById("Passengers_0__PassengerNationality").value = nationality;
        document.getElementById("Passengers_0__PassengerPassport").value = passport;
        document.getElementById("Passengers_0__PassengerPassportExpiryDate").value = passportExpiry;
        document.getElementById("cbInsuranceLonpacNo").checked = true;
        document.getElementById("btnNoInsurance").click();
        document.getElementById("paymentAllianceBankMPGS").checked = true;
        document.getElementById("AgreeingPolicy").checked = true;
        window.scrollTo(0,document.body.scrollHeight);

        // Captcha still need to be done manually
        var recaptchaChecked = false;
        var itvlId1 = setInterval(function() {
            if (grecaptcha.getResponse().length > 0) {
                clearInterval(itvlId1);
                document.getElementById("payNowBtn").click();

                var itvlId2 = setInterval(function() {
                    if ((document.getElementById("confirmModal").getAttribute("style") == 'display: block;')) {
                        clearInterval(itvlId2);
                        document.getElementById("confirmModalOK").click();
                    }
                }, 10);

            }
        }, 10);
    });
})();