import React, { useState } from "react";
import { ICURRENCIES, IProducts } from "../../models/interfaces/categories";
import downArrow from "../../assets/images/downArrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { CURRENCY } from "../../models/enums/currency";
import { changeCurrency } from "../../slices/Products.slice";
type Props = {
  currencies: ICURRENCIES[];
};
const CurrencyList: React.FC<Props> = ({ currencies }) => {
  const [showCurrency, setShowCurrency] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { currentCurrency } = useSelector(
    (state: {
      cart: { cartList: IProducts[]; cartCounter: number };
      products: { products: IProducts[]; currentCurrency: ICURRENCIES };
    }) => state.products
  );

  const selectCurrency = (currency: (typeof CURRENCY)[number]) => {
    dispatch(changeCurrency(currency));
    setShowCurrency(false);
  };

  return (
    <>
      <div className="flex gap-2 items-center ">
        <p>{currentCurrency.symbol}</p>
        <img
          src={downArrow}
          alt="CURRENCY"
          className={`cursor-pointer`}
          onClick={() => setShowCurrency(!showCurrency)}
        />
      </div>

      {showCurrency ? (
        <div className={`shadow-lg py-2 absolute top-14 `}>
          {currencies.map((item) => {
            return (
              <div
                key={item.symbol}
                className={`flex font-semibold py-2 px-7 hover:bg-gray cursor-pointer ${
                  item.label === currentCurrency.label && "bg-gray"
                }`}
                onClick={() => selectCurrency(item)}
              >
                {item.symbol + " " + item.label}
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CurrencyList;
