import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    noOfPlants: '',
    noOfOffices: '',
    InNoOfPlants: '',
    InNoOfOffices: '',
    pro: []
};

/// Fetch Data-----
export const fetchAllProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        try {
            const token = localStorage.getItem('token')
            const resp = await axios.get("api", {
                headers: {
                    'x-access-token': token,
                    'Content-Type': 'application/json'
                }
            });
            return resp?.data?.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const productPost = createAsyncThunk(
    "products/fetchProducts",
    async (data) => {
        try {
            const token = localStorage.getItem('token')
            const resp = await axios.post("api", data, {
                headers: {
                    'x-access-token': token,
                    'Content-Type': 'application/json'
                }
            });
            // return resp?.data?.data;
        } catch (error) {
            console.log(error);
        }
    }
);

//------------------
const Product = createSlice({
    name: "products/allproducts",
    initialState: initialState,
    reducers: {
        FormData: (state, action) => {
            const { prop, value } = action.payload;
            state[prop] = value;
        },
    },
    extraReducers: {
        [fetchAllProducts.fulfilled]: (state, acttion) => {
            state.pro = acttion.payload;
        },
    },
});

export const { FormData } = Product.actions;
export default Product.reducer;