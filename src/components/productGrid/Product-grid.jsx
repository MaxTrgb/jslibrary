import React from 'react';
import ProductsItem from './Products-item';
import './Product.css';
import ProductAdd from './Product-add';


const ProductGrid = () => {
    return (
        <div className="product">
            <ProductAdd />
            <div className='gridContainer'>
                <div className="gridItems">
                    <ProductsItem
                        imgSrc="https://content2.rozetka.com.ua/goods/images/big_tile/446854857.jpg"
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
    );
}

export default ProductGrid;
