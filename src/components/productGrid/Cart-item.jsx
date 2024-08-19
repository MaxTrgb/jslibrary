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
    const cartProducts = products.filter(product => cartItems.includes(product.id.toString()));
    return (
        <div className='cartItemsDisplay'>
            {cartProducts.map(product => (
                <ProductsItem
                    key={product.id}
                    id={product.id}
                    imgSrc={product.imgSrc}
                    title={product.title}
                    price={product.price}
                    items={product.items}
                    details={product.details}
                />
            ))}
        </div>
    );
}

export default CartItem;
