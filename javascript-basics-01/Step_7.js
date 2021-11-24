let shoe = window.prompt("enter your shoe size please");
let year = window.prompt("enter your birth year please")
function shoeStuff () {
    return (((shoe * 2) + 5) * 50)
}

function yearStuff () {
    return ((shoeStuff() - year) + 1776)
}
alert (yearStuff())