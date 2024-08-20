import React, { useState, useEffect } from 'react';
import CheckAvailable from './Check-available';
import './Product.css';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { Button } from 'antd';

const ProductsItem = ({ id, imgSrc, title, price, details, items, isLiked, isCart }) => {
    const [hovered, setHovered] = useState(false);
 

    useEffect(() => {
        const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
        setLiked(likedItems.includes(id?.toString()));

    }, [id]);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCart(cartItems.includes(id?.toString()));

    }, [id]);




    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };


    return (
        <div className="item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='likeButtonContainer'>
                <Button
                    className='likeButton'
                    icon={liked ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined style={{ color: 'red' }} />}
                    
                />
            </div>
            <div className='propertiesContainer'>
                <img src={imgSrc} alt="" />
                <h3>{title}</h3>
                <p id='price'>{price} $</p>
                <p id='check'><CheckAvailable items={items} /></p>
                <Button className='addToCartButton'>Add to cart</Button>
                <p className={`productDetails ${hovered ? 'hovered' : ''}`}>{details}</p>
            </div>

        </div>
    );
}

export default ProductsItem;
