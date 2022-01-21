import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import './Shop.css'

const Shop = () => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingBasket} />
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    const [displayProduct, setDisplayProduct] = useState([])
    
    useEffect(()=>{
    
    fetch('./products.JSON')
    .then (res => res.json())
    .then(data => {
        setProducts(data);
        setDisplayProduct(data)
    
    })
    },[])
    
    
    
    useEffect(()=> {
        
        if(products.length>0){
        const savedCart = getStoredCart() ;
        const storedCart = [];
        for(const key in savedCart){
        const addedProduct = products.find(product => product.key === key)
        if(addedProduct){

            const quantity = savedCart[key];
            addedProduct.quantity = quantity;
            storedCart.push(addedProduct);
        }
        }

        setCart(storedCart)
       }
       
    }, [products])

    

    const handleProductToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key)
     }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProduct(matchProduct)
    }

  


    return (
        <div> 

        <div className='search-field'>
          <input type="text" id="" placeholder='type here to search' onChange={handleSearch}/>
          <span id='cart-count'> {cartIcon}00</span>
        </div>
        <div className='shop-container'>
          <div></div>
          <div className="product-container">
          {
           displayProduct.map(product => <Product product={product} key={product.key} handleProductToCart={ handleProductToCart}></Product>)
          }  
          </div>
          <div className='cart-container text-center mt-5'>
          <Cart cart={cart}></Cart>
          </div>
        </div>

        </div>
    );
};

export default Shop;