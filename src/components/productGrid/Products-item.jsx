import React, { useState } from 'react';
import CheckAvailable from './Check-available';
import './Product.css';

const ProductsItem = ({ imgSrc, title, price, details, items }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <a href='#' className="item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={imgSrc} alt="" />
            <h3>{title}</h3>
            <p id='price'>{price} $</p>
            <p id='check'><CheckAvailable items={items} /></p>
            <p className={`productDetails ${hovered ? 'hovered' : ''}`}>{details}</p>
        </a>
    );
}

export default ProductsItem;
