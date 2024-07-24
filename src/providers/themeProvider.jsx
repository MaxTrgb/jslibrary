import { React, useEffect, useState } from 'react';
import { ThemeContext } from '../contexts/themeContexst';

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');   
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        const current = theme === 'dark' ? 'light' : 'dark';
        setTheme(theme === 'dark' ? 'light' : 'dark');
        document.body.className = `theme-${theme}`;
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;