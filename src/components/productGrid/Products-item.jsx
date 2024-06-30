import React from 'react';
import CheckAvailable from './Check-available';
import './Product.css';
import ProductDetails from './Product-details';

const ProductsItem = ({ imgSrc, title, price, details, items }) => {

    return (
        <div className="item">
            <img src={imgSrc} alt="" />
            <h2>{title}</h2>
            <p id='price'>{price}</p>
            <ProductDetails details={details} />
            <p id='check'><CheckAvailable items={items} /></p>
        </div>
    );
}


export default ProductsItem;
