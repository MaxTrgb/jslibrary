import React, { useEffect, useState } from 'react';
import { productInfo } from './productInfo';
import ProductsItem from './Products-item';
import './Product.css';
import ProductAdd from './Product-add';

const ProductGrid = () => {
    const [products, setProducts] = useState([]);
    const [isGridView, setIsGridView] = useState(true);

    const toggleView = ()=>{
        setIsGridView(!isGridView);
    }
    useEffect(()=> {
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
          setProducts(JSON.parse(storedProducts));
        }
        else{
          setProducts(productInfo);
        }
      },[]);  
    const addProduct = (title, imgSrc, price, details, items) => {
        const newProduct = {
            id: products.length + 1,
            title: title,
            imgSrc: imgSrc,
            price: price,
            details: details,
            items: parseInt(items, 10)
        };
        const updetedProducts = [...products, newProduct];
        setProducts(updetedProducts);
        localStorage.setItem('products', JSON.stringify(updetedProducts));
    };
    
    

    return (
        <div className="product">
        <ProductAdd addProduct={addProduct} toggleView={toggleView} isGridView={isGridView} />
        <div className={isGridView ? 'gridContainer' : 'listContainer'}>
            {products.map(product => (
                <ProductsItem
                    key={product.id}
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
}

export default ProductGrid;
