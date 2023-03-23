// import products from './products.json' assert { type: 'JSON' };
// console.log(products);


const response = await fetch("./js/products/products.json");
const products = await response.json();

console.log(products[1].category);