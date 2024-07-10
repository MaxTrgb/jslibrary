import React, { useState } from 'react';
import './Product.css';
import ProductFormItem from './Product-form-item';

const ProductAdd = ({ addProduct }) => {
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [imgSrc, setImgSrc] = useState('');
    const [items, setItems] = useState('');
    const [details, setDetails] = useState('');

    const addProductHandler = (event) => {      
        event.preventDefault();
        addProduct(title, imgSrc, price, details, items);
        setTitle('');
        setPrice('');
        setImgSrc('');
        setItems('');
        setDetails('');
        setShowForm(false);    
    };
    
    const toggleForm = () => {
        setShowForm((prevShowForm) => !prevShowForm);
    };

    return (
        <div className='myHeader'>
            <button onClick={toggleForm}>
                {showForm ? 'Close' : 'Add product'}
            </button>
            {showForm && (
                <form className='addProductForm' onSubmit={addProductHandler}>
                    <ProductFormItem title="Product Name:" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <ProductFormItem title="Product Price:" value={price} onChange={(e) => setPrice(e.target.value)} />
                    <ProductFormItem title="Product Img link:" value={imgSrc} onChange={(e) => setImgSrc(e.target.value)} />
                    <ProductFormItem title="Product Quantity:" value={items} onChange={(e) => setItems(e.target.value)} />
                    <ProductFormItem title="Product Details:" value={details} onChange={(e) => setDetails(e.target.value)} />
                    <div className='addProductButtonCntainer'>
                        <button type="submit">
                            Add Product
                        </button>
                    </div>
                </form>
            )}            
        </div>
    );
};

export default ProductAdd;
