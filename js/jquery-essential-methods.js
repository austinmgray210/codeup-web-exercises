"use strict";

// .html()
//   .css()
//     .addClass()
//       .removeClass()
//         .toggleClass()


// ******* Getters and Setters **********

// Getter for text of logo color

function getColorText() {
    // will return a string instide the #colorText span
    return $('#colorText').html();
}
// console.log(getColorText());


// Setter for text of logo color

function setColorText(color) {
    // will set the text to the passed in color, and aso change its CSS color
    return $('#colorText').removeClass(getColorText()).html(color).addClass(color);
}
// console.log(setColorText('purple'));


// Getter for section color

function getSectionColor(section) {
    return $(section).attr('class');
}
// console.log(getSectionColor('#path1'));


// Setter for the section color

function setSectionColor(color, section) {      // change all sections if 'all' is passed in
    if (section === "all") {                    // set all sections to the specified 'color
        resetColor();
        setColorText(color);
        return $('.codeup-logo > path').addClass(color);
    } else {
        $(section).removeClass(getSectionColor(section));       // if individual section is passed in, change its color (used for Rainbow effect)
        return $(section).addClass(color);
    }

}
// setSectionColor('orange', 'all');


// reset all path elements to default, and change the 'color' text in the h2 to 'green'

function resetColor() {
    $('.codeup-logo > path').removeClass( function () {
        return $(this).attr('class');      // $(this) <---- '.codeup-logo > path' elements
    })
}

// write a function called rainbowLogo() that changes the logo to rainbow colors

function rainbowLogo() {
    var text = 'rainbow';
    var logoSections = [ '#path1', '#path2', '#path3', '#path4', '#path5', '#path6'];
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    var counter = 0;

    logoSections.forEach(function (sectionId) {
        setSectionColor(colors[counter], sectionId);
        counter++;
    });

    // split up the 'rainbow' text and make it rainbow
    var colorfulText = [];
    var i = 0;
    counter = 0;
    text.split('').forEach(function (letter) {
        colorfulText[i] = '<span class="' + colors[counter] + '">' + letter + '</span>';
        if (counter === 5) {
            counter = -1;
        }
        counter++; i++;
    });
    text = colorfulText.join(' ');
    // console.log(text);
    return $('#colorText').removeClass(getColorText()).html(text);
}

console.log(rainbowLogo());


// Set a variable called circleClickCount, to keep track of how many times an individual circle has been clicked




// Add a click listener to each of the 'circle' elements at the bottom of the page, and make each color circle

var circleClickCount = 0;
$('.circle').click(function () {
    var clickedColor = $(this).attr('id');

    if (clickedColor === "rainbow") {       // change the logo to the clicked color, or rainbow, if rainbow was clicked
        console.log("Rainbow was clicked");
        resetColor();
        rainbowLogo();
    } else {
        console.log(clickedColor + " was clicked");
        setColorText(clickedColor);
        setSectionColor(clickedColor, 'all');
    }

    // If the same color is clicked twice, toggle the 'caps' class to UPPERCASE and lowercase the color name
});


// *********************** Traversing Methods ********************************* //

// now let's traverse some elements

// .each()   .first()    .last()    .children()    .parent()    .next()

// TODO: Let's give each of the selection circles a 1px black border

$('.circles div').css('border', '1px solid black');

// TODO: Let's take the border away from the first circle

$('.circles div').first().css('border', 'none');

// TODO: Let's make the last circle disappear

$('.circles div').last().hide();

// TODO: Find the children of the circle row, and remove borders from all of them, then unhide the last circle

$('.circles div').css('border', 'none').last().show();

// TODO: while changing the first path element to have a black fill, give its grandparent a light gray background and 10px padding

$('path').first().css('fill', 'black').nextAll().css({
    'fill': 'lightgray',
    'padding': '10px'
});
// TODO: change the second path element to blue, then change the 'next' element to yellow

$('path').first().next().css('fill', 'blue').next().css('fill', 'yellow');

// TODO: What's the difference between changing the class to change the color, and simply changing the color directly?

//  I can no longer use the buttons to change the color of the logo