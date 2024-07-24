import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './header.css';
import {ThemeCOntext} from '../../providers/themeProvider';

const Header = () => {
    const location = useLocation();
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    return (
        <header className='active'>
            <nav>
                {location.pathname !== '/' && <NavLink to="/"><p>Home</p></NavLink>}                
                <NavLink to="/todo"><p>ToDo List</p></NavLink>
                <NavLink to="/products"><p>Products shop</p></NavLink>
                <NavLink to="/magicball"><p>Magic Ball</p></NavLink>
                <NavLink to="/counters"><p>Counters</p></NavLink>
            </nav>
        </header>
    );
}

export default Header;
