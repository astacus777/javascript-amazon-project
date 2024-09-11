import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";

export function renderCheckoutHeader() {

    let productQuantity = 0;

	cart.forEach(cartItem => {
		const produt = getProduct(cartItem.productId);
		

        productQuantity += cartItem.quantity;
    })


    document.querySelector('.js-retur-to-home-link').innerHTML = productQuantity + " items";

}