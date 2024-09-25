import { createSlice } from '@reduxjs/toolkit';
import { login } from '../thunks/authThunk';

const initialState = {
    user: {},
    token: null,
    status: 'idle',
    error: null
}

export const authSlice = createSlice ({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})

export default authSlice.reducer