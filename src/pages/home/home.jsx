import React from 'react';

const Home = () => {
    return (
        <div className='homeContentConatainer'>
            <p>Welcome to Home Page</p>
            <h2>Navigation:</h2>
            <ul>
                <li><a href="/todo">ToDo List</a></li>
                <li><a href="/products">Products shop</a></li>
                <li><a href="/magicball">Magic Ball</a></li>
            </ul>
        </div>
    );
};

export default Home;