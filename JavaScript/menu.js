//Menu item classes
class Menu {
    constructor (categories) {
        this.categories = categories; //array of objects of the type Category
    }
}

class Menusection { //Nog niet helemaal duidelijk waar deze dan voor nodig zijn?
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
var salmonSashimi = new Sashimi("Sake sashimi", "8.50", "sashimi-salmon.jpg", 5, "Salmon");
var tunaSashimi = new Sashimi("Maguro sashimi", "8.50", "sashimi-tuna.jpg", 5, "Tuna");
var salmonTunaSashimi = new Sashimi("Sake and maguro sashimi", "12.50", "salmon-and-tunasashimi.jpg", 8, "Salmon, tuna");

let sashimiMenuSection = new Menusection("Sashimi", [salmonSashimi, tunaSashimi, salmonTunaSashimi]); 

//Nigiri objects
var salmonNigiri = new Nigiri("Sake nigiri", "2.00", "sake.jpg", 2, "Salmon, rice", false);
var tunaNigiri = new Nigiri("Maguro nigiri", "2.00", "maguro.jpg", 2, "Tuna, rice", false);
var shrimpNigiri = new Nigiri("Ebi nigiri", "1.80", "ebi.jpg", 2, "Shrimp, rice", false);
var crabNigiri = new Nigiri("Kani nigiri", "1.60", "kani.jpg", 2, "Surimi (crab), rice, seaweed", false);
var eggNigiri = new Nigiri("Tamago nigiri", "1.60", "tamago-nigiri.jpg", 2, "Tamago (egg omelet), rice, seaweed", true);

let nigiriMenuSection = new Menusection("Nigiri", [salmonNigiri, tunaNigiri, shrimpNigiri, crabNigiri, eggNigiri]);

//Maki objects
var kappaMaki = new Maki("Kappa maki", "4.50", "kappa-maki.jpg", 6, "Cucumber, rice, seaweed", true);
var sakeMaki = new Maki("Sake maki", "5.50", "sake-maki.jpg", 6, "Salmon, rice, seaweed", false);
var tekkaMaki = new Maki("Tekka maki", "5.50", "tekka-maki.jpg", 6, "Tuna, rice, seaweed", false);
var avocadoMaki = new Maki("Avocado maki", "4.50", "avocado-maki.jpg", 6, "Avocado, rice, seaweed", true);

let makiMenuSection = new Menusection("Maki", [kappaMaki, sakeMaki, tekkaMaki, avocadoMaki]);

//Dessert objects
var vanillaIcecream = new Desserts("Vanilla icecream", "2.50", "vanilla-icecream.jpg", "Lactose");
var sesamIcecream = new Desserts("Sesam icecream", "3.00", "sesam-icecream.jpg", "Lactose");
var greenTeaIcecream = new Desserts("Green tea icecream", "3.00", "greentea-icecream.jpg", "Lactose");
var assortedFruits = new Desserts("Assorted fruits", "2.60", "fruits.jpg", "")

let dessertMenuSection = new Menusection("Desserts", [vanillaIcecream, sesamIcecream, greenTeaIcecream, assortedFruits]);

//Drink objects
var pepsi = new Drinks("Pepsi", "1.80", "cola.jpg", "330 ml", true);
var sprite = new Drinks("Sprite", "1.80", "sprite.jpg","330 ml", true);
var sake = new Drinks("Sake", "5.00","sake-drink.jpg", "330 ml", false);
var kirin = new Drinks("Kirin", "3.50", "kirin.jpg", "330 ml", false);
var sapporo = new Drinks("Sapporo", "3.50", "sapporo.jpg","330ml", false);

let drinksMenuSection = new Menusection("Drinks", [pepsi, sprite, sake, kirin, sapporo]);

//Menu
let fullMenu = new Menu([sashimiMenuSection, nigiriMenuSection, makiMenuSection, dessertMenuSection, drinksMenuSection]);


//Functions needed to create the webpage layout
function createLinkBoxLink(name, link) {
    var linkAnchor = document.createElement('a');
    var linkText = document.createTextNode(name);
    linkAnchor.setAttribute('href', link);
    linkAnchor.appendChild(linkText);
    linkAnchor.classList.add("menu__link")

    menuLinkBox.appendChild(linkAnchor);
}

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
    flexDiv.classList.add("category-container");

