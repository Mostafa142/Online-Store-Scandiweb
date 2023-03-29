import React from "react";
import { NavLink } from "react-router-dom";
import greenCart from "../../assets/images/greenCart.svg";
import { IProduct } from "../../models/interfaces/Product";
type Props = {
  data: IProduct[];
};
const Card: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="card p-3 font-raleway flex flex-col my-5 hover:shadow-2xl translate-y-5 transition  duration-300 cursor-pointer"
            >
              <NavLink to="/Product">
                <img src={item.img} alt="Product Img" className="w-full" />
              </NavLink>

              <NavLink
                to="/Product"
                className="cart relative cursor-pointer hidden transition duration-300"
              >
                <img
                  src={greenCart}
                  alt="Cart"
                  className="absolute -bottom-10 right-0 md:w-16 md:h-16 md:-bottom-9"
                />
              </NavLink>

              <div className="py-5">
                <h2 className="font-normal text-lg">Apollo Running Short</h2>
                <p className="font-semibold text-lg">$50.00</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
