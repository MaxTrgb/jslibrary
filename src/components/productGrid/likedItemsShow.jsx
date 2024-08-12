import React, {useState, useEffect} from 'react';

const LikedItemsShow = () => {
    const [likedItems, setLikedItems] = useState([]);

    useEffect(() => {
        const storedLikedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
        setLikedItems(storedLikedItems);
    }, []);

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
}

export default LikedItemsShow;
