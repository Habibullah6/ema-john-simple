import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import Rating from 'react-rating';


const Product = props => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const {name, img, stock, seller, price, star} = props.product; 
    return (
        <div className='product'>
           <div>
                <img src={img} alt="" />
           </div>
           <div className='product-details'>
              <h4 className='product-name '>{name}</h4>
              <p><span>by: {seller}</span></p>
              <p>${price}</p>
              <p>only {stock} left in stock - order soon</p>

              <Rating 
              initialRating={star}
              emptySymbol="far fa-star icon-color"
              fullSymbol="fas fa-star icon-color" 
              readonly>
                  
              </Rating> <br />

              <button onClick={()=>props.handleProductToCart(props.product)} className='btn-warning rounded w-25 border-0 pe-auto'> {cartIcon}  add to cart</button>
           </div>
        </div>
    );
};

export default Product;