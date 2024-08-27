import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Registration from './Registration';
import styles from './Form.module.css';

const Auth = () => {
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
                type="primary"
                shape="circle"
                onClick={showModal}
                icon={<UserOutlined />}
            />

            <Modal
                title="Welcome!"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                className={styles.registrationForm}
            >
                <Registration />
            </Modal>
        </>
    )
}

export default Auth;