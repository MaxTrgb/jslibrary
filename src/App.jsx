import TodoList from "./components/todoList/Todo-list";
import Example from "./components/Example";
import ProductGrid from "./components/productGrid/Product-grid";
import MagicBall  from "./components/magicBall/magicBall";
import { createBrowserRouter, Link, Outlet, RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
    <header>
      <a href="/"><p>Home</p></a>
      <a href="/todo"><p>Todo</p></a>
      <a href="/products"><p>Products</p></a>
      <a href="/magicball"><p>Magic Ball</p></a>
    </header>
    <Outlet />
    </> 
  );
}

export default App;