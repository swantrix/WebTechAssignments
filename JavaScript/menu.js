class Menu {
    constructor (categories) {
        this.categories = categories; //array of objects of the type Category
    }
}

class Menusection {
    constructor (name, foodItems) {
        this.name = name; //string
        this.foodItems = foodItems; //array of objects of the type Food
    }
}

class Food {
    constructor (name, price, imageLocation) {
        this.name = name; //string
        this.price = price; //double
        this.imageLocation = imageLocation; //string
    }
}

class Sushi extends Food {
    constructor (name, price, imageLocation, numberOfItems, ingredients) {
        super (name, price, imageLocation);
        this.numberOfItems = numberOfItems; //int
        this.ingredients = ingredients; //string
    }
}

class Sashimi extends Sushi {
    constructor (name, price, imageLocation, numberOfItems, ingredients) {
        super (name, price, imageLocation, numberOfItems, ingredients);
    }
}

class Nigiri extends Sushi {
    constructor (name, price, imageLocation, numberOfItems, ingredients, vegetarian) {
        super (name, price, imageLocation, numberOfItems, ingredients);
        this.vegetarian = vegetarian; //bool
    }
}

class Maki extends Sushi {
    constructor (name, price, imageLocation, numberOfItems, ingredients, vegetarian) {
        super (name, price, imageLocation, numberOfItems, ingredients);
        this.vegetarian = vegetarian; //bool
    }
}

class Desserts extends Food {
    constructor (name, price, imageLocation, allergens) {
        super (name, price, imageLocation);
        this.allergens = allergens //string
    }
}

class Drinks extends Food {
    constructor (name, price, imageLocation, volume, alcoholFree) {
        super (name, price, imageLocation);
        this.volume = volume; //string
        this.alcoholFree = alcoholFree //bool
    }
}

//Sashimi objects
var salmonSashimi = new Sashimi("Sake sashimi", 8.50, "sashimi-salmon.jpg", 5, "Salmon");
var tunaSashimi = new Sashimi("Maguro sashimi", 8.50, "sashimi-tuna.jpg", 5, "Tuna");
var salmonTunaSashimi = new Sashimi("Sake and maguro sashimi", 12.50, "salmon-and-tunasashimi.jpg", 8, "Salmon, tuna");

let sashimiObjects = [ salmonSashimi
                     , tunaSashimi
                     , salmonTunaSashimi
                     ];

//Nigiri objects
var salmonNigiri = new Nigiri("Sake nigiri", 2, "sake.jpg", 2, "Salmon, rice", false);
var tunaNigiri = new Nigiri("Maguro nigiri", 2, "maguro.jpg", 2, "Tuna, rice", false);
var shrimpNigiri = new Nigiri("Ebi nigiri", 1.80, "ebi.jpg", 2, "Shrimp, rice", false);
var crabNigiri = new Nigiri("Kani nigiri", 1.60, "kani.jpg", 2, "Surimi (crab), rice, seaweed", false);
var eggNigiri = new Nigiri("Tamago nigiri", 1.60, "tamago-nigiri.jpg", 2, "Tamago (egg omelet), rice, seaweed", true);

let nigiriObjects = [ salmonNigiri
                    , tunaNigiri
                    , shrimpNigiri
                    , crabNigiri
                    , eggNigiri
                    ];

//Maki objects
var kappaMaki = new Maki("Kappa maki", 4.50, "kappa-maki.jpg", 6, "Cucumber, rice, seaweed", true);
var sakeMaki = new Maki("Sake maki", 5.50, "sake-maki.jpg", 6, "Salmon, rice, seaweed", false);
var tekkaMaki = new Maki("Tekka maki", 5.50, "tekka-maki.jpg", 6, "Tuna, rice, seaweed", false);
var avocadoMaki = new Maki("Avocado maki", 4.50, "avocado-maki.jpg", 6, "Avocado, rice, seaweed", true);

let makiObjects = [ kappaMaki
                  , sakeMaki
                  , tekkaMaki
                  , avocadoMaki
                  ];

