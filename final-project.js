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
      "description": "Echo Dot is our most popular voice-controlled speaker, now with improved sound and a new design",
      "price": "$29.99",
      "src": "echo.jpeg",
      "id": "1",
      "cat": "technology",
      "url": "./singleproductpage.html"
  },
  {
      "title": "Skullycandy Headphones",
      "description": "15 hour rechargeable battery, soft synthetic leather ear cushions, bluetooth wirless with microphone",
      "price": "$58.97",
      "src": "headphones.jpeg",
      "id": "2",
      "cat": "technology",
      "url": "./singleproductpage.html"
  },
  {
      "title": "iPhone X",
      "description": "The latest sensation to the Apple industry",
      "price": "$899.99",
      "src": "iphone.jpeg",
      "id": "3",
      "cat": "technology",
      "url": "./singleproductpage.html"
  },
  {
      "title": "NIBOSI Luxury Fashion Watch",
      "description": "waterproof, military quartz, rose gold hands",
      "price": "$24.99",
      "src": "watch.jpg",
      "id": "4",
      "cat": "technology",
      "url": "./singleproductpage.html"
  },
  {
      "title": "Fire 7 Tablet",
      "description": "thinner, lighter, longer batery life, high contrast and sharper text",
      "price": "$49.99",
      "src": "fire.jpg",
      "id": "5",
      "cat": "technology",
      "url": "./singleproductpage.html"
  },
  {
      "title": "Wirless iPhone Charger",
      "description": "Qi-certified, compatable with all iPhone types",
      "price": "$30.67",
      "src": "charger.jpg",
      "id": "6",
      "cat": "technology",
      "url": "./singleproductpage.html"
  },
  {
      "title": "Frigidaire Microwave",
      "description": "black stainless, sound on/sound off ECO mode, LED lighting",
      "price": "$82.99",
      "src": "microwave.jpeg",
      "id": "7",
      "cat": "technology",
      "url": "./singleproductpage.html"
  },
  {
      "title": "Wireless Apple Earbuds",
      "description": "in-Ear stereo sound, noise cancelling, bluetooth wireless",
      "price": "$30.67",
      "src": "earbuds.jpg",
      "id": "8",
      "cat": "technology",
      "url": "./singleproductpage.html"
  },
  {
    "title": "Ghirardelli Hot Cocoa",
    "description": "15-count, rich dark chocalate flavor",
    "price": "$10.23",
    "src": "cocoa.jpg",
    "id": "1",
    "cat": "food",
    "url": "./singleproductpage.html"
  },
  {
    "title": "AmazonFresh Colombia Ground Coffee",
    "description": "dark flavor, perfect way to start your morning",
    "price": "$15.49",
    "src": "coffee.jpg",
    "id": "2",
    "cat": "food",
    "url": "./singleproductpage.html"
  },
  {
    "title": "Assorted Gatorade Pack",
    "description": "12-count, various flavors avaliable, perfect source of electrolytes",
    "price": "$9.16",
    "src": "gatorade.jpg",
    "id": "3",
    "cat": "food",
    "url": "./singleproductpage.html"
  },
  {
    "title": "GreatValue Sun-Dried Mango",
    "description": "a perfect balance of sweet and tang",
    "price": "$29.99",
    "src": "mango.jpeg",
    "id": "4",
    "cat": "food",
    "url": "./singleproductpage.html"
  },
  {
    "title": "Muscle Milk Protein Powder",
    "description": "add to shakes to give yourself that extra boost when you need it",
    "price": "$42.12",
    "src": "protein.jpg",
    "id": "5",
    "cat": "food",
    "url": "./singleproductpage.html"
  },
  {
    "title": "Lakanto Maple Flavored Syrup",
    "description": "perfect addition to early morning pancakes",
    "price": "$9.49",
    "src": "syrup.jpg",
    "id": "6",
    "cat": "food",
    "url": "./singleproductpage.html"
  },
  {
    "title": "Pure Leaf Sweetened Tea",
    "description": "8 count, all-natural rich tea",
    "price": "$10.98",
    "src": "tea.jpg",
    "id": "7",
    "cat": "food",
    "url": "./singleproductpage.html"
  },
  {
    "title": "Happy Belly Nuts, Chocalate & Dried Fruit Trail Mix",
    "description": "great combination of sweet and salty",
    "price": "$16.99",
    "src": "trailmix.jpg",
    "id": "8",
    "cat": "food",
    "url": "./singleproductpage.html"
  },
  {
    "title": "Furinno Easy Assembly Computer Desk",
    "description": "light cherry, sturdy, quick to set up",
    "price": "$39.81",
    "src": "desk.jpg",
    "id": "1",
    "cat": "decoration",
    "url": "./singleproductpage.html"
  },
  {
    "title": "HomeHero Kitchen Utensil Set",
    "description": "23 nylon cooking utensils with spatula",
    "price": "$19.99",
    "src": "kitchenset.jpg",
    "id": "2",
    "cat": "decoration",
    "url": "./singleproductpage.html"
  },
  {
    "title": "Cangshan Knife Set",
    "description": "Swedish forged steel",
    "price": "$119.97",
    "src": "knife.jpg",
    "id": "3",
    "cat": "decoration",
    "url": "./singleproductpage.html"
  },
  {
    "title": "AUKEY Table Lamp",
    "description": "touch senors + dimmable warm white light & color changing RGB",
    "price": "$26.99",
    "src": "lamp.jpg",
    "id": "4",
    "cat": "decoration",
    "url": "./singleproductpage.html"
  },
  {
    "title": "Lifeholder Light Fixture",
    "description": "mini chandelier, crystal lighting, 2 lights, flush mount ceiling light",
    "price": "$32.99",
    "src": "lightfixture.jpg",
    "id": "5",
    "cat": "decoration",
    "url": "./singleproductpage.html"
  },
  {
    "title": "Zinus Memory Foam Mattress",
    "description": "12 inch green tea queen mattress",
    "price": "$251.85",
    "src": "mattress.jpg",
    "id": "6",
    "cat": "decoration",
    "url": "./singleproductpage.html"
  },
  {
    "title": "Maples Rugs Home Rug",
    "description": "5 x 7, non slip large rug, grey",
    "price": "$82.10",
    "src": "rug.jpg",
    "id": "7",
    "cat": "decoration",
    "url": "./singleproductpage.html"
  },
  {
    "title": "PENGASE Tablecloth",
    "description": "60 x 120 inch, perfect item to furthur stlye your home dinners",
    "price": "$25.99",
    "src": "tablecloth.jpg",
    "id": "8",
    "cat": "decoration",
    "url": "./singleproductpage.html"
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
            <img class="singularimages" src='${el.src}'>
            <p class="price">${el.price}</p>
            <a href = "${el.url}">View Product</a>
          </article>`;
      const hook = document.querySelector('.cat1');
      hook.insertAdjacentHTML("beforeend", product);
    });
  }

  function productpageDecor() {
    decor.map( function(el, i) {
      let product = 
          `<article class="product">
            <p class="head-img">${el.title}</p>
            <img class="singularimages" src='${el.src}'>
            <p class="price">${el.price}</p>
            <a href = "${el.url}">View Product</a>
          </article>`;
      const hook = document.querySelector('.cat3');
      hook.insertAdjacentHTML("beforeend", product);
    });
  }

function productpageTech() {
  tech.map( function(el, i) {
    let product = 
        `<article class="product">
          <p class="head-img">${el.title}</p>
          <img class="singularimages" src='${el.src}'>
          <p class="price">${el.price}</p>
          <a href = "${el.url}">View Product</a>
        </article>`;
    const hook = document.querySelector('.cat2');
    hook.insertAdjacentHTML("beforeend", product);
  });
}


const toggle = $('.toggle');
home = $('.home');
toggle.on('click', function(event) {
if(home.length == 0)
{
  event.preventDefault();
  const cat = $(this).data('cat');
  $('.cat').removeClass('active');
  $(`[data-section=${cat}]`).addClass('active');
}
});

productpageDecor();
productpageFood();
productpageTech();

});