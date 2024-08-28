import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Registration from './Registration';
import Login from './Login';

const Auth = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoginForm, setIsLoginForm] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const toggleForm = () => {
        setIsLoginForm(!isLoginForm);
    }
    return (
        <>
            <Button
                type="primary"
                shape="circle"
                onClick={showModal}
                icon={<UserOutlined />} />

            <Modal                
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                {isLoginForm ? <Login toggleForm={toggleForm} /> : <Registration toggleForm={toggleForm} />}
            </Modal>
        </>
    )
}

export default Auth;