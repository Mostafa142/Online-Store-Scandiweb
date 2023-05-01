import { configureStore } from "@reduxjs/toolkit";
import { CartReducer } from "../slices/Cart.slice";
import { ProductReducer } from "../slices/Products.slice";
// This is our Store
const store = configureStore({
  reducer: { cart: CartReducer, products: ProductReducer },
});

export default store;
