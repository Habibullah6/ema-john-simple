

import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';


const Cart = props => {
    const {cart} = props;
    
    const cartIcon = <FontAwesomeIcon icon={faShoppingBasket} />

    let totalQuantity = 0;
    let itemsPrice = 0;
    let shippingCost = 0;
    let grandTotal = 0;
    for(const product of cart){

        if(!product.quantity){
            product.quantity = 1;
        }
        totalQuantity = totalQuantity + product.quantity;
        const price = product.price;
        const itemPrice = price * product.quantity;
        itemsPrice = itemsPrice + itemPrice;
        const deliveryCost = product.shipping * product.quantity;
        shippingCost = shippingCost + deliveryCost;

        grandTotal = grandTotal + itemPrice + deliveryCost;

    }
    

    return (
        <div>
            <h3>Order summary</h3>
            <h6>Items Order: {totalQuantity}</h6>
            <p>Items-price: {itemsPrice.toFixed(2)}</p>
            <p>Shipping-cost: {shippingCost.toFixed(2)}</p>
            <h5> Grand total: {grandTotal.toFixed(2)}</h5>
            <button className='order-btn'>{cartIcon} Order Now</button>
        </div>
    );
};

export default Cart;