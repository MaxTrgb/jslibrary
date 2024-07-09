import React from 'react';

function ProductFormItem({ title, value, onChange }) {
    return (
        <div className='productFormItem'>
            <label>
               {title}
            </label>
            <input type="text" value={value} onChange={onChange} />
        </div>
    );
}

export default ProductFormItem;
