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
let salmonSashimi = new Sashimi("Sake sashimi", "8.50", "sashimi-salmon.jpg", 5, "Salmon");
let tunaSashimi = new Sashimi("Maguro sashimi", "8.50", "sashimi-tuna.jpg", 5, "Tuna");
let salmonTunaSashimi = new Sashimi("Sake and maguro sashimi", "12.50", "salmon-and-tunasashimi.jpg", 8, "Salmon, tuna");

let sashimiMenuSection = new Menusection("Sashimi", [salmonSashimi, tunaSashimi, salmonTunaSashimi]); 

//Nigiri objects
let salmonNigiri = new Nigiri("Sake nigiri", "2.00", "sake.jpg", 2, "Salmon, rice", false);
let tunaNigiri = new Nigiri("Maguro nigiri", "2.00", "maguro.jpg", 2, "Tuna, rice", false);
let shrimpNigiri = new Nigiri("Ebi nigiri", "1.80", "ebi.jpg", 2, "Shrimp, rice", false);
let crabNigiri = new Nigiri("Kani nigiri", "1.60", "kani.jpg", 2, "Surimi (crab), rice, seaweed", false);
let eggNigiri = new Nigiri("Tamago nigiri", "1.60", "tamago-nigiri.jpg", 2, "Tamago (egg omelet), rice, seaweed", true);

let nigiriMenuSection = new Menusection("Nigiri", [salmonNigiri, tunaNigiri, shrimpNigiri, crabNigiri, eggNigiri]);

//Maki objects
let kappaMaki = new Maki("Kappa maki", "4.50", "kappa-maki.jpg", 6, "Cucumber, rice, seaweed", true);
let sakeMaki = new Maki("Sake maki", "5.50", "sake-maki.jpg", 6, "Salmon, rice, seaweed", false);
let tekkaMaki = new Maki("Tekka maki", "5.50", "tekka-maki.jpg", 6, "Tuna, rice, seaweed", false);
let avocadoMaki = new Maki("Avocado maki", "4.50", "avocado-maki.jpg", 6, "Avocado, rice, seaweed", true);

let makiMenuSection = new Menusection("Maki", [kappaMaki, sakeMaki, tekkaMaki, avocadoMaki]);

//Dessert objects
let vanillaIcecream = new Desserts("Vanilla icecream", "2.50", "vanilla-icecream.jpg", "Lactose");
let sesamIcecream = new Desserts("Sesam icecream", "3.00", "sesam-icecream.jpg", "Lactose");
let greenTeaIcecream = new Desserts("Green tea icecream", "3.00", "greentea-icecream.jpg", "Lactose");
let assortedFruits = new Desserts("Assorted fruits", "2.60", "fruits.jpg", "")

let dessertMenuSection = new Menusection("Desserts", [vanillaIcecream, sesamIcecream, greenTeaIcecream, assortedFruits]);

//Drink objects
let pepsi = new Drinks("Pepsi", "1.80", "cola.jpg", "330 ml", true);
let sprite = new Drinks("Sprite", "1.80", "sprite.jpg","330 ml", true);
let sake = new Drinks("Sake", "5.00","sake-drink.jpg", "330 ml", false);
let kirin = new Drinks("Kirin", "3.50", "kirin.jpg", "330 ml", false);
let sapporo = new Drinks("Sapporo", "3.50", "sapporo.jpg","330ml", false);

let drinksMenuSection = new Menusection("Drinks", [pepsi, sprite, sake, kirin, sapporo]);

//Menu
let fullMenu = new Menu([sashimiMenuSection, nigiriMenuSection, makiMenuSection, dessertMenuSection, drinksMenuSection]);


//Functions needed to create the webpage layout
function createLinkBoxLink(name, link) {
    let linkAnchor = document.createElement('a');
    let linkText = document.createTextNode(name);
    linkAnchor.setAttribute('href', link);
    linkAnchor.appendChild(linkText);
    linkAnchor.classList.add("menu__link")

    menuLinkBox.appendChild(linkAnchor);
}

function createCategory(name, id) {
    let categoryHeading = document.createElement('h2');
    let categoryText = document.createTextNode(name);
    categoryHeading.classList.add("menu__category-header")
    categoryHeading.appendChild(categoryText);
    categoryHeading.id = id;
    
    menuPageMain.appendChild(categoryHeading);
}

