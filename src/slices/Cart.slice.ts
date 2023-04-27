import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProducts } from "../models/interfaces/categories";

interface CartState {
  cartList: IProducts[];
  cartCounter: number;
}
interface AddToCartPayload {
  cartItem: IProducts;
}
interface IncrementItemCountPayload {
  cartProd: IProducts;
}
interface DecrementItemCountPayload {
  cartProd: IProducts;
}
const initialState: CartState = {
  cartList: [],
  cartCounter: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementCartCounter: (state) => {
      state.cartCounter += 1;
    },
    decrementCartCounter: (state) => {
      state.cartCounter -= 1;
    },
  
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      state.cartList.push(action.payload.cartItem);
    },
    incrementItemCount: (
      state,
      action: PayloadAction<IncrementItemCountPayload>
    ) => {
      const { id, attributes } = action.payload.cartProd;
      const cartItemCount = state.cartList.find(
        (item) =>
          item.id === id &&
          item.attributes.every((selec, i) => {
            return selec.selected === attributes[i].selected;
          })
      );
      if (cartItemCount) {
        cartItemCount.itemCount += 1;
      }
    },
    decrementItemCount: (
      state,
      action: PayloadAction<DecrementItemCountPayload>
    ) => {
      const { id, attributes } = action.payload.cartProd;
      const cartItemCount = state.cartList.find(
        (item) =>
          item.id === id &&
          item.attributes.every((selec, i) => {
            return selec.selected === attributes[i].selected;
          })
      );
      if (cartItemCount && cartItemCount.itemCount > 1) {
        cartItemCount.itemCount -= 1;
      }
    },
  },
});
export const {
  addToCart,
  incrementItemCount,
  decrementItemCount,
  decrementCartCounter,
  incrementCartCounter,
} = cartSlice.actions;
export const CartReducer = cartSlice.reducer;
