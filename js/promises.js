"use strict";

// TODO: Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

// function wait(time) {
//     var timeConverted = time / 1000;
//     if (time <= 1000) {
//         setTimeout(function(){console.log("It's been " + timeConverted + " second."); }, time);
//     } else {
//         setTimeout(function(){console.log("It's been " + timeConverted + " seconds."); }, time);
//     }
// }
// wait(1000);
// wait(3000);

// function wait(time) {
//     return new Promise ( resolve => {
//         setTimeout(() => {
//             resolve();
//         }, time);
//     })
// }
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
//


// TODO: Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made.

// Timestamp format YYYY-MM-DDTHH:MM:SSZ


fetch(`https://api.github.com/users/${gitHub.username}/events/public`, {headers: {'Authorization': 'token ' + gitHub.key}})
    .then(response => response.json())
    .then(data => {
        var time = $(data);
        console.log($(time[0].created_at).selector);
    });



