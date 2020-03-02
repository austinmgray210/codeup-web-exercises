"use strict";

// SOURCE ALL FROM BONUS EXERCISES DAVID SENT OUT //

(function() {

// When a user hits the "g" key, the background of the page should turn purple.

var runEvent = 0;

function changeBackgroundColor(){
    document.addEventListener("keyup", function (ev) {
        var isGPressed = "";
        isGPressed = document.onkeyup;
            console.log(isGPressed);
        }
            // function isGPressed(e) {
            //     var whatKeyWasPressed = e.key;
            //     console.log(whatKeyWasPressed);
            //     if (whatKeyWasPressed === "g") {
            //         document.getElementById("changeBackground").css("background-color", "purple");
            //     }
            // }
        )};
changeBackgroundColor(runEvent);







// Every time the enter key is pressed, increment and display a counter that shows the total number of times the enter key has been pressed.





// When someone types 1, 2, 3 in a row, show an alert that says "You get a 50% discount!".




})();
