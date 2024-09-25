import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slices/counterSlice';
import postsReducer from '../slices/postsSlice';
import authReducer from '../slices/authSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        auth: authReducer
    }
});


export default store;