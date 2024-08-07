import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import './Product.css';

const LikedItems = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

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
                <p>Liked item...</p>
                <p>Liked item...</p>
                <p>Liked item...</p>
            </Modal>
        </>
    )
}

export default LikedItems;
