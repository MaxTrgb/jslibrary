import React, { useEffect, useState } from 'react';
import PostItem from './Post-item';
import PostCreate from './Post-create';
import './Posts.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/posts');
                const postsData = await response.json();

                const mappedPosts = postsData.map(post => ({
                    title: post.title,
                    body: post.body
                }));

                setPosts(mappedPosts); 
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    const addPost = async (newPost) => {
        try {
            const response = await fetch('http://localhost:4000/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newPost)
            });

            if (!response.ok) {
                throw new Error('Failed to add post');
            }

            const savedPost = await response.json();
            
            
            setPosts(prevPosts => [...prevPosts, savedPost]);
        } catch (error) {
            console.error('Error adding post:', error);
        }
    };

    return (
        <div className='postsContainer'>
            <h1>Posts</h1>
            {posts.map((post, index) => (
                <PostItem key={index} title={post.title} body={post.body} />
            ))}

            <PostCreate onAddPost={addPost} />
        </div>
    );
}

export default Posts;
