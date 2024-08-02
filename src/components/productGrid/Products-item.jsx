import React, { useState } from 'react';
import CheckAvailable from './Check-available';
import './Product.css';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { Button } from 'antd';

const ProductsItem = ({ imgSrc, title, price, details, items }) => {
    const [hovered, setHovered] = useState(false);
    const [liked, isLiked] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const setLiked = () =>{
        isLiked(!liked);
    };
  

    return (
        <div className="item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Button
                className='likeButton'
                icon={liked ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined />}
                onClick={setLiked}
            />
            <img src={imgSrc} alt="" />
            <h3>{title}</h3>
            <p id='price'>{price} $</p>
            <p id='check'><CheckAvailable items={items} /></p>
            <p className={`productDetails ${hovered ? 'hovered' : ''}`}>{details}</p>
        </div>
    );
}

export default ProductsItem;
