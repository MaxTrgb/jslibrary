import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/home';
import TodoList from '../components/todoList/Todo-list';
import ProductGrid from '../components/productGrid/Product-grid';
import MagicBall from '../components/magicBall/magicBall';
import LikedItemsPage from '../components/productGrid/LikedItemsPage';
import Users from '../pages/users/Users';
import { getUsers } from '../loaders/usersLoaders';
import User from '../pages/users/User';
import { getUser } from '../loaders/usersLoaders';
import SingleItem from '../components/productGrid/Single-item';

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
        path: "/products/:id",  
        element: <SingleItem />
      },
      {
        path: "/magicball",
        element: <MagicBall />
      },
      {
        path: '/liked-items',
        element: <LikedItemsPage />
      },
      {
        path: '/users',
        element: <Users />,
        loader: getUsers,
        children: [
          {
            path: ":id",
            element: <User />,
            loader: getUser
          }
        ]
      }
    ],
  },
]);

export { router };