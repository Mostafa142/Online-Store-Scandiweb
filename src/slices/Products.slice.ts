import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetAllProducts } from "../middlewares/Products/GetAllProducts";
import { ICategories } from "../models/interfaces/categories";

interface ProductsState {
  loading: boolean;
  errorMessage: null | string | undefined;
  categories: ICategories[];
}

const initialState: ProductsState = {
  loading: false,
  errorMessage: null,
  categories: [],
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAllProducts.pending, (state) => {
      state.loading = true;
      state.errorMessage = null;
    });
    builder.addCase(
      GetAllProducts.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        state.categories = payload;
        state.errorMessage = null;
        state.loading = false;
      }
    );
    builder.addCase(GetAllProducts.rejected, (state, { payload }) => {
      state.errorMessage = null;
      state.loading = false;
    });
  },
});

export const ProductsReducer = ProductsSlice.reducer;
