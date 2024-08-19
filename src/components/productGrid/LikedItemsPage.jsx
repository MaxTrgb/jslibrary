import React, { useEffect, useState } from 'react';

const LikedItemsPage = () => {
    const [likedItems, setLikedItems] = useState([]);

    useEffect(() => {
        const storedLikedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
        setLikedItems(storedLikedItems);
    }, []);

    return (
        <div>
            <h1>Liked Items</h1>
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

export default LikedItemsPage;