import React, { useState} from 'react';
import { Button, Modal } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import CartItem from './Cart-item';

const ProductsCart = ({cartItems}) => {

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
                onClick={showModal}
                icon={<ShoppingCartOutlined />}
                style={{ backgroundColor: 'purple', color: 'white' }}
                />
                
            <Modal
                className='cartContent'
                title="Cart content:"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
               <CartItem />
            </Modal>
        </>
    )
}

export default ProductsCart;
