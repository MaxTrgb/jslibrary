import React, { useState } from 'react'; 

function ProductDetails({details}) { 

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm((prevShowForm) => !prevShowForm);
    };
    return (
        <div>
            <button className='detailsButton' onClick={toggleForm}>
                {showForm ? 'Details' : 'Details'}
            </button>
            {showForm && (
                <form className='productDetails'>{details} </form>
            )}
        </div>
    );
}

export default ProductDetails;