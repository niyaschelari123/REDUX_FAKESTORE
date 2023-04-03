import { configureStore } from "@reduxjs/toolkit";
import individualSlice from "./individualSlice";
import productSlice from "./ProductSlice";


const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    individual:individualSlice.reducer,
    
  },
});

export default store;