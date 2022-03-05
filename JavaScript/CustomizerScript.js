/*create a list of all element nodes that  should be customizeable*/
    let body = document.querySelector("body");
    unfilteredNodeCollection = body.children;
    console.log(unfilteredNodeCollection);
    let filteredNodeArray = [];

    for (let i = 0; i < unfilteredNodeCollection.length; i++) {
        if (unfilteredNodeCollection.item(i).nodeType === 1){ /*checks if node is an element*/
            let ElementType = unfilteredNodeCollection.item(i).tagName;
            switch (ElementType){
                case "HEADER":
                    console.log("HEADER DETECTED");
                    filteredNodeArray.push(unfilteredNodeCollection.item(i));
                    break;
                case "FOOTER":
                    console.log("FOOTER DETECTED")
                    filteredNodeArray.push(unfilteredNodeCollection.item(i));
                    break;
            }
        }

    }


/*in the DOM tree, create a <select> with all the customizable elements represented by an <option>, and add a listener with suitable function*/
var customizerContainer = document.getElementById("footer-customizer-container");


/*When the user selects any of these options, create a list of all possible customisations*/


/*in the DOM tree, create a <select> with all possible customisations*/


/*When the user selects a customisation, create an appropriate <select> element that allows them to select a value for the customisation (color or font size)*/


/*When user selects this option, apply the changes to the element on this HTML page*/


var selectorMenu = document.getElementsByName("footer-customizer_target_selector-menu")
var applyButton = document.getElementById("applyButton")
applyButton.addEventListener("click", applyChanges)

/*This function should only be available when */
function applyChanges(){
    applyButton.style.backgroundColor = "blue"
}



/*old code for practice, remove when i get the other stuff working*/
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
