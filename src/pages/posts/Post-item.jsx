import React from 'react';

const PostItem = ({ title, body }) => {
    return (
        <div className='postItemContainer'>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <div className='postItemButtons'>
                <button>Edit</button>
                <button>Delete</button>
            </div>

        </div>
    );
}

export default PostItem;
