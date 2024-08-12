import React from 'react';

const LikedItemsShow = ({ likedItems }) => {
    return (
        <div>
            {likedItems.length > 0 ? (
                likedItems.map((itemId, index) => (
                    <p key={index}>Liked item ID: {itemId}</p>
                ))
            ) : (
                <p>No liked items.</p>
            )}
        </div>
    );
};


export default LikedItemsShow;
