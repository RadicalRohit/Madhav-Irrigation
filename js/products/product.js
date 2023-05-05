// import products from './products.json' assert { type: 'JSON' };
// console.log(products);

const response = await fetch("./js/products/products.json");
const products = await response.json();

// loop all categories from products.json only unique

const products_container = document.getElementById("product-list");
const categories = products.map((product) => product.category);
const all_categories = [...new Set(categories)].sort();


function product_template(product){
    return `
    <div class="product">
        <div class="product-image">
            <img src="./img/products/${product.category} ${product.name}.png" alt="${product.name}">
        </div>
        <div class="product-info">
            <h6>${product.category}</h6>
            <h4>${product.name}</h4>
            <p><small>${product.description}</small></p>
        </div>
    </div>
        `;
}




// show all categories on id products_categories
const products_categories = document.getElementById("products_categories");
// all_categories.forEach((category) => {
//     products_categories.innerHTML += `
//     <div class="category">
//         <button class="select-category" onclick="selectCategory('${category}')" >
//             ${category}
//         </button>
//     </div>
//         `;
//     }); 


//     function selectCategory(category) {
//         console.log(category);
//       }

      
// document.getElementsByClassName("select-category").onclick = function(){
//     console.log("clicked");
// } 







// show all products on id products
products.forEach((product) => {
    products_container.innerHTML += product_template(product);
    }   
);



