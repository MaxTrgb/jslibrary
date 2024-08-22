import React, { useEffect, useState } from 'react';
import { productInfo } from './productInfo';
import ProductsItem from './Products-item';
import './Product.css';
import ProductHeader from './Product-header';

const ProductGrid = () => {
    const [products, setProducts] = useState([]);
    const [isGridView, setIsGridView] = useState(true);
    const [sortCriteria, setSortCriteria] = useState('name');

    const sortProducts = (criteria, products) => {
        let sortedProducts;
        if (criteria === 'name') {
            sortedProducts = [...products].sort((a, b) => a.title.localeCompare(b.title));
        } else if (criteria === 'price') {
            sortedProducts = [...products].sort((a, b) => a.price - b.price);
        }
        return sortedProducts;
    };

    useEffect(() => {
        const storedProducts = localStorage.getItem('products');
        let initialProducts = storedProducts ? JSON.parse(storedProducts) : productInfo;
        setProducts(sortProducts(sortCriteria, initialProducts));

        if (!storedProducts) {
            localStorage.setItem('products', JSON.stringify(productInfo));
        }
    }, [sortCriteria]); 

    useEffect(() => {
        setProducts((prevProducts) => sortProducts(sortCriteria, prevProducts));
    }, [sortCriteria]);


    
    const toggleView = () => {
        setIsGridView(!isGridView);
    };

    const addProduct = (title, imgSrc, price, details, items) => {
        const newProduct = {
            id: products.length + 1,
            title: title,
            imgSrc: imgSrc,
            price: price,
            details: details,
            items: parseInt(items, 10)
        };
        const updatedProducts = [...products, newProduct];
        setProducts(sortProducts(sortCriteria, updatedProducts));

        localStorage.setItem('products', JSON.stringify(updatedProducts));
    };

    return (
        <div className="product">
            <ProductHeader
                addProduct={addProduct}
                toggleView={toggleView}
                isGridView={isGridView}
                setSortCriteria={setSortCriteria}
            />
            <div className={isGridView ? 'gridContainer' : 'listContainer'}>
                {products.map(product => (
                    <ProductsItem
                        key={product.id}
                        id={product.id}
                        imgSrc={product.imgSrc}
                        title={product.title}
                        price={product.price}
                        items={product.items}
                        details={product.details}
                        isGridView={isGridView}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;
