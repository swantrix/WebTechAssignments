const header = document.querySelector("header");
const footer = document.querySelector("footer");
const body = document.querySelector("body");
const main = document.querySelector("main");
const aside = document.querySelector("aside");
const articleArray = document.querySelectorAll("article");
const sectionArray = document.querySelectorAll("section");

const customizer = document.querySelector(".footer__customizer")
const targetButton = document.getElementById("footer__customizer__element-target-selector")
const changeButton = document.getElementById("footer__customizer__change-selector")
const applyButton = document.getElementById("footer__customizer__apply-button");
let changeValueButton = undefined; /*will be defined by the time it appears in the DOM*/


/*these represent the object which is currently selected*/
let selectedTarget = undefined;
let selectedChangeString = undefined;
let selectedChangeValue = undefined;

/*creates possible target options*/

    /*checks if Target Option already exists and if not, creates it.*/
    function createTargetOption(targetString){
        let alreadyExist = false;
        let targetSelectorChildren = document.getElementById("footer__customizer__element-target-selector").children
        for (let item = 0; item < targetSelectorChildren.length; item++){
            if (targetSelectorChildren[item].innerText === targetString){
                alreadyExist = true;
            }
        }

        if (!alreadyExist){
            let targetOption = document.createElement("option");
            targetOption.setAttribute("value", targetString)
            targetOption.innerText = targetString;
            targetButton.appendChild(targetOption);
        }
    }

    /*since body always exists, always creating this option is safe*/
    createTargetOption("body")

    function optionCreator(toCheck){
        /*1 check to see if this is an element
        2 if true, check if it is one of the possible targets
        3 if true, create appropriate button (checking whether or not the option already exists happens in createTargetOption())*/
        if (toCheck instanceof Element){
            switch (toCheck.tagName){
                case "HEADER":
                    createTargetOption("header")
                    break;
                case "FOOTER":
                    createTargetOption("footer")
                    break;
                case "MAIN":
                    createTargetOption("main")
                    break;
                case "ASIDE":
                    createTargetOption("aside")
                    break;
                case "ARTICLE":
                    createTargetOption("article")
                    break;
                case "SECTION":
                    createTargetOption("section")
                    break;
                default: return;
            }
        }
    }

    body.querySelectorAll("*").forEach(x => optionCreator(x))


targetButton.addEventListener("input", handleTargetSelect);

function handleTargetSelect(){
   let selectedTargetString = targetButton.value;

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

    changeValueButton = changeValueSelectorInput;
    changeValueButton.addEventListener("input", handleChangeValueSelect)

    return changeValueSelectorContainer;
}


/*functionality for the change selector*/
changeButton.addEventListener("input", handleChangeSelect);

function handleChangeSelect(){
    selectedChangeString = changeButton.value

    switch (changeButton.value){
        case "background_color":
            if (!!document.getElementById("footer__customizer__change-value-selector")){
                document.getElementById("footer__customizer__change-value-selector").remove()
            }
            customizer.insertBefore(createChangeValueSelector("background_color"), applyButton)
            break;
        case "text_color":
            if (!!document.getElementById("footer__customizer__change-value-selector")){
                document.getElementById("footer__customizer__change-value-selector").remove();
            }
            customizer.insertBefore(createChangeValueSelector("text_color"), applyButton)
            break;
        case "font_size":
            if (!!document.getElementById("footer__customizer__change-value-selector")){
                document.getElementById("footer__customizer__change-value-selector").remove();
            }
            customizer.insertBefore(createChangeValueSelector("font_size"), applyButton)
            break;

    }
}

/*functionality for the change value selector*/
function handleChangeValueSelect(){
    selectedChangeValue = changeValueButton.value
}


/*functionality for the apply button*/
applyButton.addEventListener("click", applyChange)

function applyChange(){
    if (selectedChangeString === "text_color"){
        if (selectedTarget === articleArray || selectedTarget === sectionArray){
            selectedTarget.forEach(x => x.style.color = selectedChangeValue)
            selectedTarget.forEach(x => x.querySelectorAll("*").forEach(x => x.style.color = selectedChangeValue));
        }
        else selectedTarget.style.color = selectedChangeValue;
        selectedTarget.querySelectorAll("*").forEach(x => x.style.color = selectedChangeValue);
    }

    if (selectedChangeString === "background_color"){
        if (selectedTarget === articleArray || selectedTarget === sectionArray){
            selectedTarget.forEach(x => x.style.backgroundColor = selectedChangeValue)
        }
        else selectedTarget.style.backgroundColor = selectedChangeValue;
    }

    if (selectedChangeString === "font_size"){
        if (selectedTarget === articleArray || selectedTarget === sectionArray){
            selectedTarget.forEach(x => x.style.fontSize = selectedChangeValue + "px");
        } else
            selectedTarget.style.fontSize = selectedChangeValue + "px";
    }
}


/*provides default options when the page loads*/
targetButton.value = "header";
handleTargetSelect();
changeButton.value = "text_color";
handleChangeSelect();
changeButton.value = "#000000";
handleChangeValueSelect();
