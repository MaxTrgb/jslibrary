import React, { useEffect, useState } from 'react';
import { productInfo } from './productInfo';
import ProductsItem from './Products-item';
import './Product.css';
import ProductHeader from './Product-header';

const ProductGrid = () => {
    const [products, setProducts] = useState([]);
    const [isGridView, setIsGridView] = useState(true);
    const [sortCriteria, setSortCriteria] = useState('name');

    const calculatePosition = (index) => {
        const itemsPerRow = 6; 
        const itemWidth = 240;
        const itemHeight = 550;
        const gap = 10;
        const row = Math.floor(index / itemsPerRow);
        const column = index % itemsPerRow;

        return {
            top: `${row * (itemHeight + gap)}px`,
            left: `${column * (itemWidth + gap)}px`
        };
    };
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
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const apiProducts = await response.json();

                
                const mappedProducts = apiProducts.map(product => ({
                    id: product.id,
                    imgSrc: product.image,
                    title: product.title,
                    price: product.price,
                    details: product.description,
                    items: product.rating.count
                }));

                const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
                const combinedProducts = [...mappedProducts, ...storedProducts];

                setProducts(sortProducts(sortCriteria, combinedProducts));
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
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
                {products.map((product, index) => {
                    const position = calculatePosition(index);
                    return (
                        <ProductsItem
                            key={product.id}
                            id={product.id}
                            imgSrc={product.imgSrc}
                            title={product.title}
                            price={product.price}
                            items={product.items}
                            details={product.details}
                            isGridView={isGridView}
                            style={position} 
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ProductGrid;
