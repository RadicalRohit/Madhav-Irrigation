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

