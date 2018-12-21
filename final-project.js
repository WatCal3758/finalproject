function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
 if (!event.target.matches('#button2')) {
   var dropdowns = document.getElementsByClassName("dropdown-content");
   var i;
   for (i = 0; i < dropdowns.length; i++) {
     var openDropdown = dropdowns[i];
     if (openDropdown.classList.contains('show')) {
       openDropdown.classList.remove('show');
     }
   }
 }
}

document.addEventListener("DOMContentLoaded", function() 
{
const products = [
  {
      "title": "Amazon Echo 3rd Generation",
      "description": "",
      "price": "$29.99",
      "src": "echo.jpg",
      "id": "1",
      "cat": "technology"
  },
  {
      "title": "Skullycandy Headphones",
      "description": "",
      "price": "$58.97",
      "src": "headphones.jpeg",
      "id": "2",
      "cat": "technology"
  },
  {
      "title": "iPhone X",
      "description": "",
      "price": "$899.99",
      "src": "iphone.jpeg",
      "id": "3",
      "cat": "technology"
  },
  {
      "title": "NIBOSI Luxury Fashion Watch",
      "description": "",
      "price": "$24.99",
      "src": "watch.jpg",
      "id": "4",
      "cat": "technology"
  },
  {
      "title": "Fire 7 Tablet",
      "description": "",
      "price": "$49.99",
      "src": "fire.jpg",
      "id": "5",
      "cat": "technology"
  },
  {
      "title": "Wirless iPhone Charger",
      "description": "",
      "price": "$30.67",
      "src": "charger.jpg",
      "id": "6",
      "cat": "technology"
  },
  {
      "title": "Frigidaire Microwave",
      "description": "",
      "price": "$82.99",
      "src": "microwave.jpeg",
      "id": "7",
      "cat": "technology"
  },
  {
      "title": "Wireless Apple Earbuds",
      "description": "",
      "price": "$30.67",
      "src": "earbuds.jpg",
      "id": "8",
      "cat": "technology"
  },
  {
    "title": "Ghirardelli Hot Cocoa 15-Count",
    "description": "",
    "price": "$10.23",
    "src": "cocoa.jpg",
    "id": "1",
    "cat": "food"
  },
  {
    "title": "AmazonFresh Colombia Ground Coffee",
    "description": "",
    "price": "$15.49",
    "src": "coffee.jpg",
    "id": "2",
    "cat": "food"
  },
  {
    "title": "12-Pack Assorted Gatorade",
    "description": "",
    "price": "$9.16",
    "src": "gatorade.jpg",
    "id": "3",
    "cat": "food"
  },
  {
    "title": "GreatValue Sun-Dried Mango",
    "description": "",
    "price": "$29.99",
    "src": "mango.jpeg",
    "id": "4",
    "cat": "food"
  },
  {
    "title": "Muscle Milk Protein Powder",
    "description": "",
    "price": "$42.12",
    "src": "protein.jpg",
    "id": "5",
    "cat": "food"
  },
  {
    "title": "Lakanto Maple Flavored Syrup",
    "description": "",
    "price": "$9.49",
    "src": "syrup.jpg",
    "id": "6",
    "cat": "food"
  },
  {
    "title": "Pure Leaf Sweetened Tea 8-Count",
    "description": "",
    "price": "$10.98",
    "src": "tea.jpg",
    "id": "7",
    "cat": "food"
  },
  {
    "title": "Happy Belly Nuts, Chocalate & Dried Fruit Trail Mix",
    "description": "",
    "price": "$16.99",
    "src": "trailmix.jpg",
    "id": "8",
    "cat": "food"
  },
  {
    "title": "Furinno Easy Assembly Computer Desk",
    "description": "",
    "price": "$39.81",
    "src": "desk.jpg",
    "id": "1",
    "cat": "decoration"
  },
  {
    "title": "HomeHero Kitchen Utensil Set",
    "description": "",
    "price": "$19.99",
    "src": "kitchenset.jpg",
    "id": "2",
    "cat": "decoration"
  },
  {
    "title": "Cangshan Knife Set",
    "description": "",
    "price": "$119.97",
    "src": "knife.jpg",
    "id": "3",
    "cat": "decoration"
  },
  {
    "title": "AUKEY Table Lamp",
    "description": "",
    "price": "$26.99",
    "src": "lamp.jpg",
    "id": "4",
    "cat": "decoration"
  },
  {
    "title": "Lifeholder Light Fixture",
    "description": "",
    "price": "$32.99",
    "src": "lightfixture.jpg",
    "id": "5",
    "cat": "decoration"
  },
  {
    "title": "Zinus Memory Foam Mattress",
    "description": "",
    "price": "$251.85",
    "src": "mattress.jpg",
    "id": "6",
    "cat": "decoration"
  },
  {
    "title": "Maples Rugs Home Rug",
    "description": "",
    "price": "$82.10",
    "src": "rug.jpg",
    "id": "7",
    "cat": "decoration"
  },
  {
    "title": "PENGASE Tablecloth",
    "description": "",
    "price": "$25.99",
    "src": "tablecloth.jpg",
    "id": "8",
    "cat": "decoration"
  }
];

const tech = products.filter(product => {
  return product.cat === 'technology';
});

const food = products.filter(product => {
  return product.cat === 'food';
});

const decor = products.filter(product => {
    return product.cat === 'decoration';
  });

function productpageFood() {
    food.map( function(el, i) {
      let product = 
          `<article class="product">
            <p class="head-img">${el.title}</p>
            <img src='${el.src}'>
            <p class="price">${el.price}</p>
          </article>`;
      const hook = document.querySelector('.product-holder');
      hook.insertAdjacentHTML("beforeend", product);
    });
  }

  function productpageDecor() {
    decor.map( function(el, i) {
      let product = 
          `<article class="product">
            <p class="head-img">${el.title}</p>
            <img src='${el.src}'>
            <p class="price">${el.price}</p>
          </article>`;
      const hook = document.querySelector('.product-holder');
      hook.insertAdjacentHTML("beforeend", product);
    });
  }

function productpageTech() {
  tech.map( function(el, i) {
    let product = 
        `<article class="product">
          <p class="head-img">${el.title}</p>
          <img src='${el.src}'>
          <p class="price">${el.price}</p>
        </article>`;
    const hook = document.querySelector('.product-holder');
    hook.insertAdjacentHTML("beforeend", product);
  });
}

const productPage = document.querySelector('.productpage-tech');
if (productPage) {
      productpageTech();
}

const productPage = document.querySelector('.productpage-food');
if (productPage) {
      productpageFood();
}

const productPage = document.querySelector('.productpage-decor');
if (productPage) {
      productpageDecor();
}

});