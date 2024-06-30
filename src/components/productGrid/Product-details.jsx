import React, { useState } from 'react'; 

function ProductDetails({details}) { 

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm((prevShowForm) => !prevShowForm);
    };
    return (
        <div>
            <button onClick={toggleForm}>
                {showForm ? 'Close' : 'Details'}
            </button>
            {showForm && (
                <form className='productDetails'>{details} </form>
            )}
        </div>
    );
}

export default ProductDetails;