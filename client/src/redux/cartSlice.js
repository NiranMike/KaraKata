import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsData: [],
    userInfo:null,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.productsData.find((item) => item._id === action.payload._id);
            if (item) {
                item.quantity += 1;
            } else {
                state.productsData.push(action.payload)
            }
        },
        deleteItem: (state, action) => {
            state.productsData = state.productsData.filter((item) => item._id !== action.payload._id);
        },
        resetCart: (state) => {
            state.productsData = [];
        },
        incremeantQuantity: (state, action) => {
            const item = state.productsData.find((item) => item._id === action.payload._id)
            if (item) { 
                item.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.productsData.find((item) => item._id === action.payload._id)
            if (item > 1) { 
                item.quantity -= 1;
            }
        },
    },
});

export const { addToCart,deleteItem,resetCart, incremeantQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;