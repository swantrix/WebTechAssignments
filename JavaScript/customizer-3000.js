function createHTMLElementObject(htmlElementLink) {
    if (htmlElementLink instanceof Element){
        return {
            htmlElementLink : htmlElementLink,
            color : getComputedStyle(htmlElementLink).getPropertyValue('background-color'),
            fontSize : getComputedStyle(htmlElementLink).getPropertyValue('font-size'),
        };
    }
    return {};
    }

    /*These objects are somewhat volatile. If they do not exist in the current DOM structure, it will be an empty object
    * Also, creates an array for the articles and asides, since there can be multiple*/
const header = createHTMLElementObject(document.querySelector("header"));
const footer = createHTMLElementObject(document.querySelector("footer"));
const body = createHTMLElementObject(document.querySelector("body"));
const main = createHTMLElementObject(document.querySelector("main"));
const aside = createHTMLElementObject(document.querySelector("aside"));
const articleArray = Array.from(document.querySelectorAll("article"))
const sectionArray = Array.from(document.querySelectorAll("section"))

const customizer = createHTMLElementObject(document.querySelector(".footer__customizer"))
const targetButton = createHTMLElementObject(document.getElementById("footer__customizer__element-target-selector"))
const changeButton = createHTMLElementObject(document.getElementById("footer__customizer__change-selector"))
let changeValueButton = undefined; /*will be defined by the time it appears in the DOM*/

/*these represent the object which is currently selected*/
let selectedTarget = undefined;
let selectedChangeString = undefined;
let selectedChangeValue = undefined;

targetButton.htmlElementLink.addEventListener("input", handleTargetSelect);

function handleTargetSelect(){
   let selectedTargetString = targetButton.htmlElementLink.value;

   switch (selectedTargetString){
       case "header" :
           selectedTarget = header;
           break;
       case "footer" :
           selectedTarget = footer;
           break;
       case "body" :
           selectedTarget = body;
           break;
       case "main" :
           selectedTarget = main;
           break;
       case "article" :
           selectedTarget = articleArray;
           break;
       case "section" :
           selectedTarget = sectionArray;
   }
}

/*returns a <div> with all the appropriate children given the chosen change, color or font_size*/
function createChangeValueSelector(change) {
    let changeValueSelectorContainer = document.createElement("div");
    let changeValueSelectorInput = document.createElement("input");
    let changeValueSelectorLabel = document.createElement("label");

    changeValueSelectorContainer.setAttribute("id", "footer__customizer__change-value-selector")

    if (change === "color"){
        changeValueSelectorInput.setAttribute("type", "color")
        changeValueSelectorInput.setAttribute("id", "footer__customizer__change-value-selector--input")
        changeValueSelectorLabel.setAttribute("for", "footer__customizer__change-value-selector--input")
        changeValueSelectorLabel.textContent = "Color: "
    }

    if (change === "font_size"){
        changeValueSelectorInput.setAttribute("type", "number")
        changeValueSelectorInput.setAttribute("id", "footer__customizer__change-value-selector--input")
        changeValueSelectorLabel.setAttribute("for", "footer__customizer__change-value-selector--input")
        changeValueSelectorLabel.textContent = "Font size: "
    }

    changeValueSelectorContainer.appendChild(changeValueSelectorLabel);
    changeValueSelectorContainer.appendChild(changeValueSelectorInput);

    changeValueButton = createHTMLElementObject(changeValueSelectorInput);
    changeValueButton.htmlElementLink.addEventListener("input", handleChangeValueSelect)

    return createHTMLElementObject(changeValueSelectorContainer);
}

changeButton.htmlElementLink.addEventListener("input", handleChangeSelect);

function handleChangeSelect(){
    selectedChangeString = changeButton.htmlElementLink.value

    switch (changeButton.htmlElementLink.value){
        case "color":
            if (!!document.getElementById("footer__customizer__change-value-selector")){
                document.getElementById("footer__customizer__change-value-selector").remove();
            }
            customizer.htmlElementLink.appendChild(createChangeValueSelector("color").htmlElementLink);
            break;
        case "font_size":
            if (!!document.getElementById("footer__customizer__change-value-selector")){
                document.getElementById("footer__customizer__change-value-selector").remove();
            }
            customizer.htmlElementLink.appendChild(createChangeValueSelector("font_size").htmlElementLink);
            break;
    }
}

/*nvm all this, just make the apply button only be at the very end of the flexbox and always visible, set the value to be black at the start and then just read the value whenever you click the apply button*/

function handleChangeValueSelect(){
    selectedChangeValue = changeValueButton.htmlElementLink.value
    customizer.htmlElementLink.appendChild(createApplyButton());
}

/*this function creates a button that can apply the chosen customisation*/
function createApplyButton(){
    let ApplyButton = document.createElement("button")
    ApplyButton.setAttribute("type", "button");
    ApplyButton.setAttribute("id", "footer__customizer__apply-button");
    ApplyButton.setAttribute("value", "apply")
    ApplyButton.textContent = "apply"

    return ApplyButton;
}

/*provides default options when the page loads, this should be at the end. */
targetButton.htmlElementLink.value = "header";
handleTargetSelect();
changeButton.htmlElementLink.value = "color";
handleChangeSelect();

/*required functionality:
-should work on body, header, footer, aside, articles and sections
-should change at least color and font size
*/

/*TO DO:
* haal ID's weg bij footer customizer containers, behalve als ze gebruikt worden*/