//Dessert objects
var vanillaIcecream = new Desserts("Vanilla icecream", 2.50, "vanilla-icecream.jpg", "Lactose");
var sesamIcecream = new Desserts("Sesam icecream", 3, "sesam-icecream.jpg", "Lactose");
var greenTeaIcecream = new Desserts("Green tea icecream", 3, "greentea-icecream.jpg", "Lactose");
var assortedFruits = new Desserts("Assorted fruits", 2.60, "fruits.jpg", "")

let dessertObjects = [ vanillaIcecream
                     , sesamIcecream
                     , greenTeaIcecream
                     , assortedFruits
                     ];

//Drink objects
var pepsi = new Drinks("Pepsi", 1.80, "cola.jpg", "330 ml", true);
var sprite = new Drinks("Sprite", 1.80, "sprite.jpg","330 ml", true);
var sake = new Drinks("Sake", 5,"sake-drink.jpg", "330 ml", false);
var kirin = new Drinks("Kirin", 3.50, "kirin.jpg", "330 ml", false);
var sapporo = new Drinks("Sapporo", 3.50, "sapporo.jpg","330ml", false);

let drinkObjects = [ pepsi
                   , sprite
                   , sake
                   , kirin
                   , sapporo
                   ];

var menuPageMain = document.createElement('article');
menuPageMain.classList.add("menu");

var menuHeading = document.createElement('h1');
var menuHeadingText = document.createTextNode('Our menu');
menuHeading.classList.add("menu__header")
menuHeading.appendChild(menuHeadingText);

var menuLinkBox = document.createElement('p');
menuLinkBox.classList.add("menu__menu-links");

function createLinkBoxLink(name, link) {
    var linkAnchor = document.createElement('a');
    var linkText = document.createTextNode(name);
    linkAnchor.setAttribute('href', link);
    linkAnchor.appendChild(linkText);
    linkAnchor.classList.add("menu__link")

    menuLinkBox.appendChild(linkAnchor);
}

createLinkBoxLink("Sashimi", "#sashimi-anchor");
createLinkBoxLink("Nigiri", "#nigiri-anchor");
createLinkBoxLink("Maki", "#maki-anchor");
createLinkBoxLink("Desserts", "#desserts-anchor");
createLinkBoxLink("Drinks", "#drinks-anchor");

menuPageMain.appendChild(menuHeading);
menuPageMain.appendChild(menuLinkBox);

function createCategory(name, id) {
    var categoryHeading = document.createElement('h2');
    var categoryText = document.createTextNode(name);
    categoryHeading.classList.add("menu__category-header")
    categoryHeading.appendChild(categoryText);
    categoryHeading.id = id;
    
    menuPageMain.appendChild(categoryHeading);
}

function createProductGrid() { //werkt nog niet
    var flexDiv = document.createElement('div');
    flexDiv.classList.add("category-flexbox");

    var gridDiv = document.createElement('div');
    gridDiv.classList.add("category-grid");

    //productFunction(gridDiv);

    flexDiv.appendChild(gridDiv);
    menuPageMain.appendchild(flexDiv);
}

function createSashimiGrid(gridDiv) { //werkt nog niet
    var i = 0;
    while (sashimiObjects[i]) {
        var productDiv = document.createElement('div');
        productDiv.classList.add("category-grid__product");
        gridDiv.appendChild(productDiv);

        var imageDiv = document.createElement('div');
        imageDiv.classList.add("category-grid__product-image");

        i++;
    }
}

createCategory("Sashimi", "sashimi-anchor");
//Add Sashimi menu elements
//Ik kan for some reason niets meer toevoegen? Dan verdwijnt alles opeens? Wat mis ik.

createCategory("Nigiri", "nigiri-anchor");
//Add Nigiri menu elements


createCategory("Maki", "maki-anchor");
//Add Maki menu elements


createCategory("Desserts", "desserts-anchor");
//Add Dessert menu elements


createCategory("Drinks", "drinks-anchor");
//Add Drinks menu elements

var contentDivMenu = document.querySelector('#menu-content');
contentDivMenu.appendChild(menuPageMain);

