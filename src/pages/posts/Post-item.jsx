import React from 'react';

const PostItem = ({title, body}) => {
    return (
        <div className='postItemContainer'>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
}

export default PostItem;
