import React, { useState } from 'react';
import './Product.css';

const ProductAdd = () => {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm((prevShowForm) => !prevShowForm);
    };
    return (
        <div>
            <button onClick={toggleForm}>
                {showForm ? 'Hide Form' : 'Show Form'}
            </button>
            {showForm && (
                <form className='addProductForm'>
                    <div>
                        <label>
                            Product Name:                            
                        </label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>
                            Product Price:                            
                        </label>
                        <input type="number" />
                    </div>
                    <div>
                        <label>
                            Product Availability:                            
                        </label>
                        <input type="number" />
                    </div>
                    <div>
                        <label>
                            Product Img link:                            
                        </label>
                        <input type="number" />
                    </div>
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
