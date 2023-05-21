import React from "react";
import { useSelector } from "react-redux";
import { IPrice, IProducts } from "../../models/interfaces/categories";
import { RootState } from "../../store";

const TotalCost = () => {
  const { cartList } = useSelector(
    (state: { cart: { cartList: IProducts[]; cartCounter: number } }) =>
      state.cart
  );
  const { currentCurrency } = useSelector((state: RootState) => state.products);
  const exchangePrice = (prices: IPrice[]) => {
    const selectedPrice = prices.find(
      (value) => value.currency.label === currentCurrency.label
    );
    return selectedPrice?.amount || 0;
  };
  const calcTotalPrice = () => {
    return cartList
      .reduce(
        (prev, curr) => prev + curr.itemCount * exchangePrice(curr.prices),
        0
      )
      .toFixed(2);
  };

  return (
    <span className="font-extrabold text-xl">
      {currentCurrency.symbol + "" + calcTotalPrice()}
    </span>
  );
};

export default TotalCost;
