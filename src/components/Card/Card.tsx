import React from "react";
import { NavLink } from "react-router-dom";
import greenCart from "../../assets/images/greenCart.svg";
import { IProducts } from "../../models/interfaces/categories";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
type Props = {
  data: IProducts[];
};
const Card: React.FC<Props> = ({ data }) => {
  const { currentCurrency } = useSelector((state: RootState) => state.products);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="card p-3 font-raleway flex flex-col my-5 hover:shadow-2xl translate-y-5 transition  duration-300 cursor-pointer"
            >
              <NavLink
                to={`/Product/${item.id}`}
                className={"flex justify-center items-center"}
              >
                <img
                  src={item.gallery[0]}
                  alt="Product Img"
                  className="h-[300px]"
                />
              </NavLink>

              <NavLink
                to={`/Product/${item.id}`}
                className="cart relative cursor-pointer hidden transition duration-300"
              >
                <img
                  src={greenCart}
                  alt="Cart"
                  className="absolute -bottom-10 right-0 md:w-16 md:h-16 md:-bottom-9"
                />
              </NavLink>

              <div className="py-5">
                <h2 className="font-normal text-lg">{item.name}</h2>
                <p className="font-semibold text-lg">
                  {(item as IProducts).prices.map(({ currency, amount }) =>
                    currency.label === currentCurrency.label ? (
                      <>{currency.symbol + " " + amount}</>
                    ) : null
                  )}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
