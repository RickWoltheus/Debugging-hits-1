var today = new Date();
var hourNow = today.getHours();
var greeting;

var welcome  = document.querySelector('h1');
welcome.textContent =  "Welkom bij het lesonderdeel Debugger";

if (hourNow > 18) {
    greeting = 'Goedenavond!';
} else if (hourNow > 12) {
    greeting = 'Goedemiddag!';
} else if (hourNow > 0) {
    greeting = 'Goedemorgen!';
} else {
    greeting = 'Hartelijk welkom!';
}

document.write('<h3>' + greeting + ' ' + welcome.textContent + '</h3>');