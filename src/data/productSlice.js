import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchAllProducts = createAsyncThunk(
  "fetch-all-products",
  async (apiURL) => {
    const response = await fetch(apiURL);
    return response.json();
  }
);

const productSlice = {
  name: "products",
  initialState: { data: [], fetchState: "" },
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.fetchState = "success";
      })
      .addCase(fetchAllProducts.panding, (state) => {
        state.fetchState = "loading";
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.fetchState = "error";
      });
  },
};

export default productSlice;
