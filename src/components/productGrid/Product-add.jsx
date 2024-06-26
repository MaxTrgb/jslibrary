import React, { useState } from 'react';
import './Product.css';
import ProductFormItem from './Product-form-item';

const ProductAdd = () => {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm((prevShowForm) => !prevShowForm);
    };
    return (
        <div>
            <button onClick={toggleForm}>
                {showForm ? 'Close' : 'Add product'}
            </button>
            {showForm && (
                <form className='addProductForm'>
                    <ProductFormItem title="Product Name:" />
                    <ProductFormItem title="Product Price:" />
                    <ProductFormItem title="Product Img link:" />
                    <ProductFormItem title="Product Quantity:" />
                    <div>
                        <button>
                            Add Product
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default ProductAdd;