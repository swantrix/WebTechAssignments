/*an object that represents the change that is selected*/
const currentChange = {
    elementTargetString : undefined, //holds string that represents target element
    changeType : undefined,
    change : undefined,

    applyChanges : function (){
/*
        if (typeof currentChange.elementTarget !== 'undefined' && typeof currentChange.changeType !== 'undefined' && typeof currentChange.change !== 'undefined'){
*/
            switch (this.changeType) {
                case 'color':
                    if (this.elementTargetString == "header") {
                        this.elementTargetString.style.backgroundColor = this.change;
                        console.log("tried to change color")
                        break;
                    }
                    case 'font_size':
                        break
            }
        }
    /*}*/
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
    },

    clearChangeType : function (){
        Object.values(this.changeType).forEach(changeTypeOption => changeTypeOption.classList.add('notViableOption'))
    },

    clearChange : function (){
        Object.values(this.change).forEach(changeOption => changeOption.classList.add('notViableOption'))
    }
}



    let body = document.querySelector("body");
    baseElementCollection = body.children;
    console.log(baseElementCollection);
    let customizerElementTargetSelector = document.getElementById("footer__customizer__element-target-selector");
    let customizerElementChangeTypeSelector = document.getElementById("footer__customizer__change-type-selector");
    let customizerElementChangeSelector = document.getElementById("footer__customizer__change-selector");


/*makes only the options visible that are possible targets on this webpage*/
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
    currentChange.elementTargetString = selectedTargetOption.value;
    console.log(currentChange.elementTargetString + " has been selected by user");

    /*makes all changeType options hidden, except for the ones that are possible given the new element target*/
    options.clearChangeType();

    switch (selectedTargetOption.value){
        case "header":
            options.changeType.color.classList.remove('notViableOption')
            options.changeType.fontSize.classList.remove('notViableOption')

            break;
        case 'footer':
            options.changeType.fontSize.classList.remove('notViableOption')
            options.changeType.color.classList.remove('notViableOption')
            break;
    }
}

customizerElementChangeTypeSelector.addEventListener('input', handleElementChangeTypeSelect)

function handleElementChangeTypeSelect(ev){
    let selectedChangeType = ev.target;
    currentChange.changeType  = selectedChangeType.value;
    console.log(currentChange.changeType + " has been selected by user");

    /*makes all change options hidden, except for the ones that are possible given the new element target*/
   options.clearChange();

    switch (selectedChangeType.value){
        case "color":
            options.change.blue.classList.remove('notViableOption')
            options.change.green.classList.remove('notViableOption')
            options.change.red.classList.remove('notViableOption')
            break;
        case 'font_size':
            options.change.small.classList.remove('notViableOption')
            options.change.medium.classList.remove('notViableOption')
            options.change.large.classList.remove('notViableOption')
            break;
    }
}

customizerElementChangeSelector.addEventListener('input', handleElementChangeSelect)

function handleElementChangeSelect(ev){
    let selectedChange = ev.target;
    currentChange.change = selectedChange.value;
}


/*When user clicks apply, applies the change if all options have selected*/
let applyButton = document.getElementById("footer__customizer__apply-button")
applyButton.addEventListener("click", function (){
    currentChange.applyChanges()
})

/*ideas:
* -change each button to have an array with options
*
* -add none option as standard to fix issue of showing an option, set all to none when you clikc apply
*
* -make it so that the option object actually represents the options (not just a list) and do everything
* to do with the options from withing the object (setting an option automaticly changes other options, for example)
* -*/

/*revamp:
* basic prototype Option object
* selectors are a collection of options
* */