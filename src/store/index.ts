import { configureStore } from "@reduxjs/toolkit";
import { CartReducer } from "../slices/Cart.slice";
// This is our Store
const store = configureStore({
  reducer: { cart: CartReducer },
});

export default store;
