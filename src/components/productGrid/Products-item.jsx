import React, { useState} from 'react';
import CheckAvailable from './Check-available';
import './Product.css';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

const ProductsItem = ({ id, imgSrc, title, price, details, items, isLiked,  toggleLiked }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };


    return (
        <div className="item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='likeButtonContainer'>
                {isLiked ? 
                    <HeartFilled className='likeButton' onClick={() => toggleLiked(id)} /> : 
                    <HeartOutlined className='likeButton' onClick={() => toggleLiked(id)} />}
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
