import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TodoList from './components/todoList/Todo-list';
import ProductGrid from './components/productGrid/Product-grid';
import MagicBall from './components/magicBall/magicBall';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/todo",
        element: <TodoList />
      },
      {
        path: "/products",
        element: <ProductGrid />
      },
      {
        path: "/magicball",
        element: <MagicBall />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);