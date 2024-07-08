import React, { useState } from 'react';
import './Product.css';
import ProductFormItem from './Product-form-item';


const ProductAdd = () => {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm((prevShowForm) => !prevShowForm);
    };
    return (
        <div className='myHeader'>
            <button onClick={toggleForm}>
                {showForm ? 'Close' : 'Add product'}
            </button>
            {showForm && (
                <form className='addProductForm'>
                    <ProductFormItem title="Product Name:" />
                    <ProductFormItem title="Product Price:" />
                    <ProductFormItem title="Product Img link:" />
                    <ProductFormItem title="Product Quantity:" />
                    <div className='addProductButtonCntainer'>
                        <button>
                            Add Product
                        </button>
                    </div>
                </form>
            )}
            <div class="line-1"></div>
        </div>
    );
};

export default ProductAdd;