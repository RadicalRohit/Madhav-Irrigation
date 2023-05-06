// import products from './products.json' assert { type: 'JSON' };
// console.log(products);

const response = await fetch("./js/products/products.json");
const products = await response.json();

// loop all categories from products.json only unique



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
function productListing(p){
    p.forEach((product) => {
        placeholder.innerHTML += product_template(product);});
}





const products_categories = document.getElementById("products_categories");
all_categories.forEach((category) => {
    products_categories.innerHTML += `
    <div class="category">
        <a class="select-category" href="#${category.replace(/\s+/g, '-').toLowerCase()}" >
            ${category}
        </a>
    </div>
        `;
    }); 


const productsListAll = document.getElementById("product-list-all");
all_categories.forEach((category) => {
    productsListAll.innerHTML += `
    <div>
    <h3>${category}</h3>
    <div id="${category.replace(/\s+/g, '-').toLowerCase()}" class="product-list"></div>
    </div>
    `;
    }); 


const dripIrrigation = document.getElementById("drip-irrigation");
const dripIrrigationjson = products.filter(product => product.category === "Drip Irrigation" );
const filters = document.getElementById("filters");
const filterjson = products.filter(product => product.category === "Filters" );

const fittingsAcc = document.getElementById("fittings-accessories");
const fittingsAccjson = products.filter(product => product.category === "Fittings Accessories" );

const mulchingFilm = document.getElementById("mulching-film");
const mulchingFilmjson = products.filter(product => product.category === "Mulching Film" );
const pipes = document.getElementById("pipes");
const pipesjson = products.filter(product => product.category === "Pipes" );
const pressureGauge = document.getElementById("pressure-gauge");
const pressureGaugejson = products.filter(product => product.category === "Pressure Gauge" );
const roll = document.getElementById("roll");
const rolljson = products.filter(product => product.category === "Roll" );
const sprinkler = document.getElementById("sprinkler");
const sprinklerjson = products.filter(product => product.category === "SPRINKLER" );
const valves = document.getElementById("valves");
const valvesjson = products.filter(product => product.category === "Valves" );
const venturiInjector = document.getElementById("venturi-injector");
const venturiInjectorjson = products.filter(product => product.category === "Venturi Injector" );


filterjson.forEach((product) => {
    filters.innerHTML += product_template(product);
});

dripIrrigationjson.forEach((product) => {
    dripIrrigation.innerHTML += product_template(product);
});

fittingsAccjson.forEach((product) => {
    fittingsAcc.innerHTML += product_template(product);
});

mulchingFilmjson.forEach((product) => {
    mulchingFilm.innerHTML += product_template(product);
});

pipesjson.forEach((product) => {
    pipes.innerHTML += product_template(product);
});

pressureGaugejson.forEach((product) => {
    pressureGauge.innerHTML += product_template(product);
});

rolljson.forEach((product) => {
    roll.innerHTML += product_template(product);
});

sprinklerjson.forEach((product) => {
    sprinkler.innerHTML += product_template(product);
});

valvesjson.forEach((product) => {
    valves.innerHTML += product_template(product);
});

venturiInjectorjson.forEach((product) => {
    venturiInjector.innerHTML += product_template(product);
});

































      
      









