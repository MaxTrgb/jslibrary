import React, { useState } from 'react';

const ProductAdd = () => {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };
    <div className="addProduct" style={{ visibility: showForm ? 'visible' : 'hidden' }}>
        {<h1>Lorem</h1>
        }
    </div>
    return (
        <div className='addProduct'>
            <form>
                <button onClick={toggleForm}>Add Product</button>
            </form>
        </div>
    );
};

export default ProductAdd;
