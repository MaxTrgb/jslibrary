import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counterSlice';
import postReducer from '../slices/postsSlice';

const store = configureStore({
    reducer: {
        couter: counterReducer,
        posts: postReducer
    }
});



export default store;