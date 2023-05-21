import React, { useState } from "react";
import { ICURRENCIES } from "../../models/interfaces/categories";
import downArrow from "../../assets/images/downArrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { CURRENCY } from "../../models/enums/currency";
import { changeCurrency } from "../../slices/Products.slice";
import { RootState } from "../../store";
type Props = {
  currencies: ICURRENCIES[];
  type: String;
};
const CurrencyList: React.FC<Props> = ({ currencies, type }) => {
  const [showCurrency, setShowCurrency] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { currentCurrency } = useSelector((state: RootState) => state.products);

  const selectCurrency = (currency: (typeof CURRENCY)[number]) => {
    dispatch(changeCurrency(currency));
    setShowCurrency(false);
  };

  return (
    <>
      <div className="flex gap-2 items-center border border-green px-3 py-px rounded-xl ">
        <p>{currentCurrency.symbol}</p>
        <img
          src={downArrow}
          alt="CURRENCY"
          className={`cursor-pointer`}
          onClick={() => setShowCurrency(!showCurrency)}
        />
      </div>

      {showCurrency ? (
        <div
          className={`shadow-lg py-2 absolute ${
            type === "SmallScreen" ? "top-44" : " top-14"
          } bg-white border-2 border-green rounded-xl z-10`}
        >
          {currencies.map((item) => {
            return (
              <div
                key={item.symbol}
                className={`flex font-semibold py-2 px-7 hover:bg-green cursor-pointer ${
                  item.label === currentCurrency.label && "bg-green"
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
