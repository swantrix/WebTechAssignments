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
const changeValueButton =createHTMLElementObject(document.getElementById("footer__customizer__change-value-selector"))

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

let x = 1/0;
console.log(x)

changeButton.htmlElementLink.addEventListener("click", handleChangeSelect);

function handleChangeSelect(){
    let selectedChangeString = changeButton.value;
    switch (selectedChangeString){
        case "color":
            break;
        case "font_size":
            break;
    }

    /*remove previous button and all children
    * add new appropriate button (color selector if user wants to change color,
    * number input if user want to change font size*/
    document.addelement
}


/*required functionality:
-should work on body, header, footer, aside, articles and sections
-should change at least color and font size
*/