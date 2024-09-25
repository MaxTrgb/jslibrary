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
                    _id: post._id,
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
    const handleDelete = async (index) => {
        const postId = posts[index]._id; 
    
        try {
            const response = await fetch(`http://localhost:4000/api/posts/${postId}`, {
                method: 'DELETE'
            });
    
            if (!response.ok) {
                throw new Error('Failed to delete post');
            }
    
            
            setPosts(prevPosts => prevPosts.filter((_, i) => i !== index));
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };
    const handleEdit = async (index) => {
        const postId = posts[index]._id;        
        const newBody = prompt('Enter new body:', posts[index].body);
    
        if (newBody) {
            try {
                const response = await fetch(`http://localhost:4000/api/posts/${postId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ body: newBody }),
                });
    
                if (!response.ok) {
                    throw new Error('Failed to update post');
                }
    
             
                const updatedPost = await response.json();
                setPosts(prevPosts =>
                    prevPosts.map((post, i) =>
                        i === index ? updatedPost : post
                    )
                );
            } catch (error) {
                console.error('Error updating post:', error);
            }
        }
    };
    
    return (
        <div className='postsContainer'>
        <h1>Posts</h1>
        {posts.map((post, index) => (
            <PostItem
                key={index}
                title={post.title}
                body={post.body}
                onDelete={() => handleDelete(index)}
                onEdit={() => handleEdit(index)}
            />
        ))}

        <PostCreate onAddPost={addPost} />
    </div>
    );
}

export default Posts;
