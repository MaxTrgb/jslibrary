import { React, useState, useContext } from 'react';
import ThemeContext from '../contexts/themeContext';

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('dark');

    constToggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>

    );
}

export default ThemeProvider;
