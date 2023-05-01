import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CURRENCY } from "../models/enums/currency";
import { ICURRENCIES, IProducts } from "../models/interfaces/categories";

interface ProductState {
  products: IProducts[];
  currentCurrency: ICURRENCIES;
}

const initialState: ProductState = {
  products: [],
  currentCurrency:
    JSON.parse(localStorage.getItem("currency") as string) || CURRENCY[0],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeCurrency: (state, action: PayloadAction<ICURRENCIES>) => {
      localStorage.setItem("currency", JSON.stringify(action.payload));
      state.currentCurrency = action.payload;
    },
  },
});

export const { changeCurrency } = productSlice.actions;
export const ProductReducer = productSlice.reducer;
