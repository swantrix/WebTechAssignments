/*an object that represents the change that is selected*/
const currentChange = {
    elementTarget : undefined, //holds target element
    changeType : undefined,
    change : undefined,

    applyChanges : function (){
        if (typeof currentChange.elementTarget !== 'undefined' && typeof currentChange.changeType !== 'undefined' && typeof currentChange.change !== 'undefined'){
            switch (this.changeType) {
                case 'color':
                    this.elementTarget.style.backgroundColor = this.change;
                    break;
                case 'font_size':
                    break
            }


        }

    }
}

/*creates an object that includes all html options elements for ease of use in code*/
const options = {
    target : {
        header : document.querySelector("option[value='header']"),
        footer : document.querySelector("option[value='footer']")
    },
    changeType : {
        color : document.querySelector("option[value='color']"),
        fontSize : document.querySelector("option[value='font_size']")
    },
    change : {
        blue : document.querySelector("option[value='blue']"),
        red : document.querySelector("option[value='red']"),
        green : document.querySelector("option[value='green']"),
        small : document.querySelector("option[value='small']"),
        medium : document.querySelector("option[value='medium']"),
        large : document.querySelector("option[value='large']"),
    }
}



/*create a list of all element nodes that  should be customizeable*/
    let body = document.querySelector("body");
    baseElementCollection = body.children;
    console.log(baseElementCollection);
    let customizerElementTargetSelector = document.getElementById("footer__customizer__element-target-selector");

for (let i = 0; i < baseElementCollection.length; i++) {
        if (baseElementCollection.item(i).nodeType === 1){ /*checks if node is an element*/
            let ElementType = baseElementCollection.item(i).tagName;
            switch (ElementType){
                case "HEADER":
                    console.log("HEADER DETECTED");
                    options.target.header.classList.remove('notViableOption')
                    break;

                case "FOOTER":
                    console.log("FOOTER DETECTED")
                    options.target.footer.classList.remove('notViableOption')
                    break;
            }
        }
    }

/*enables footer__customizer__element-target-selector to change the targeted element*/
customizerElementTargetSelector.addEventListener('input', handleElementTargetSelect)

function handleElementTargetSelect(ev){
    let selectedTargetOption = ev.target; //target is now the element that has been selected by the user
    currentChange.elementTarget = selectedTargetOption.value;
    console.log(currentChange.elementTarget + " has been selected by user");

    /*makes all changeType options hidden, except for the ones that are possible given the new element target*/
    options.changeType.color.classList.add('notViableOption')
    options.changeType.fontSize.classList.add('notViableOption')

    switch (selectedTargetOption.value){
        case "header":
            options.changeType.color.classList.remove('notViableOption')
            break;
        case 'footer':
            options.changeType.fontSize.classList.remove('notViableOption')
            break;
    }
}


/*When user clicks apply, applies the change if all options have selected*/
let applyButton = document.getElementById("footer__customizer__apply-button")
applyButton.addEventListener("click", currentChange.applyChanges)