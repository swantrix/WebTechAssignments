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
    * Also, creates a nodelist for the articles and asides, since there can be multiple*/
const header = createHTMLElementObject(document.querySelector("header"));
const footer = createHTMLElementObject(document.querySelector("footer"));
const body = createHTMLElementObject(document.querySelector("body"));
const main = createHTMLElementObject(document.querySelector("main"));
const aside = createHTMLElementObject(document.querySelector("aside"));
const articleArray = document.querySelectorAll("article");
const sectionArray = document.querySelectorAll("section");

const customizer = createHTMLElementObject(document.querySelector(".footer__customizer"))
const targetButton = createHTMLElementObject(document.getElementById("footer__customizer__element-target-selector"))
const changeButton = createHTMLElementObject(document.getElementById("footer__customizer__change-selector"))
const applyButton = createHTMLElementObject(document.getElementById("footer__customizer__apply-button"));
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
           break;
       case "aside":
           selectedTarget = aside;
           break;
   }
}

/*returns a <div> with all the appropriate children given the chosen change: background_color, text_color or font_size*/
function createChangeValueSelector(change) {
    let changeValueSelectorContainer = document.createElement("div");
    let changeValueSelectorInput = document.createElement("input");
    let changeValueSelectorLabel = document.createElement("label");

    changeValueSelectorContainer.setAttribute("id", "footer__customizer__change-value-selector")

    if (change === "background_color"){
        changeValueSelectorInput.setAttribute("type", "color")
        changeValueSelectorInput.setAttribute("id", "footer__customizer__change-value-selector--input")
        changeValueSelectorLabel.setAttribute("for", "footer__customizer__change-value-selector--input")
        changeValueSelectorLabel.textContent = "Background color: "
    }

    if (change === "text_color"){
        changeValueSelectorInput.setAttribute("type", "color")
        changeValueSelectorInput.setAttribute("id", "footer__customizer__change-value-selector--input")
        changeValueSelectorLabel.setAttribute("for", "footer__customizer__change-value-selector--input")
        changeValueSelectorLabel.textContent = "Text color: "
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

/*functionality for the change selector*/
changeButton.htmlElementLink.addEventListener("input", handleChangeSelect);

function handleChangeSelect(){
    selectedChangeString = changeButton.htmlElementLink.value

    switch (changeButton.htmlElementLink.value){
        case "background_color":
            if (!!document.getElementById("footer__customizer__change-value-selector")){
                document.getElementById("footer__customizer__change-value-selector").remove()
            }
            customizer.htmlElementLink.insertBefore(createChangeValueSelector("background_color").htmlElementLink, applyButton.htmlElementLink)
            break;
        case "text_color":
            if (!!document.getElementById("footer__customizer__change-value-selector")){
                document.getElementById("footer__customizer__change-value-selector").remove();
            }
            customizer.htmlElementLink.insertBefore(createChangeValueSelector("text_color").htmlElementLink, applyButton.htmlElementLink)
            break;
        case "font_size":
            if (!!document.getElementById("footer__customizer__change-value-selector")){
                document.getElementById("footer__customizer__change-value-selector").remove();
            }
            customizer.htmlElementLink.insertBefore(createChangeValueSelector("font_size").htmlElementLink, applyButton.htmlElementLink)
            break;

    }
}

/*functionality for the change value selector*/
function handleChangeValueSelect(){
    selectedChangeValue = changeValueButton.htmlElementLink.value
}

/*functionality for the apply button*/
applyButton.htmlElementLink.addEventListener("click", applyChange)

function applyChange(){
    if (selectedChangeString === "text_color"){
        if (selectedTarget === articleArray || selectedTarget === sectionArray){
            selectedTarget.forEach(x => x.style.color = selectedChangeValue)
            selectedTarget.forEach(x => x.querySelectorAll("*").forEach(x => x.style.color = selectedChangeValue));
        }
        else selectedTarget.htmlElementLink.style.color = selectedChangeValue;
        selectedTarget.htmlElementLink.querySelectorAll("*").forEach(x => x.style.color = selectedChangeValue);
    }

    if (selectedChangeString === "background_color"){
        if (selectedTarget === articleArray || selectedTarget === sectionArray){
            selectedTarget.forEach(x => x.style.backgroundColor = selectedChangeValue)
        }
        else selectedTarget.htmlElementLink.style.backgroundColor = selectedChangeValue;
    }

    if (selectedChangeString === "font_size"){
        if (selectedTarget === articleArray || selectedTarget === sectionArray){
            selectedTarget.forEach(x => x.style.fontSize = selectedChangeValue + "px");
        } else
            selectedTarget.htmlElementLink.style.fontSize = selectedChangeValue + "px";
    }
}

/*provides default options when the page loads*/
targetButton.htmlElementLink.value = "header";
handleTargetSelect();
changeButton.htmlElementLink.value = "text_color";
handleChangeSelect();
changeButton.htmlElementLink.value = "#000000";
handleChangeValueSelect();
