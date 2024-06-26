import React from 'react';

const CheckAvailable = ({ items }) => {
    let itemsStatus;
    if (items > 10) {
        itemsStatus = "Available";
    }
    if (items > 0 && items <= 10) {
        itemsStatus = "Few items left";
    }
    if (items <= 0) {
        itemsStatus = "Not Available";        
    }
    return (
        itemsStatus
    );
}

export default CheckAvailable;