    var gridDiv = document.createElement('div');
    gridDiv.classList.add("category-container__category-grid");
    flexDiv.appendChild(gridDiv);

    menuPageMain.appendChild(flexDiv);

    return gridDiv;
}

function createSashimiGrid(gridDiv) { //werkt nog niet
    var i = 0;
    while (sashimiMenuSection.foodItems[i]) {
        let sashimiObject = sashimiMenuSection.foodItems[i];
        
        //Creating product container
        var productDisplay = document.createElement('article');
        productDisplay.classList.add("category-grid__product");
        
        //Adding product heading
        var productHeading = document.createElement('h1');
        var productHeadingText = document.createTextNode(sashimiObject.name + itemNumberString(sashimiObject.numberOfItems));
        productHeading.classList.add("product__header")
        productHeading.appendChild(productHeadingText);
        productDisplay.appendChild(productHeading);

        //Adding product information and image
        var productImage = createImage(sashimiObject);

        var productDesc = document.createElement('p');
        var productDescText = document.createTextNode("Ingredients: " + sashimiObject.ingredients);
        productDesc.appendChild(productDescText);
        var productPrice = document.createElement('p');
        var productPriceText = document.createTextNode("Price: €" + sashimiObject.price);
        productPrice.appendChild(productPriceText);

        var productDiv = document.createElement('div');
        productDiv.appendChild(productImage);
        productDiv.appendChild(productDesc);
        productDiv.appendChild(productPrice);

        productDisplay.appendChild(productDiv);

        //Adding item manipulation


        gridDiv.appendChild(productDisplay);

        i++;
    }
}

function createNigiriOrMakiGrid(gridDiv, productObjects) {
    var i = 0;
    while (productObjects.foodItems[i]) {
        let productObject = productObjects.foodItems[i];
        
        //Creating product container
        var productDisplay = document.createElement('article');
        productDisplay.classList.add("category-grid__product");
        
        //Adding product heading
        var productHeading = document.createElement('h1');
        var productHeadingText = document.createTextNode(productObject.name + itemNumberString(productObject.numberOfItems));
        productHeading.classList.add("product__header")
        productHeading.appendChild(productHeadingText);
        productDisplay.appendChild(productHeading);

        //Adding product information and image
        var productImage = createImage(productObject);

        var productDesc = document.createElement('p');
        var productDescText = document.createTextNode("Ingredients: " + productObject.ingredients);
        productDesc.appendChild(productDescText);
        var productPrice = document.createElement('p');
        var productPriceText = document.createTextNode("Price: €" + productObject.price);
        productPrice.appendChild(productPriceText);

        var productDiv = document.createElement('div');
        productDiv.appendChild(productImage);
        productDiv.appendChild(productDesc);

        if (productObject.vegetarian) {
            var vegetarian = document.createElement('p');
            var vegetarianText = document.createTextNode("Vegetarian");
            vegetarian.appendChild(vegetarianText);
            productDiv.appendChild(vegetarian);
        }

        productDiv.appendChild(productPrice);

        productDisplay.appendChild(productDiv);

        //Adding item manipulation


        gridDiv.appendChild(productDisplay);

        i++;
    }
}

function createDessertsGrid(gridDiv) {

}

function createDrinksGrid(gridDiv) {
    
}

function itemNumberString(numberOfItems) {
    return " (" + numberOfItems + " PCS)";
}

function imageSource(image) {
    return "../images/" + image;
}

function createImage(productObject) {
    var productImage = document.createElement('img');
    productImage.setAttribute("src", imageSource(productObject.imageLocation));
    productImage.setAttribute("alt", productObject.name);
    productImage.classList.add("product__image");
    return productImage;
}

//Creating the actual webpage
var menuPageMain = document.createElement('article');
menuPageMain.classList.add("menu");

var menuHeading = document.createElement('h1');
var menuHeadingText = document.createTextNode('Our menu');
menuHeading.classList.add("menu__header")
menuHeading.appendChild(menuHeadingText);

