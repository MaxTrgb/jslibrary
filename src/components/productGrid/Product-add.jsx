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
                <form>
                    <div>
                        <label>
                            Product Name:
                            <input type="text" />
                        </label>
                    </div>
                    <div>
                        <label>
                            Product Price:
                            <input type="number" />
                        </label>
                    </div>
                </form>
            )}
        </div>
    );
};

export default ProductAdd;
