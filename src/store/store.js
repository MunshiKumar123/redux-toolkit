import { configureStore } from "@reduxjs/toolkit";
import Login from "./states/login/Login";
import Product from "./states/product/Product";

const store = configureStore({
    reducer: {
        login: Login,
        product: Product
    },
});

export default store;