"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let threePlusLanguagesUsers = [];

let threeOrMoreLanguages = users.filter(function (user) {
    if (user.languages.length >= 3) {
        threePlusLanguagesUsers.push(user); // Objects with information
        // threePlusLanguagesUsers.push(user.name) // Array with just names
    }
});
console.log(threePlusLanguagesUsers);

// TODO: Use .map to create an array of strings where each element is a user's email address

let userEmails = [];

let toEmails = users.map(function (userEmail) {
    userEmails.push(userEmail.email);
});
console.log(userEmails);

// TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let totalExp = users.reduce((total, users) => total + users.yearsOfExperience, 0);

console.log(totalExp);

// TODO: Use .reduce to get the longest email from the list of users.

let longestEmail = users.reduce((longest, user) => {
    if (user.email.length > longest.length) {
        longest = user.email;
    }
    return longest;
}, '');
console.log(longestEmail);



// TODO: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.


// // Like saying .forEach
// let longest = users.reduce((longest, user) => {   // Like saying var longest = ''; (value given after } at bottom).
//     console.log(user.email);
//     return user.email;
// }, '');






