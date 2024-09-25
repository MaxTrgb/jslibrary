import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async () => {
        const response = await axios.get('http://localhost:4000/api/posts');
        return response.data;
    }
)

export const createPost = createAsyncThunk(
    "posts/createPost",
    async (newPost) => {
        const response = await axios.post('http://localhost:4000/api/posts', newPost);
        return response.data;
    }
)   

export const updatePost = createAsyncThunk(
    "posts/updatePost",
    async (updatedPost) => {
        const response = await axios.put(`http://localhost:4000/api/posts/${updatedPost._id}`, updatedPost);
        return response.data;
    }
)

export const deletePost = createAsyncThunk(
    "posts/deletePost",
    async (postId) => {
        const response = await axios.delete(`http://localhost:4000/api/posts/${postId}`);
        return response.data;
    }
)