function createProductGrid() { //werkt nog niet
    let flexDiv = document.createElement('div');
    flexDiv.classList.add("category-container");

    let gridDiv = document.createElement('div');
    gridDiv.classList.add("category-container__category-grid");
    flexDiv.appendChild(gridDiv);

    menuPageMain.appendChild(flexDiv);

    return gridDiv;
}

function createSashimiGrid(gridDiv) { //werkt nog niet
    let i = 0;
    while (sashimiMenuSection.foodItems[i]) {
        let sashimiObject = sashimiMenuSection.foodItems[i];
        
        //Creating product container
        let productDisplay = document.createElement('article');
        productDisplay.classList.add("category-grid__product");
        
        //Adding product heading
        let productHeading = createProductHeaderPCS(sashimiObject);
        productDisplay.appendChild(productHeading);

        //Adding product information and image
        let productDiv = document.createElement('div');
        
        let productImage = createProductImage(sashimiObject);
        productDiv.appendChild(productImage);

        let productDesc = document.createElement('p');
        let productDescText = document.createTextNode("Ingredients: " + sashimiObject.ingredients);
        productDesc.appendChild(productDescText);
        productDiv.appendChild(productDesc);

        let productPrice = createProductPrice(sashimiObject)
        productDiv.appendChild(productPrice);

        productDisplay.appendChild(productDiv);

        //Adding item manipulation
        let incrementer = createQuantityIncrementer();
        productDisplay.appendChild(incrementer);

        gridDiv.appendChild(productDisplay);

        i++;
    }
}

function createNigiriOrMakiGrid(gridDiv, productObjects) {
    let i = 0;
    while (productObjects.foodItems[i]) {
        let productObject = productObjects.foodItems[i];
        
        //Creating product container
        let productDisplay = document.createElement('article');
        productDisplay.classList.add("category-grid__product");
        
        //Adding product heading
        let productHeading = createProductHeaderPCS(productObject);
        productDisplay.appendChild(productHeading);

        //Adding product information and image
        let productDiv = document.createElement('div');

        let productImage = createProductImage(productObject);
        productDiv.appendChild(productImage);

        let productDesc = document.createElement('p');
        let productDescText = document.createTextNode("Ingredients: " + productObject.ingredients);
        productDesc.appendChild(productDescText);
        productDiv.appendChild(productDesc);

        if (productObject.vegetarian) {
            let vegetarian = document.createElement('p');
            let vegetarianText = document.createTextNode("Vegetarian");
            vegetarian.appendChild(vegetarianText);
            productDiv.appendChild(vegetarian);
        }

        let productPrice = createProductPrice(productObject);
        productDiv.appendChild(productPrice);

        productDisplay.appendChild(productDiv);

        //Adding item manipulation
        let incrementer = createQuantityIncrementer();
        productDisplay.appendChild(incrementer);

        gridDiv.appendChild(productDisplay);

        i++;
    }
}

function createDessertsGrid(gridDiv) {
    let i = 0;
    while (dessertMenuSection.foodItems[i]) {
        let dessertObject = dessertMenuSection.foodItems[i];
        
        //Creating product container
        let productDisplay = document.createElement('article');
        productDisplay.classList.add("category-grid__product");
        
        //Adding product heading
        let productHeading = createProductHeader(dessertObject);
        productDisplay.appendChild(productHeading);

        //Adding product information and image
        let productDiv = document.createElement('div');
        
        let productImage = createProductImage(dessertObject);
        productDiv.appendChild(productImage);

        if (dessertObject.allergens) {
            let productDesc = document.createElement('p');
            let productDescText = document.createTextNode("Allergens: " + dessertObject.allergens);
            productDesc.appendChild(productDescText);
            productDiv.appendChild(productDesc);
        }
        
        let productPrice = createProductPrice(dessertObject);
        productDiv.appendChild(productPrice);

        productDisplay.appendChild(productDiv);

        //Adding item manipulation
        let incrementer = createQuantityIncrementer();
        productDisplay.appendChild(incrementer);

        gridDiv.appendChild(productDisplay);

        i++;
    }
}

