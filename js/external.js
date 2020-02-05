"use strict";

/* JavaScript with HTML exercise */

console.log("Hello from external javascript");

alert("Welcome to my Website!");

var userResponse = prompt("What's your favorite color?");
alert("Great, " + userResponse + " is my favorite color too.");


/* Part 2 using Working with data types exercise
 * When the exercise asks you to use a number, instead use
 * a prompt to ask the user for that number.
 * Use an alert to show the results of each problem. */


/* exercise one: You have rented some movies for your kids:
 * The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
 * and Hercules (1 day, you don't know yet if they're going to like it).
 * If price for a movie per day is $3, how much will you have to pay? */

var littleMermaidRentalDays = prompt("How many days do you want to rent The Little Mermaid for?");
var brotherBearRentalDays = prompt("How many days do you want to rent Brother Bear for?");
var herculesRentalDays = prompt("How many days do you want to rent Hercules for?");
var totalPrice = (parseFloat(littleMermaidRentalDays) + parseFloat(brotherBearRentalDays) + parseFloat(herculesRentalDays)) *3 ;
alert("The price of each movie is $3 a day");
alert("Your total at checkout will be $" + totalPrice.toFixed(2)) ;



/* Exercise two: Suppose you're working as a contractor for 3 companies: Google, Amazon
 * and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380,
 * and Facebook $350. How much will you receive in payment for this week? You worked
 * 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon. */


var googlePay = prompt("How much is Google paying you per hour?");
var googleHours = prompt("How many hours did you work with Google this week?");
var amazonPay = prompt("How much is Amazon paying you per hour?");
var amazonHours = prompt("How many hours did you work with Amazon this week?");
var facebookPay = prompt("How much is Facebook paying you per hour?");
var facebookHours = prompt("How many hours did you work with Facebook this week?");

var googlePayCalculated = parseFloat(googlePay) * parseFloat(googleHours);
var amazonPayCalculated = parseFloat(amazonPay) * parseFloat(amazonHours);
var facebookPayCalculated = parseFloat(facebookPay) * parseFloat(facebookHours);

var totalPayForWeek = googlePayCalculated + amazonPayCalculated + facebookPayCalculated;
alert("Your paycheck for this week will be $" + totalPayForWeek.toFixed(2));



/* A student can be enrolled in a class only if the class is not full and the class schedule
 * does not conflict with her current schedule. */

var classIsFull = confirm("Is the class full?");
var scheduleConflict = confirm("Would your schedule conflict with class hours?");

    if (classIsFull === false && scheduleConflict === false) {
        alert("Congratulations! You can enroll.");
    } else {
        alert("We're sorry, You cannot enroll.");
    }

/* A product offer can be applied only if a person buys more than 2 items, and the offer
 * has not expired. Premium members do not need to buy a specific amount of products. */

var isMemberPremium = window.confirm("Are you a Premium member?");
var numberOfItems = prompt("How many items are you purchasing today?");
var isOfferExpired = window.confirm("Is the offer expired?");

console.log(isMemberPremium);
console.log(parseFloat(numberOfItems));
console.log(isOfferExpired);

if ((isMemberPremium === true || numberOfItems > 5) && isOfferExpired === false) {
    alert("Discount will be applied");
} else {
    alert("Discount will not be applied");
}


/* username = 'codeup'
 * password = 'notastrongpassword'
 *
 * Create a variable that holds a boolean value for each of the following conditions:
 * the password must be at least 5 characters
 * the password must not include the username
 * the username must be no more than 20 characters
 * neither the username or password can start or end with whitespace */

var username = prompt("Please enter your login username.");
var password = prompt("Please enter your login password.");


if (password.length >= 5 && username.includes(password) === false && username.length <= 20 && (password.trim() === password) && (username.trim() === username)) {
    alert("Welcome!");
} else {
    alert("I don't know who you are");
}

