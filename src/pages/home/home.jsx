import React, { useEffect } from 'react';

const Home = () => {

    // const getPosts = async () => {
    //     const response = await fetch('http://127.0.0.1:4000/api/posts');
    //     const data = await response.json();
    //     console.log(data);
    // };

    // useEffect(() => {
    //     getPosts();
    // }, []);

    return (
        <div className='homeContentConatainer'>
            <p>Welcome to Home Page</p>
            <h2>Navigation:</h2>
            <ul>
                <li><a href="/todo">ToDo List</a></li>
                <li><a href="/products">Products shop</a></li>
                <li><a href="/magicball">Magic Ball</a></li>
                <li><a href="/users">Users</a></li>
                <li><a href="/posts">Posts</a></li>
            </ul>
        </div>
    );
};

export default Home;