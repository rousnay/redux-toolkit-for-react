import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    cartProductIds: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartProductIds = [action.payload, ...state.cartProductIds];
    },
    removeFromCart: (state, action) => {
      const indexOfProductId = state.cartProductIds.indexOf(action.payload);
      state.cartProductIds.splice(indexOfProductId, 1);
    },
    clearAllItems: (state) => {
      state.cartProductIds = [];
    },
  },
});

// const {action: cartActions, reducers: cartReducer}= cartSlice;

export default cartSlice;
