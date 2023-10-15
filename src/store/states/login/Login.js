import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react-dom/test-utils";

const initialState = {
    email: '',
    password: '',
};

/// Fetch Data-----
export const fetchAllProducts = createAsyncThunk(
    "products/fetchProducts",
    async (data) => {
        const resp = await axios.post("api", data);
        return resp.data;
    }
);
//------------------
const Login = createSlice({
    name: "products/allproducts",
    initialState: initialState,
    reducers: {
        FormData: (state, action) => {
            const { prop, value } = action.payload;
            state[prop] = value;
        },
    },
});

export const { FormData } = Login.actions;
export default Login.reducer;