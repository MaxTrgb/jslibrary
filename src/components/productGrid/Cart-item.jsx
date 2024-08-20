import React from 'react';
import ProductsItem from './Products-item';
import './Product.css';

const CartItem = ({cartProducts}) => {
    
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
