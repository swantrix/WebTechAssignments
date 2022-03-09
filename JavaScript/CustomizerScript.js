/*create a list of all element nodes that  should be customizeable*/
    let body = document.querySelector("body");
    unfilteredNodeCollection = body.children;
    console.log(unfilteredNodeCollection);
    let filteredNodeArray = []; /*holds all nodes that should be targetable*/
    let customizerContainer = document.getElementById("footer__customizer__target-selector");

    let customizerTargetOption
    for (let i = 0; i < unfilteredNodeCollection.length; i++) {
        if (unfilteredNodeCollection.item(i).nodeType === 1){ /*checks if node is an element*/
            let ElementType = unfilteredNodeCollection.item(i).tagName;
            switch (ElementType){
                case "HEADER":
                    console.log("HEADER DETECTED");
                    customizerTargetOption = document.createElement("option");
                    customizerTargetOption.textContent = "header"
                    customizerContainer.appendChild(customizerTargetOption);
                    filteredNodeArray.push(unfilteredNodeCollection.item(i));
                    break;
                case "FOOTER":
                    console.log("FOOTER DETECTED")
                    customizerTargetOption = document.createElement("option");
                    customizerTargetOption.textContent = "footer"
                    customizerContainer.appendChild(customizerTargetOption);
                    filteredNodeArray.push(unfilteredNodeCollection.item(i));
                    break;
            }
        }
    }

/*add <option> html element nodes for each possible target under <select>*/
for (let node of filteredNodeArray){

}


for (let i = 0; i<filteredNodeArray.length; i++){
    let newOption = document.createElement("option");
    newOption.value
    newOption.name
    customizerTargetSelector.appendChild(newOption);
}


/*add functionality to each <option>*/

/*When the user selects any of these options, create a list of all possible customisations*/


/*in the DOM tree, create a <select> with all possible customisations*/


/*When the user selects a customisation, create an appropriate <select> element that allows them to select a value for the customisation (color or font size)*/


/*When user selects this option, apply the changes to the element on this HTML page*/


let selectorMenu = document.getElementsByName("footer-customizer_target_selector-menu")
let applyButton = document.getElementById("footer__customizer__apply-button")
applyButton.addEventListener("click", applyChanges)

/*This function should only be available when*/
function applyChanges(){
    applyButton.style.backgroundColor = "blue"
}

/*old code for practice, remove when i get the other stuff working*/
var mainContent = document.getElementById("Content_main");
var colorSelector = document.getElementById("colorSelector");
colorSelector.querySelector("button");

var japText = document.getElementById("MainHeader");
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
