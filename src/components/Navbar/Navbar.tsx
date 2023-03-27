import logo from "../.././assets/images/icon.svg";
import cart from "../.././assets/images/cart.svg";
import downArrow from "../.././assets/images/downArrow.svg";
import menu from "../.././assets/images/menu.svg";
import close from "../.././assets/images/close.svg";

import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
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
  return (
    <>
      <nav className="flex justify-between py-5 items-center">
        <div className="md:flex gap-10 items-center hidden">
          <NavLink to="#">
            <p className="uppercase">women</p>
          </NavLink>
          <NavLink to="#">
            <p className="uppercase">men</p>
          </NavLink>
          <NavLink to="#">
            <p className="uppercase">kids</p>
          </NavLink>
        </div>

        <img src={logo} alt="LOGO" />

        <div className="md:flex gap-10 hidden">
          <div className="flex gap-2 items-center ">
            <p>$</p>
            <img src={downArrow} alt="CURRENCY" className="cursor-pointer" />
          </div>

          <div>
            <img src={cart} alt="CART" className="cursor-pointer" />
          </div>

          <div className="shadow-lg py-2 absolute top-14 hidden">
            {currency.map((item) => {
              return (
                <div
                  key={item.name}
                  className="flex font-semibold py-2 px-7 hover:bg-gray cursor-pointer"
                >
                  <p>{`${item.icon} ${item.name}`}</p>
                </div>
              );
            })}
          </div>
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
            <NavLink to="#">
              <p className="uppercase">women</p>
            </NavLink>
            <NavLink to="#">
              <p className="uppercase">men</p>
            </NavLink>
            <NavLink to="#">
              <p className="uppercase">kids</p>
            </NavLink>
          </div>
          <div className="flex gap-10">
            <div className="flex gap-2 items-center ">
              <p>$</p>
              <img src={downArrow} alt="CURRENCY" className="cursor-pointer" />
            </div>
            <div>
              <img src={cart} alt="CART" className="cursor-pointer" />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
