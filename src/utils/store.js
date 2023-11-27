import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartReducer from './cartSlice';
import userReducer from './userSlice';

const store = configureStore({
    reducer: {
        product: productSlice,
        cart: cartReducer,
        user: userReducer
    }
})

export default store