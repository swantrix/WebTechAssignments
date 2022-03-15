function createHTMLElement(htmlElementLink) {
    if (htmlElementLink instanceof Element){
        return {
            htmlElementLink: htmlElementLink,
            color : getComputedStyle(htmlElementLink).getPropertyValue('background-color'),
            fontSize : getComputedStyle(htmlElementLink).getPropertyValue('font-size'),
        };
    }
    return {};
    }

    /*These elements are somewhat volatile. If they do not exist in the current DOM structure, it will be an empty object
    * Also, creates an array for the articles and asides, since there can be multiple*/
const header = createHTMLElement(document.querySelector("header"));
const body = createHTMLElement(document.querySelector("body"));
const main = createHTMLElement(document.querySelector("main"));
const aside = createHTMLElement(document.querySelector("aside"));
const customizer = createHTMLElement(document.querySelector(".footer__customizer"))

const articleArray = Array.from(document.querySelectorAll("article"))

const sectionArray = Array.from(document.querySelectorAll("section"))



    /*{
    add to customizer:

    htmlElement : undefined,
    options : {
        targetButton : {
            htmlElement : undefined
        },
        changeButton : {
            htmlElement : undefined
        },
        changeValueButton : {
            htmlElement : undefined
        }
    },
    color : undefined,
    fontSize : undefined
}*/



/*required functionality:
-should work on body, header, footer, aside, articles and sections
-should change at least color and font size
*/