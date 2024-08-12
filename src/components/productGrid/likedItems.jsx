import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import LikedItemsShow from './likedItemsShow';
import './Product.css';

const LikedItems = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [likedItems, setLikedItems] = useState([]);
    
    useEffect(() => {
        const storedLikedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
        setLikedItems(storedLikedItems);
    }, []);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if(isModalOpen){
            const storedLikedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
            setLikedItems(storedLikedItems);
        }
    }, [isModalOpen]);

    return (
        <>

            <Button
                shape="circle"
                onClick={showModal}
                icon={<HeartFilled />}
                className='likedButton'
            />

            <Modal
                title="Liked Items"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <LikedItemsShow likedItems={likedItems} />
                
            </Modal>
        </>
    )
}

export default LikedItems;
