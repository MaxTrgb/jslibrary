import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/home';
import TodoList from '../components/todoList/Todo-list';
import ProductGrid from '../components/productGrid/Product-grid';
import MagicBall from '../components/magicBall/magicBall';
import LikedItemsPage from '../components/productGrid/LikedItemsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
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
      },
      {
        path: '/liked-items',
        element: <LikedItemsPage />
      }
    ]
  }
]);

export { router };