
import axios from "axios";

export const getUsers = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data;
}  

export const getUser = async ({params}) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    return data;
}
export const getPosts = async () => {
    const { data } = await axios.get('http://localhost:4000/api/posts');
    return data;
};

export const createPost = async (newPost) => {
    const { data } = await axios.post('http://localhost:4000/api/posts', newPost, {
        headers: { 'Content-Type': 'application/json' }
    });
    return data;
};

export const deletePost = async (postId) => {
    await axios.delete(`http://localhost:4000/api/posts/${postId}`);
};

export const updatePost = async (postId, updatedPost) => {
    const { data } = await axios.put(`http://localhost:4000/api/posts/${postId}`, updatedPost, {
        headers: { 'Content-Type': 'application/json' }
    });
    return data;
};