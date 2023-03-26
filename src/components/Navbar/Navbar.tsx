import logo from "../.././assets/images/icon.svg";
import cart from "../.././assets/images/cart.svg";
import downArrow from "../.././assets/images/downArrow.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
    <nav className="flex justify-between py-5 items-center">

      <div className="flex gap-10 items-center">
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

      <div className="flex gap-10">
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
      
    </nav>
  );
};

export default Navbar;
