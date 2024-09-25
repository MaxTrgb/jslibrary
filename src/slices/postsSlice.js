import { createSlice } from '@reduxjs/toolkit';
import { getPosts } from '../thunks/postsThunk';

const initialState = {
    data: [],
    status: 'idle',
    error: null
}

export const postsSlice = createSlice ({
    name: 'posts',
    initialState,
    extraReducers: (builder)=>{
        builder
            .addCase(getPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export default postsSlice.reducer;