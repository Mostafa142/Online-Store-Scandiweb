import { configureStore } from "@reduxjs/toolkit";
import { GetAllProducts } from "../middlewares/Products/GetAllProducts";
import { ProductsReducer } from "../slices/Products.slice";
// This is our Store
const store = configureStore({
  reducer: { products: ProductsReducer },
});

// store.dispatch(GetAllProducts());
export default store;
