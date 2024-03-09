import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
            console.log(state);
        },
        removeToCart(state, action) {
            console.log(action);
        },
    },
});

export default cart.reducer;

export const { addToCart, removeFromCart } = cart.actions;
