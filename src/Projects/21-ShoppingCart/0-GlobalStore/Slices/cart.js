import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push({ ...action.payload, amount: 1 });
        },
        removeFromCart(state, action) {
            return state.filter((obj) => obj.id !== action.payload.id);
        },
        addByOne(state, action) {
            return state.map((obj) =>
                obj.id === action.payload.id
                    ? { ...obj, amount: obj.amount + 1 }
                    : obj,
            );
        },
        removeByOne(state, action) {
            return state.map((obj) =>
                obj.id === action.payload.id
                    ? { ...obj, amount: obj.amount - 1 }
                    : obj,
            );
        },
    },
});

export default cart.reducer;

export const { addToCart, removeFromCart, addByOne, removeByOne } =
    cart.actions;
