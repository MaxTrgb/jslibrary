import React, { useState, useEffect } from 'react';
import ProductsItem from './Products-item';
import './Product.css';

const CartItem = () => {
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);

        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setProducts(storedProducts);
    }, []);

    
    const cartProducts = Array.isArray(products) ? products.filter(product => cartItems.includes(product.id.toString())) : [];

    return (
        <div className='cartItemsDisplay'>
            {cartProducts.length > 0 ? (
                cartProducts.map(product => (
                    <ProductsItem
                        key={product.id}
                        id={product.id}
                        imgSrc={product.imgSrc}
                        title={product.title}
                        price={product.price}
                        items={product.items}
                        details={product.details}
                    />
                ))
            ) : (
                <p>No items in the cart.</p>
            )}
        </div>
    );
}

export default CartItem;
