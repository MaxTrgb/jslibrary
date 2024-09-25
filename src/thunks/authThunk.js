import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setToken } from "../utils/token";

export const login = createAsyncThunk('auth/login', async (data) => {
    const response = await axios.post('http://localhost:4000/api/auth/login', data);
    setToken(response.data.token);
    return response.data;
})