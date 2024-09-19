import React, { useState, useEffect } from 'react';
import CheckAvailable from './Check-available';
import './Product.css';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { Button, Rate} from 'antd';
import { useNavigate } from 'react-router-dom';

const ProductsItem = ({ id, imgSrc, title, price, details, items, style }) => {
    const [hovered, setHovered] = useState(false);
    const [liked, setLiked] = useState(false);
    const [rating, setRating] = useState(0);    
    const navigate = useNavigate();

    useEffect(() => {
        const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
        setLiked(likedItems.includes(id?.toString()));

        const storedRatings = JSON.parse(localStorage.getItem('ratings')) || {};
        if (storedRatings[id]) {
            setRating(storedRatings[id]);
        }
    }, [id]);

    const handleLike = (e) => {
        e.stopPropagation();
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

        window.dispatchEvent(new Event('storage'));
    };

    const handleItemClick = () => {
        navigate(`/products/${id}`); 
    };

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    

    return (
        <div
            className="item"
            style={style}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleItemClick}>

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
                <Rate disabled value={rating} className='listRating'/>
                <p id='price'>{price} $</p>
                <p id='check'><CheckAvailable items={items} /></p>
                <p className={`productDetails ${hovered ? 'hovered' : ''}`}>{details}</p>
            </div>
        </div>
    );
}

export default ProductsItem;