function createDrinksGrid(gridDiv) {
    let i = 0;
    while (drinksMenuSection.foodItems[i]) {
        let drinksObject = drinksMenuSection.foodItems[i];
        
        //Creating product container
        let productDisplay = document.createElement('article');
        productDisplay.classList.add("category-grid__product");
        
        //Adding product heading
        let productHeading = createProductHeader(drinksObject);
        productDisplay.appendChild(productHeading);

        //Adding product information and image
        let productImage = createProductImage(drinksObject);

        let productDesc = document.createElement('p');
        let productDescText = document.createTextNode("Volume: " + drinksObject.volume);
        productDesc.appendChild(productDescText);
        let productPrice = createProductPrice(drinksObject);

        let productDiv = document.createElement('div');
        productDiv.appendChild(productImage);
        productDiv.appendChild(productDesc);

        if (!drinksObject.alcoholFree) {
            let alcoholIndicator = document.createElement('p');
            let alcoholText = document.createTextNode("Contains alcohol, 18+");
            alcoholIndicator.appendChild(alcoholText);
            productDiv.appendChild(alcoholIndicator);
        }

        productDiv.appendChild(productPrice);

        productDisplay.appendChild(productDiv);

        //Adding item manipulation
        let incrementer = createQuantityIncrementer();
        productDisplay.appendChild(incrementer);

        gridDiv.appendChild(productDisplay);

        i++;
    }
}

function createProductHeaderPCS(productObject) {
    let productHeading = document.createElement('h1');
    let productHeadingText = document.createTextNode(productObject.name + itemNumberString(productObject.numberOfItems));
    productHeading.classList.add("product__header")
    productHeading.appendChild(productHeadingText);
    return productHeading;
}

function createProductHeader(productObject) {
    let productHeading = document.createElement('h1');
    let productHeadingText = document.createTextNode(productObject.name);
    productHeading.classList.add("product__header")
    productHeading.appendChild(productHeadingText);
    return productHeading;
}

function itemNumberString(numberOfItems) {
    return " (" + numberOfItems + " PCS)";
}

function imageSource(image) {
    return "../images/" + image;
}

function createProductImage(productObject) {
    let productImage = document.createElement('img');
    productImage.setAttribute("src", imageSource(productObject.imageLocation));
    productImage.setAttribute("alt", productObject.name);
    productImage.classList.add("product__image");
    return productImage;
}

function createProductPrice(productObject) {
    let productPrice = document.createElement('p');
    let productPriceText = document.createTextNode("Price: €" + productObject.price);
    productPrice.appendChild(productPriceText);
    return productPrice;
}

function createQuantityIncrementer() {
    let incrementerDiv = document.createElement('div');
    incrementerDiv.classList.add("product__incrementer");

    let minusButton = document.createElement('button');
    let minusButtonText = document.createTextNode("-");
    minusButton.setAttribute("type", "button");
    minusButton.classList.add("product__incrementer--minus");
    minusButton.appendChild(minusButtonText);
    
    let quantityInput = document.createElement('input');
    quantityInput.setAttribute("type", "number");
    quantityInput.setAttribute("name", "item-quantity");
    quantityInput.setAttribute("value", "0")
    quantityInput.setAttribute("min", "0");
    quantityInput.classList.add("product__quantity");
    
    let plusButton = document.createElement('button');
    let plusButtonText = document.createTextNode("+");
    plusButton.setAttribute("type", "button");
    plusButton.classList.add("product__incrementer--plus");
    plusButton.appendChild(plusButtonText);

    incrementerDiv.appendChild(minusButton);
    incrementerDiv.appendChild(quantityInput);
    incrementerDiv.appendChild(plusButton);

    return incrementerDiv;
}

//Creating the actual webpage
let menuPageMain = document.createElement('article');
menuPageMain.classList.add("menu");

let menuHeading = document.createElement('h1');
let menuHeadingText = document.createTextNode('Our menu');
menuHeading.classList.add("menu__header")
menuHeading.appendChild(menuHeadingText);

let menuLinkBox = document.createElement('p');
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

let contentDivMenu = document.querySelector('#menu-content');
contentDivMenu.appendChild(menuPageMain);

