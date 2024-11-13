//create theme button
//create different filters based off of elements in products.js

import '../CSS/style.css';
import { DOMSelectors } from "./domselectors";
import { products } from './products';

function card(products) {
    products.forEach((product)=>
        DOMSelectors.container.insertAdjacentHTML(
            'beforeend',
            `<div class = "card">
                    <h2 class = "card-header">${product.name}</h2>
                    <img src = "${product.url}" alt = "" class="card-img"></img>
                    <h3 class = "product-color">${product.color}</h3>
                    <h3 class = "product-price">$${product.price}</h3>
                    <h3 class = "product-taste">${product.taste}</h3>
            </div>`
        ))
}

card(products);

//function when you click a button, filter so only certain cards show up
//filter using .sort and .includes

function showSweetProducts(){
    DOMSelectors.sweetButton.addEventListener("click", function(){
        DOMSelectors.container.innerHTML = ""; //initially clears out the container
        card(products.filter((product)=>product.taste.includes("Sweet"))); //filters the products that have sweet included
    })
}
showSweetProducts();

function showSaltyProducts(){
    DOMSelectors.saltyButton.addEventListener("click", function(){
        DOMSelectors.container.innerHTML = ""; //initially clears out the container
        card(products.filter((product)=>product.taste.includes("Salty"))); //filters the products that have salty included
    })
}
showSaltyProducts();

function showBlandProducts(){
    DOMSelectors.blandButton.addEventListener("click", function(){
        DOMSelectors.container.innerHTML = ""; //initially clears out the container
        card(products.filter((product)=>product.taste.includes("Bland"))); //filters the products that have bland included
    })
}
showBlandProducts();

function showSpicyProducts(){
    DOMSelectors.spicyButton.addEventListener("click", function(){
        DOMSelectors.container.innerHTML = ""; //initially clears out the container
        card(products.filter((product)=>product.taste.includes("Spicy"))); //filters the products that have spicy included
    })
}
showSpicyProducts();

function showAllProducts(){
    DOMSelectors.allButton.addEventListener("click", function(){
        DOMSelectors.container.innerHTML = ""; //initially clears out the container
        card(products);
    })
}
showAllProducts();

//change theme
document.querySelector(".themebtn").addEventListener("click", function(){
    if(document.body.classList.contains("minty")){
        document.body.classList.add("vibrant");
        document.body.classList.remove("minty");
    }
    else{
        document.body.classList.add("minty");
        document.body.classList.remove("vibrant");
    }
});