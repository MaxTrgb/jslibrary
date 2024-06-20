import React from 'react';
import './Todo.css';
import CheckAvailable from './Check-available';

const ProductsItem = ({ imgSrc, title, price, items }) => {

    return (
        <div className="item">
            <img src={imgSrc} alt="" />
            <h2>{title}</h2>
            <p id='price'>{price}</p>
            <p id='check'><CheckAvailable items={items} /></p>
        </div>
    );
}


export default ProductsItem;
