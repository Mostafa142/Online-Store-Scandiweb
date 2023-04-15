import logo from "../.././assets/images/icon.svg";
import cart from "../.././assets/images/cart.svg";
import downArrow from "../.././assets/images/downArrow.svg";
import menu from "../.././assets/images/menu.svg";
import close from "../.././assets/images/close.svg";
import product1 from "../../assets/images/product8.png";
import product2 from "../../assets/images/product7.png";
import plus from "../../assets/images/plus.svg";
import minus from "../../assets/images/minus.svg";

import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCurrency, setShowCurrency] = useState(false);
  const [showCart, setShowCart] = useState(false);

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
  const Products = [
    {
      id: 1,
      title: "Apollo",
      name: "Running Short",
      currency: "$",
      price: "50.00",
      AvailableSizes: ["XS", "S", "M", "L"],
      ChosenSize: "S",
      AvailableColors: ["darkGary", "lightBlack", "darkGreen"],
      ChosenColor: "darkGary",
      img: product1,
      amount: 1,
    },
    {
      id: 2,
      title: "Jupiter",
      name: "Wayfarer",
      currency: "$",
      price: "75.00",
      AvailableSizes: ["S", "M"],
      ChosenSize: "M",
      AvailableColors: ["lightBlack", "darkBlue", "darkOrange"],
      ChosenColor: "lightBlack",
      img: product2,
      amount: 2,
    },
  ];
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
              {currency.map((item) => {
                return (
                  <div
                    key={item.name}
                    className="flex font-semibold py-2 px-7 hover:bg-gray cursor-pointer"
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

          <div>
            <img
              src={cart}
              alt="CART"
              className="cursor-pointer"
              onClick={() => setShowCart(!showCart)}
            />
          </div>

          {showCart ? (
            <div className="absolute font-raleway right-10 top-16 px-5 py-5 z-10 bg-white shadow-lg">
              <h2 className=" font-bold text-base  mb-8">
                My Bag ,{" "}
                <span className="normal-case  font-semibold">3 Items</span>
              </h2>
              {Products.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="flex justify-between pb-8 gap-5">
                      <div>
                        <div className="text-base font-light">
                          {/* Header */}
                          <h3>{item.title}</h3>
                          <p>{item.name}</p>
                        </div>
                        {/* Price */}
                        <p className="font-semibold  my-2 font-raleway text-base">
                          {item.currency}
                          {item.price}
                        </p>
                        {/* Size */}
                        <div className="py-1">
                          <p className="font-medium  pb-1 text-lightBlack font-raleway ">
                            Size:
                          </p>
                          <div className="flex gap-1">
                            {item.AvailableSizes.map((size, index) => {
                              return (
                                <p
                                  key={index}
                                  className={`uppercase w-6 p-px text-center font-normal font-Roboto  border text-sm cursor-pointer ${
                                    size === item.ChosenSize
                                      ? "bg-lightBlack text-white"
                                      : `border-${size} `
                                  }`}
                                >
                                  {size}
                                </p>
                              );
                            })}
                          </div>
                        </div>
                        {/* Color */}
                        <div className="pt-3">
                          <p className=" pb-1 text-lightBlack font-raleway font-medium ">
                            color:
                          </p>
                          <div className="flex gap-1">
                            {item.AvailableColors.map((color, index) => {
                              return (
                                <div
                                  key={index}
                                  className={`border-2 ${
                                    color === item.ChosenColor
                                      ? "border-green"
                                      : "border-transparent"
                                  } cursor-pointer`}
                                >
                                  <p className={`m-px w-4 h-4 bg-${color}`}></p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      {/* Amount */}
                      <div className="flex gap-2 font-raleway font-medium text-3xl">
                        <div className="flex flex-col items-center justify-between">
                          <img
                            src={plus}
                            alt="Plus"
                            className="cursor-pointer w-6 h-6 hover:bg-green"
                          />
                          <p className="font-medium text-lg">{item.amount}</p>
                          <img
                            src={minus}
                            alt="Minus"
                            className="cursor-pointer w-6 h-6 hover:bg-green "
                          />
                        </div>
                        <div>
                          <img
                            src={item.img}
                            alt={item.name}
                            className="h-52"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full border border-green mb-5"></div>
                  </div>
                );
              })}
              <div className="flex flex-col gap-5">
                <div className="flex justify-between mt-2 font-Roboto font-semibold text-base">
                  <p>Total</p>
                  <p className="font-raleway font-bold">$200.00</p>
                </div>

                <div className="grid grid-cols-2 font-raleway font-semibold text-sm gap-5">
                  <NavLink
                    to="/Cart"
                    className="uppercase border border-1 border-lightBlack py-2 text-center hover:bg-black hover:text-white"
                    onClick={() => setShowCart(!showCart)}
                  >
                    view bag
                  </NavLink>
                  <button className="uppercase border border-1 border-transparent bg-green py-2 text-white hover:bg-white hover:text-green hover:border-green">
                    check out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
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
            <NavLink to="/Women">
              <p className="uppercase">women</p>
            </NavLink>
            <NavLink to="/Men">
              <p className="uppercase">men</p>
            </NavLink>
            <NavLink to="/Kids">
              <p className="uppercase">kids</p>
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
            <div>
              <img
                src={cart}
                alt="CART"
                className="cursor-pointer"
                onClick={() => setShowCart(!showCart)}
              />
            </div>
            {showCart ? (
              <div className="absolute font-raleway right-10 top-44 px-5 py-5 z-10 bg-white shadow-lg">
                <h2 className=" font-bold text-base  mb-8">
                  My Bag ,{" "}
                  <span className="normal-case  font-semibold">3 Items</span>
                </h2>
                {Products.map((item) => {
                  return (
                    <div key={item.id}>
                      <div className="flex justify-between pb-8 gap-5">
                        <div>
                          <div className="text-base font-light">
                            {/* Header */}
                            <h3>{item.title}</h3>
                            <p>{item.name}</p>
                          </div>
                          {/* Price */}
                          <p className="font-semibold  my-2 font-raleway text-base">
                            {item.currency}
                            {item.price}
                          </p>
                          {/* Size */}
                          <div className="py-1">
                            <p className="font-medium  pb-1 text-lightBlack font-raleway ">
                              Size:
                            </p>
                            <div className="flex gap-1">
                              {item.AvailableSizes.map((size, index) => {
                                return (
                                  <p
                                    className={`uppercase w-6 p-px text-center font-normal font-Roboto  border text-sm cursor-pointer ${
                                      size === item.ChosenSize
                                        ? "bg-lightBlack text-white"
                                        : `border-${size} `
                                    }`}
                                    key={index}
                                  >
                                    {size}
                                  </p>
                                );
                              })}
                            </div>
                          </div>
                          {/* Color */}
                          <div className="pt-3">
                            <p className=" pb-1 text-lightBlack font-raleway font-medium ">
                              color:
                            </p>
                            <div className="flex gap-1">
                              {item.AvailableColors.map((color, index) => {
                                return (
                                  <div
                                    key={index}
                                    className={`border-2 ${
                                      color === item.ChosenColor
                                        ? "border-green"
                                        : "border-transparent"
                                    } cursor-pointer`}
                                  >
                                    <p
                                      className={`m-px w-4 h-4 bg-${color}`}
                                    ></p>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                        {/* Amount */}
                        <div className="flex gap-2 font-raleway font-medium text-3xl">
                          <div className="flex flex-col items-center justify-between">
                            <img
                              src={plus}
                              alt="Plus"
                              className="cursor-pointer w-6 h-6 hover:bg-green"
                            />
                            <p className="font-medium text-lg">{item.amount}</p>
                            <img
                              src={minus}
                              alt="Minus"
                              className="cursor-pointer w-6 h-6 hover:bg-green "
                            />
                          </div>
                          <div>
                            <img
                              src={item.img}
                              alt={item.name}
                              className="h-52"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full border border-green mb-5 "></div>
                    </div>
                  );
                })}
                <div className="flex flex-col gap-5">
                  <div className="flex justify-between mt-2 font-Roboto font-semibold text-base">
                    <p>Total</p>
                    <p className="font-raleway font-bold">$200.00</p>
                  </div>

                  <div className="grid grid-cols-2 font-raleway font-semibold text-sm gap-5">
                    <NavLink
                      to="/Cart"
                      className="uppercase border border-1 border-lightBlack py-2 text-center hover:bg-black hover:text-white"
                      onClick={() => setShowCart(!showCart)}
                    >
                      view bag
                    </NavLink>
                    <button className="uppercase border border-1 border-transparent bg-green py-2 text-white hover:bg-white hover:text-green hover:border-green">
                      check out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
