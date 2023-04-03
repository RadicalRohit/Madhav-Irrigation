// import products from './products.json' assert { type: 'JSON' };
// console.log(products);



const response = await fetch("./js/products/products.json");
const products = await response.json();

console.log(products[1].category);


// loop all categories from products.json only unique
const categories = products.map((product) => product.category);
const all_categories = [...new Set(categories)];
// asending order
all_categories.sort();



// show all categories on id products_categories
const products_categories = document.getElementById("products_categories");
all_categories.forEach((category) => {
    products_categories.innerHTML += `
    <div class="category">
        
        <button class="select-category">
            
            ${category}
        </button>
    </div>
        `;

    }); 



// show all products on id products
const products_container = document.getElementById("product-list");
products.forEach((product) => {
    products_container.innerHTML += `
    <div class="product">
        <div class="product-image">
            <img src="./img/products/${product.category} ${product.name}.png" alt="${product.name}">
        </div>
        <div class="product-info">
            <h6>${product.category}</h6>
            <h4>${product.name}</h4>
            <p><small>${product.description}</small></p>
            <p class="price">${product.price} ₹  </p>
            
        </div>
    </div>
        `;

    }   );


    // products.forEach((product) => {
    //     console.log(product.category+" "+product.name+ ".png");
    // });

