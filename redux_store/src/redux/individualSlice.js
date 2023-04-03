import { createSlice } from "@reduxjs/toolkit";

const initialState={
    product:{},
}

const individualSlice = createSlice({
    name: "products",
    initialState,
  
    reducers: {
      // =========== add item ============
      selectItem(state, action) {
        state.product=action.payload
      },
      removeItem(state, action) {
        state.product={};
      },
  
    },
  });
  
  export const individualActions = individualSlice.actions;
  export default individualSlice;