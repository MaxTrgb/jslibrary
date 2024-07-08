import React from 'react';

function ProductFormItem({title}) {
    return (
        <div className='productFormItem'>
            <label>
               {title}
            </label>
            <input type="text" />
        </div>
    );
}

export default ProductFormItem;