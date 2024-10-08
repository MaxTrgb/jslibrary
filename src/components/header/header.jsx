import { React, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './header.css';
import { ThemeContext } from '../../contexts/themeContexst';
import { Button, Space } from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import Auth from '../auth/Auth';



const Header = () => {
    const location = useLocation();
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header className={`theme-${theme}`}>
            <nav>
                {location.pathname !== "/" && <NavLink to="/">Home</NavLink>}
                <NavLink to="todo">ToDo List</NavLink>
                <NavLink to="products">Products</NavLink>
                <NavLink to="magicball">Magic Ball</NavLink>     
                <NavLink to="users">Users</NavLink>     
                <NavLink to="posts">Posts</NavLink>      
            </nav>

            <Space size={'middle'}>
                <Button
                    shape="circle"
                    icon={theme === "dark" ? <SunOutlined /> : <MoonOutlined />}
                    onClick={toggleTheme}
                />
                <Auth />
            </Space>

        </header>
    );
}

export default Header;