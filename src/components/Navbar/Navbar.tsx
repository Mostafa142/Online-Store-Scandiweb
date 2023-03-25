import logo from "../.././assets/images/icon.svg";
import cart from "../.././assets/images/cart.svg";
import downArrow from "../.././assets/images/downArrow.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-32 py-5 items-center">
      <div className="flex gap-10 items-center">
        <NavLink to="women">
          <p className="uppercase">women</p>
        </NavLink>
        <NavLink to="men">
          <p className="uppercase">men</p>
        </NavLink>
        <NavLink to="kids">
          <p className="uppercase">kids</p>
        </NavLink>
      </div>
      <div>
        <img src={logo} alt="LOGO" />
      </div>
      <div className="flex gap-10">
        <div className="flex gap-2 items-center">
          <p>$</p>
          <img src={downArrow} alt="CART" />
        </div>
        <div>
          <img src={cart} alt="CART" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
