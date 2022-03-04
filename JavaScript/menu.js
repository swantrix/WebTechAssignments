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
menuPageMain.classList.add("menuPage");

var menuHeading = document.createElement('h1');
var menuHeadingText = document.createTextNode('Our menu');
menuHeading.classList.add("menuPage-header")
menuHeading.appendChild(menuHeadingText);

var menuLinkBox = document.createElement('p');
menuLinkBox.classList.add("menuPage-linkbox");

function createLinkBoxLink(name, link) {
    var linkAnchor = document.createElement('a');
    var linkText = document.createTextNode(name);
    linkAnchor.setAttribute('href', link);
    linkAnchor.appendChild(linkText);
    linkAnchor.classList.add('menuPage-linkbox__links')

    menuLinkBox.appendChild(linkAnchor);
}

createLinkBoxLink("Sashimi", "#sashimiAnchor");
createLinkBoxLink("Nigiri", "#nigiriAnchor");
createLinkBoxLink("Maki", "#makiAnchor");
createLinkBoxLink("Desserts", "#dessertsAnchor");
createLinkBoxLink("Drinks", "#drinksAnchor");

menuPageMain.appendChild(menuHeading);
menuPageMain.appendChild(menuLinkBox);

function createCategory (name, id) {
    var categoryHeading = document.createElement('h3');
    var categoryText = document.createTextNode(name);
    categoryHeading.appendChild(categoryText);
    categoryHeading.id = id;
    
    menuPageMain.appendChild(categoryHeading);
}

createCategory("Sashimi", "sashimiAnchor");
createCategory("Nigiri", "nigiriAnchor");
createCategory("Maki", "makiAnchor");
createCategory("Desserts", "dessertsAnchor");
createCategory("Drinks", "drinksAnchor");

var contentDivMenu = document.querySelector('#menu-content');
contentDivMenu.appendChild(menuPageMain);

