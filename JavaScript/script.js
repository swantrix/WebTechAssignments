var mainContent = document.getElementById("Content_main");
var colorSelector = document.getElementById("colorSelector");
colorSelector.querySelector("button");

var japText = document.getElementById("MainHeader");
var colorSelector = document.getElementById("colorSelector");
var redButton = document.getElementById("redButton");
var blueButton = document.getElementById("blueButton");
var greenButton = document.getElementById("greenButton");
var colorPreview = document.getElementById("colorPreview");
var japTextDescr = document.getElementById("japTextDescr");
var currentColor = "black"; /*represents the color to be changed to*/


/*go through each button and add a listener that will change the color of the "color picker"*/
redButton.addEventListener("click", setRed)
greenButton.addEventListener("click", setGreen)
blueButton.addEventListener("click", setBlue)

/*event handlers for each button*/
function setRed(){
    currentColor = "red";
    colorPreview.style.backgroundColor = "red";
}

function setBlue(){
    currentColor = "blue";
    colorPreview.style.backgroundColor = "blue";
}

function setGreen(){
    currentColor = "green";
    colorPreview.style.backgroundColor = "green";
}

function makeCustomColor(){
    this.style.color = currentColor;
}

/*make japtext and paragraph of japtext element clickable and change color to "color picker" color*/
japText.addEventListener("click", makeCustomColor)
japTextDescr.addEventListener("click", makeCustomColor)
