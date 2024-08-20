import React, { useEffect, useState, useMemo } from 'react';
import { productInfo } from './productInfo';
import ProductsItem from './Products-item';
import './Product.css';
import ProductHeader from './Product-header';

const ProductGrid = () => {
    const [products, setProducts] = useState([]);
    const [isGridView, setIsGridView] = useState(true);
    const [sortCriteria, setSortCriteria] = useState('name');
    const [liked, setLiked] = useState(false);
    const [cart, setCart] = useState(false);


    const toggleView = () => {
        setIsGridView(prevState => !prevState);
    };


    useEffect(() => {
        const storedProducts = localStorage.getItem('products');
        const storedLikedItems = localStorage.getItem('likedItems');
        const storedCartItems = localStorage.getItem('cartItems');

        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        } else {
            localStorage.setItem('products', JSON.stringify(productInfo));
            setProducts(productInfo);
        }

        setLiked(storedLikedItems ? JSON.parse(storedLikedItems) : []);
        setCart(storedCartItems ? JSON.parse(storedCartItems) : []);

    }, []);
    const toggleLiked = (productId) => {
        const updatedLiked = liked.includes(productId)
            ? liked.filter(id => id !== productId)
            : [...liked, productId];
        
        setLiked(updatedLiked);
        localStorage.setItem('likedItems', JSON.stringify(updatedLiked));
    };

    const toggleCart = (productId) => {
        const updatedCart = cart.includes(productId)
            ? cart.filter(id => id !== productId)
            : [...cart, productId];
        
        setCart(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };
    const sortedProducts = useMemo(() => {
        if (products.length === 0) return products;

        let sorted = [...products];
        if (sortCriteria === 'name') {
            sorted.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortCriteria === 'price') {
            sorted.sort((a, b) => a.price - b.price);
        }
        return sorted;
    }, [products, sortCriteria]);

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(sortedProducts));
    }, [sortedProducts]);

    const addProduct = (title, imgSrc, price, details, items) => {
        const newProduct = {
            id: products.length + 1,
            title,
            imgSrc,
            price,
            details,
            items: parseInt(items, 10)
        };
        const updatedProducts = [...products, newProduct];
        setProducts(updatedProducts);

        localStorage.setItem('products', JSON.stringify(updatedProducts));
    };
    const cartProducts = products.filter(product => cart.includes(product.id.toString()));
    return (
        <div className="product">
            <ProductHeader
                addProduct={addProduct}
                toggleView={toggleView}
                isGridView={isGridView}
                setSortCriteria={setSortCriteria}
                likedCount={liked.length || 0}
                cartCount={cart.length || 0}
                cartProducts={cartProducts}
            />
            <div className={isGridView ? 'gridContainer' : 'listContainer'}>
                {sortedProducts.map(product => (
                    <ProductsItem
                        key={product.id}
                        id={product.id}
                        imgSrc={product.imgSrc}
                        title={product.title}
                        price={product.price}
                        items={product.items}
                        details={product.details}
                        isGridView={isGridView}
                        isLiked={liked.includes(product.id.toString())}
                        isCart={cart.includes(product.id.toString())}
                        toggleCart={toggleCart}
                        toggleLiked={toggleLiked}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;
