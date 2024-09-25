import React from 'react';

const PostItem = ({ title, body, onDelete, onEdit }) => {
    return (
        <div className='postItemContainer'>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <div className='postItemButtons'>
                <button onClick={onEdit}>Edit</button>
                <button onClick={onDelete}>Delete</button>
            </div>

        </div>
    );
}

export default PostItem;
