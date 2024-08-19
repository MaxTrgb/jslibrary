import React, { useState, useEffect } from 'react';
import CheckAvailable from './Check-available';
import './Product.css';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { Button } from 'antd';

const ProductsItem = ({ id, imgSrc, title, price, details, items }) => {
    const [hovered, setHovered] = useState(false);
    const [liked, setLiked] = useState(false);
    const [cart, setCart] = useState(false);

    useEffect(() => {
        const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
        setLiked(likedItems.includes(id?.toString()));

    }, [id]);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCart(cartItems.includes(id?.toString()));

    }, [id]);

    const handleCart = () => {
        if (!id) return;

        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const idStr = id.toString();

        let updatedCartItems;

        if(cart) {
            updatedCartItems = cartItems.filter(itemId => itemId !== idStr);
        } else {
            updatedCartItems = [...cartItems, idStr];
        }


        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setCart(!cart);
    };
    const handleLike = () => {
        if (!id) return;

        const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
        const idStr = id.toString();

        let updatedLikedItems;

        if (liked) {
            updatedLikedItems = likedItems.filter(itemId => itemId !== idStr);
        } else {
            updatedLikedItems = [...likedItems, idStr];
        }

        localStorage.setItem('likedItems', JSON.stringify(updatedLikedItems));
        setLiked(!liked);
    };



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
                    onClick={handleLike}
                />
            </div>
            <div className='propertiesContainer'>
                <img src={imgSrc} alt="" />
                <h3>{title}</h3>
                <p id='price'>{price} $</p>
                <p id='check'><CheckAvailable items={items} /></p>
                <Button className='addToCartButton' onClick={handleCart}>Add to cart</Button>
                <p className={`productDetails ${hovered ? 'hovered' : ''}`}>{details}</p>
            </div>

        </div>
    );
}

export default ProductsItem;
