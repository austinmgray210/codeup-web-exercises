"use strict";



$(document).ready(function() {
    var codes = {
        konamiCode: "38 38 40 40 37 39 37 39 66 65 13",
        userFinalCode: ""
    };
    var userInput = [];
    var userCode = userInput;
    var userInputLength = 0;
    var cheatsActivated = 0;

    $(document).keyup(function (event) {

        if (cheatsActivated === 0) {
            userInput.push(event.keyCode);
            userInputLength++;
        } if (userInputLength === 11) {
            codes.userFinalCode = userInput.toString().split(",").join(" ");
            return cheatChecker();
        }
    });

    function cheatChecker(userCode) {

        if (codes.konamiCode === codes.userFinalCode) {
            alert("You have added 30 lives");
            cheatsActivated += 1;
            userInputLength = 0;
            codes.userFinalCode = "";
        } else {
            alert("The Princess Is In Another Castle!");
            console.log(userCode);
            userInputLength = 0;
            codes.userFinalCode = "";
        }
    }
});