var menuLinkBox = document.createElement('p');
menuLinkBox.classList.add("menu__menu-links");

createLinkBoxLink("Sashimi", "#sashimi-anchor");
createLinkBoxLink("Nigiri", "#nigiri-anchor");
createLinkBoxLink("Maki", "#maki-anchor");
createLinkBoxLink("Desserts", "#desserts-anchor");
createLinkBoxLink("Drinks", "#drinks-anchor");

menuPageMain.appendChild(menuHeading);
menuPageMain.appendChild(menuLinkBox);

createCategory("Sashimi", "sashimi-anchor");
//Add Sashimi menu elements
let sashimiGridDiv = createProductGrid();
createSashimiGrid(sashimiGridDiv);

createCategory("Nigiri", "nigiri-anchor");
//Add Nigiri menu elements
let nigiriGridDiv = createProductGrid();
createNigiriOrMakiGrid(nigiriGridDiv, nigiriMenuSection);

createCategory("Maki", "maki-anchor");
//Add Maki menu elements
let makiGridDiv = createProductGrid();
createNigiriOrMakiGrid(makiGridDiv, makiMenuSection);

createCategory("Desserts", "desserts-anchor");
//Add Dessert menu elements
let dessertsGridDiv = createProductGrid();
createDessertsGrid(dessertsGridDiv);

createCategory("Drinks", "drinks-anchor");
//Add Drinks menu elements
let drinksGridDiv = createProductGrid();
createDrinksGrid(drinksGridDiv);

//var contentDivMenu = document.querySelector('#menu-content');
//contentDivMenu.appendChild(menuPageMain);

//Cart layout
var cartMain = document.createElement('section');
cartMain.setAttribute("id", "cart-section");

var cartTitle = document.createElement('h1');
cartTitle.setAttribute("id", "cart-title");
var cartTitleText = document.createTextNode('Your cart:');
cartTitle.appendChild(cartTitleText);
cartMain.appendChild(cartTitle);

var cartOrderTable = document.createElement('table');
cartOrderTable.setAttribute("id", "cart-table");
cartMain.appendChild(cartOrderTable);

//Fixed header row 
var fixedHeaderRow = document.createElement("tr");
fixedHeaderRow.setAttribute("id", "cart-tableRow__fixed");

function colHeaderConstructor (colTitle, span) {
    var colHead = document.createElement('th');
    colHead.classList.add("cart-tableCol__header");
    colHead.setAttribute("rowspan", span);
    var colHeadText = document.createTextNode(colTitle);
    colHead.appendChild(colHeadText);
    fixedHeaderRow.appendChild(colHead);
}

colHeaderConstructor("Product", 3);
colHeaderConstructor("Unit price", 1);
colHeaderConstructor("Quantity", 1);
colHeaderConstructor("Subtotal", 1);

cartOrderTable.appendChild(fixedHeaderRow);

//                      Footer
let cartFooter = document.createElement('footer');
cartFooter.setAttribute("id", "cart-footer");

let cartSummary = document.createElement('table');
cartSummary.setAttribute("id", "cart-summary");
cartSummary.setAttribute("align", "right");


//Constructors
function STEntryConstructor (STcellEntry, className) {
    var colTemp = document.createElement('td');
    colTemp.classList.add(className);
    var cellEntryTemp = document.createTextNode(STcellEntry);
    colTemp.appendChild(cellEntryTemp);
    cartSummary.appendChild(colTemp);
}

function STRowCreator () {
    var rowTemp = document.createElement('tr');
    cartSummary.appendChild(rowTemp);
}

//Constructions
STRowCreator();
STEntryConstructor("Number of items: ", "cart-summary__counterDesignator");
STEntryConstructor("jeff", "cart-summary__counter");

STRowCreator();
STEntryConstructor("Total price: ", "cart-summary__counterDesignator");
STEntryConstructor("jF €", "cart-summary__counter");


//Implement cart in div container
let cartDivContainer = document.getElementById('cart-container');
cartFooter.appendChild(cartSummary);
cartMain.appendChild(cartFooter);
cartDivContainer.appendChild(cartMain);
