import { React, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './header.css';
import { ThemeContext } from '../../contexts/themeContexst';
import { Button } from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';


const Header = () => {
    const location = useLocation();
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header className={`theme-${theme}`}>
            <nav>
                {location.pathname !== "/" && <NavLink to="/">Home</NavLink>}
                <NavLink to="todo">Todo</NavLink>
                <NavLink to="products">Products</NavLink>
                <NavLink to="magicball">Magic Ball</NavLink>
                {/* <NavLink to="counters">Counters</NavLink> */}
            </nav>

            <Button
                type="default"
                shape='circle'                
                icon={theme === "dark" ? <SunOutlined /> : <MoonOutlined />}
                onClick={toggleTheme}
            />
        </header>
    );
}

export default Header;