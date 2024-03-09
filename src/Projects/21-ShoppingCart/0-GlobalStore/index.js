import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cart";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
