import React from 'react';
import './Product.css';
import { UnorderedListOutlined } from '@ant-design/icons';
import { AppstoreOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const LikedProductHeader = ({ toggleView, setSortCriteria }) => {

    const navigate = useNavigate();

    const goToProducts = () => {
        navigate('/products');
    };

    return (
        <div className='likedItemsHeader'>
            <div className='myHeader'>
                <div className='backButton'>
                    <Button onClick={goToProducts}>Back</Button>
                </div>
                <div className='sortAndView'>
                    <div className='sortMenu'>
                        <button onClick={() => setSortCriteria('name')}>Sort By Name</button>
                        <button onClick={() => setSortCriteria('price')}>Sort By Price</button>
                    </div>
                    <div className='viewButtons'>
                        <button className='gridView' onClick={() => toggleView(true)}>
                            <AppstoreOutlined />
                        </button>

                        <button className='listView' onClick={() => toggleView(false)}>
                            <UnorderedListOutlined />
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LikedProductHeader;
