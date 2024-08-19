import React, { useEffect, useState } from 'react';
import { productInfo } from './productInfo';
import ProductsItem from './Products-item';
import './Product.css';
import ProductHeader from './Product-header';



const ProductGrid = () => {
    const [products, setProducts] = useState([]);
    const [isGridView, setIsGridView] = useState(true);
    const [sortCriteria, setSortCriteria] = useState('name');

    const toggleView = () => {
        setIsGridView(!isGridView);
    };

    useEffect(() => {
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        } else {
            setProducts(productInfo);
        }
    }, []);

    useEffect(() => {
        const sortProducts = (criteria) => {
            let sortedProducts;
            if (criteria === 'name') {
                sortedProducts = [...products].sort((a, b) => a.title.localeCompare(b.title));
            } else if (criteria === 'price') {
                sortedProducts = [...products].sort((a, b) => a.price - b.price);
            }
            setProducts(sortedProducts);
        };

        if (products.length > 0) {
            sortProducts(sortCriteria);
        }
    }, [sortCriteria, products]);

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
        setProducts(updatedProducts);

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
