// ==UserScript==
// @name         SelectBus
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       zqtay
// @match        https://vtl.causewaylink.com.my/bus/booking/queenstreetbusterminal-to-johorbahrujblarkinterm?departdate=*
// @icon         none
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function reloadBus() {
        var itvlId1 = setInterval(function() {
            if (document.readyState === "complete") {
                clearInterval(itvlId1);
                if(checkBus()) {
                    selectBus();
                } else {
                    var timeDelay = Math.floor((Math.random()*1500) + 5000);
                    console.log(timeDelay);
                    setTimeout(()=>{location.reload()}, timeDelay);
                }
            }
        }, 10);
    }

    function checkBus() {
        if (document.querySelector(".result-list .btn[data-seatleft]") == null) {
            return false;
        }
        else {
            return true;
        }
    }

    function selectBus() {
        document.querySelector(".result-list .btn[data-seatleft]").click();
        var itvlId2 = setInterval(function() {
            if (document.getElementsByClassName("form-control seat-select").length > 0) {
                clearInterval(itvlId2);
                document.getElementsByClassName("form-control seat-select")[0].value = '1';
                document.querySelector(".form-control option[selected]").value = '1';
                document.getElementById("hdnSelectedDepartTripSeatList").value = 'X';
                document.getElementById("btnProceedToPassengerDetail").click();
            }
        }, 10);
    }
    reloadBus();
})();