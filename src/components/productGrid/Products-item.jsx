import React, { useState, useEffect } from 'react';
import CheckAvailable from './Check-available';
import './Product.css';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { Button } from 'antd';

const ProductsItem = ({ id, imgSrc, title, price, details, items }) => {
    const [hovered, setHovered] = useState(false);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
        if (likedItems.includes(id)) {
            setLiked(true);
        }
    }, [id]);

    const handleLike = () => {
        const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
        let updatedLikedItems;
        
        if (liked) {
            updatedLikedItems = likedItems.filter(itemId => itemId !== id);
        } else {
            updatedLikedItems = [...likedItems, id];
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
                <p className={`productDetails ${hovered ? 'hovered' : ''}`}>{details}</p>
            </div>

        </div>
    );
}

export default ProductsItem;
