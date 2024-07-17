import React, { useState } from 'react';
import './Product.css';
import ProductFormItem from './Product-form-item';
import gridIcon from './assets/apps-grid-icon.png'
import listIcon from './assets/images.png'

const ProductAdd = ({ addProduct, toggleView, isGridView, setSortCriteria }) => {
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
            <div className='sortAndView'>
                <div className='sortMenu'>
                    <button onClick={()=>setSortCriteria('name')}>Sort By Name</button>
                    <button onClick={()=>setSortCriteria('price')}>Sort By Price</button>
                </div>
                <div className='viewButtons'>
                    <button className='gridView' onClick={()=> toggleView(true)}>
                        <img src={gridIcon} alt="Grid View" />
                    </button>

                    <button className='listView' onClick={()=> toggleView(false)}>
                        <img src={listIcon} alt="List View" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductAdd;
