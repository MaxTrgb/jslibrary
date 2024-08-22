import React, { useEffect, useState } from 'react';
import ProductsItem from './Products-item';
import LikedProductHeader from './Liked-product-header';
import './Product.css';

const LikedItemsPage = () => {
    const [likedItems, setLikedItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [isGridView, setIsGridView] = useState(false);
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
        const storedLikedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];

        setLikedItems(storedLikedItems);
        setProducts(sortProducts(sortCriteria, storedProducts));

        console.log('Liked Items:', storedLikedItems);
        console.log('Stored Products:', storedProducts);
    }, [sortCriteria]); 

    useEffect(() => {
        setProducts((prevProducts) => sortProducts(sortCriteria, prevProducts));
    }, [sortCriteria]);

    const toggleView = () => {
        setIsGridView(!isGridView);
    };

    const likedProducts = products.filter(product => likedItems.includes(product.id.toString()));

    return (
        <div className="product">
            <LikedProductHeader
                toggleView={toggleView}
                isGridView={isGridView}
                setSortCriteria={setSortCriteria}
            />
            <h1>Liked Products:</h1>
            <div className={isGridView ? 'gridContainer' : 'listContainer'}>
                {likedProducts.map(product => (
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

export default LikedItemsPage;
