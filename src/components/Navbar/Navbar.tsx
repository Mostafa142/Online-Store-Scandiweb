import logo from "../.././assets/images/icon.svg";
import cart from "../.././assets/images/cart.svg";
import menu from "../.././assets/images/menu.svg";
import close from "../.././assets/images/close.svg";

import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import NavCart from "../NavCart/NavCart";
import { useSelector } from "react-redux";
import { IProducts } from "../../models/interfaces/categories";
import { useQuery } from "@apollo/client";
import { GET_PRICES } from "../../Queries/Queries";
import CurrencyList from "../CurrencyList/CurrencyList";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);
  const { cartCounter } = useSelector(
    (state: { cart: { cartList: IProducts[]; cartCounter: number } }) =>
      state.cart
  );

  // Currency
  const { data } = useQuery(GET_PRICES);
  console.log("--------------------------");
  console.log(data);

  return (
    <>
      <nav className="flex justify-between py-5 items-center">
        <div className="md:flex gap-10 items-center hidden text-lg font-bold">
          <NavLink to="/">
            <p className="uppercase">All</p>
          </NavLink>
          <NavLink to="/Tech">
            <p className="uppercase">Tech</p>
          </NavLink>
          <NavLink to="/Clothes">
            <p className="uppercase">Clothes</p>
          </NavLink>
        </div>

        <img src={logo} alt="LOGO" />
        <div className="md:flex gap-6 hidden items-center">
          <CurrencyList currencies={data?.currencies} type="BigScreen" />
          <div className="relative cursor-pointer">
            <div>
              <img
                src={cart}
                alt="CART"
                onClick={() => setShowCart((state) => !state)}
              />
            </div>
            <div className="absolute w-5 -top-3 -right-3 rounded-full bg-green text-center text-sm">
              {cartCounter}
            </div>
          </div>

          {showCart ? <NavCart type="BigScreen" /> : ""}
        </div>

        <div className="md:hidden flex">
          <img
            src={`${showMenu ? close : menu}`}
            alt="Menu"
            className="w-8 cursor-pointer "
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </nav>

      {showMenu ? (
        <div className="flex flex-col items-center md:hidden gap-8 ">
          <div className="flex gap-5 items-center text-lg font-bold">
            <NavLink to="/">
              <p className="uppercase">All</p>
            </NavLink>
            <NavLink to="/Tech">
              <p className="uppercase">Tech</p>
            </NavLink>
            <NavLink to="/Clothes">
              <p className="uppercase">Clothes</p>
            </NavLink>
          </div>
          <div className="flex gap-6 items-center">
            <CurrencyList currencies={data?.currencies} type="SmallScreen" />

            <div className="relative cursor-pointer">
              <div>
                <img
                  src={cart}
                  alt="CART"
                  onClick={(e) => setShowCart((state) => !state)}
                />
              </div>
              <div className="absolute w-5 -top-3 -right-3 rounded-full bg-green text-center text-sm">
                {cartCounter}
              </div>
            </div>
            {showCart ? <NavCart type="SmallScreen" /> : ""}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
