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
        const fetchLikedProducts = async () => {
            try {
                const storedLikedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
                setLikedItems(storedLikedItems);

                const response = await fetch('https://fakestoreapi.com/products');
                const apiProducts = await response.json();

                const likedProducts = apiProducts.filter(product =>
                    storedLikedItems.includes(product.id.toString())
                ).map(product => ({
                    id: product.id,
                    imgSrc: product.image,
                    title: product.title,
                    price: product.price,
                    details: product.description,
                    items: product.rating.count
                }));

                setProducts(sortProducts(sortCriteria, likedProducts));
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchLikedProducts();
    }, [sortCriteria]);



    const toggleView = () => {
        setIsGridView(!isGridView);
    };

    const likedProducts = products.filter(product => likedItems.includes(product.id.toString()));
    const calculatePosition = (index) => {
        const itemsPerRow = 6;
        const itemWidth = 250;
        const itemHeight = 550;
        const gap = 10;
        const row = Math.floor(index / itemsPerRow);
        const column = index % itemsPerRow;

        return {
            top: `${row * (itemHeight + gap)}px`,
            left: `${column * (itemWidth + gap)}px`
        };
    };
    return (
        <div className="product">
            <LikedProductHeader
                toggleView={toggleView}
                isGridView={isGridView}
                setSortCriteria={setSortCriteria}
            />
            <h1>Liked Products:</h1>
            
            <div className={isGridView ? 'gridContainer' : 'listContainer'}>
                {likedProducts.map((product, index) => {
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

export default LikedItemsPage;
