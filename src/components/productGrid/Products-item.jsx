import React from 'react';
import CheckAvailable from './Check-available';
import './Product.css';
import ProductDetails from './Product-details';

const ProductsItem = ({ imgSrc, title, price, details, items }) => {

    return (
        <div className="item">
            <img src={imgSrc} alt="" />
            <div className='iteminfo'>
                <h3>{title}</h3>
                <p id='price'>{price}</p>
                <ProductDetails details={details} />
                <p id='check'><CheckAvailable items={items} /></p>
            </div>

        </div>
    );
}


export default ProductsItem;
