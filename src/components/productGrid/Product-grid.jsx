import React, { useState } from 'react';
import { productInfo } from './productInfo';
import ProductsItem from './Products-item';
import './Product.css';
import ProductAdd from './Product-add';

const ProductGrid = () => {
    const [products] = useState(productInfo);

    return (
        <div className="product">
            <ProductAdd />
            <div className='gridContainer'>
                <div className="gridItems">
                    {products.map(product => (
                        <ProductsItem
                            key={product.id}
                            imgSrc={product.imgSrc}
                            title={product.title}
                            price={product.price}
                            items={product.items}
                            details={product.details}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default ProductGrid;