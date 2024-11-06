import '../css/style.css';
import { DOMSelectors } from "./domselectors";
import { products } from './Products';

function card(products) {
    products.forEach((product)=>
        DOMSelectors.container.insertAdjacentHTML(
            'beforeend',
            `<div class = "card">
                    <h2 class = "card-header">${product.name}</h2>
                    <img src = "${product.url}" alt = "" class="card-img"></img>
                    <h3 class = "product-color">${product.color}</h3>
                    <h3 class = "product-price">${product.price}</h3>
                    <h3 class = "product-taste">${product.taste}</h3>
            </div>`
        ))
}

card(products);