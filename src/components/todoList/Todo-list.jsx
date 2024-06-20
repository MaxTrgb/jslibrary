import React from "react";
import TodoCreate from "./Todo-create";
import TodoFilter from "./Todo-filter";
import TodoItem from "./Todo-item";
import ProductsItem from "./Products-item";

const TodoList = () => {
    return (
        <div className="todo">
            <h1>Todo List</h1>
            <TodoCreate />
            <div>
                <TodoFilter />
                <div className="list">
                    <TodoItem title="Work" completed={true} />
                    <TodoItem title="Gym" completed={false} />
                    <TodoItem title="Shop" completed={false} />
                </div>
            </div>
            <div className="product">
                <h1>Products</h1>
                <div className="gridItems">
                    <ProductsItem
                        imgSrc="https://content1.rozetka.com.ua/goods/images/big_tile/442102428.jpg"
                        title="Моноблок Lenovo 24 AIO V50a-24"
                        price="20 999₴"
                        items={50} />
                    <ProductsItem
                        imgSrc="https://content.rozetka.com.ua/goods/images/big_tile/320078659.jpg"
                        title="Компютер ARTLINE Gaming X47"
                        price="26 999₴"
                        items={10} />
                    <ProductsItem
                        imgSrc="https://content1.rozetka.com.ua/goods/images/big_tile/176926071.jpg"
                        title="Моноблок Apple iMac 24 М1 4.5К"
                        price="44 999₴"
                        items={0} />
                </div>
            </div>
        </div>

    )
}

export default TodoList;