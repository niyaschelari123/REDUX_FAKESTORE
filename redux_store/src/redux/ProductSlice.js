import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[],
}

const productSlice = createSlice({
    name: "products",
    initialState,
  
    reducers: {
      // =========== add item ============
      addItem(state, action) {
        state.products=action.payload
      },
  
    },
  });
  
  export const productActions = productSlice.actions;
  export default productSlice;