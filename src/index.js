import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import ThemeProvider from './providers/themeProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  // <ThemeContext.Provider value="light">
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
  // </ThemeContext.Provider>
  // </React.StrictMode>
);