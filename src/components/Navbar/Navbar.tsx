import logo from "../.././assets/images/icon.svg";
import cart from "../.././assets/images/cart.svg";
import downArrow from "../.././assets/images/downArrow.svg";
import menu from "../.././assets/images/menu.svg";
import close from "../.././assets/images/close.svg";

import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import NavCart from "../NavCart/NavCart";
import { useSelector } from "react-redux";
import { ICURRENCIES, IProducts } from "../../models/interfaces/categories";
import { useQuery } from "@apollo/client";
import { GET_PRICES } from "../../Queries/Queries";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showCurrency, setShowCurrency] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);
  const { cartCounter } = useSelector(
    (state: { cart: { cartList: IProducts[]; cartCounter: number } }) =>
      state.cart
  );
  const currency = [
    {
      icon: "$",
      name: "USD",
    },
    {
      icon: "€",
      name: "EUR",
    },
    {
      icon: "¥",
      name: "JPY",
    },
  ];

  // Currency
  const { data } = useQuery(GET_PRICES);
  console.log("--------------------------");
  console.log(data);

  // Cart Vidiblity
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleDropDownFocus = (state: boolean) => {
    setShowCart(!state);
  };
  const handleClickOutsideDropdown = (e: any) => {
    if (showCart && !dropdownRef.current?.contains(e.target as Node)) {
      setShowCart(false);
    }
  };
  window.addEventListener("click", handleClickOutsideDropdown);

  return (
    <>
      <nav className="flex justify-between py-5 items-center">
        <div className="md:flex gap-10 items-center hidden">
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

        <div className="md:flex gap-10 hidden">
          <div className="flex gap-2 items-center ">
            <p>$</p>
            <img
              src={downArrow}
              alt="CURRENCY"
              className={`cursor-pointer `}
              onClick={() => setShowCurrency(!showCurrency)}
            />
          </div>

          {showCurrency ? (
            <div className={`shadow-lg py-2 absolute top-14 `}>
              {data.currencies.map((item: ICURRENCIES) => {
                return (
                  <div
                    key={item.symbol}
                    className="flex font-semibold py-2 px-7 hover:bg-gray cursor-pointer"
                  >
                    {item.label}
                    {/* <p
                      onClick={() => setShowCurrency(!showCurrency)}
                    >{`$ ${}`}</p> */}
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}

          <div className="relative cursor-pointer">
            <div ref={dropdownRef}>
              <img
                src={cart}
                alt="CART"
                onClick={(e) => handleDropDownFocus(showCart)}
              />
            </div>
            <div className="absolute w-5 -top-3 -right-3 rounded-full bg-green text-center text-sm">
              {cartCounter}
            </div>
          </div>

          {showCart ? <NavCart /> : ""}
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
        <div className="flex flex-col items-center md:hidden gap-8">
          <div className="flex gap-5 items-center ">
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
          <div className="flex gap-10">
            <div className="flex gap-2 items-center ">
              <p>$</p>
              <img
                src={downArrow}
                alt="CURRENCY"
                className="cursor-pointer"
                onClick={() => setShowCurrency(!showCurrency)}
              />
            </div>
            {showCurrency ? (
              <div className={`shadow-lg py-2 absolute top-44 z-10 bg-white`}>
                {currency.map((item) => {
                  return (
                    <div
                      key={item.name}
                      className="flex font-semibold py-2 px-7 hover:bg-gray cursor-pointer "
                    >
                      <p
                        onClick={() => setShowCurrency(!showCurrency)}
                      >{`${item.icon} ${item.name}`}</p>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}

            <div className="relative">
              <img
                src={cart}
                alt="CART"
                className="cursor-pointer"
                onClick={() => setShowCart(!showCart)}
              />
              <div className="absolute w-5 -top-3 -right-3 rounded-full bg-green text-center text-sm">
                {cartCounter}
              </div>
            </div>
            {showCart ? <NavCart /> : ""}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
