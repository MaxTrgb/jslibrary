import React, { useState } from 'react';

const PostCreate = ({ onAddPost }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        
        const newPost = {
            title: title,
            body: body
        };

     
        onAddPost(newPost);

        
        setTitle('');
        setBody('');
    };

    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Post Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Post Body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                />
                <button type="submit">Add Post</button>
            </form>
        </div>
    );
};

export default PostCreate;
