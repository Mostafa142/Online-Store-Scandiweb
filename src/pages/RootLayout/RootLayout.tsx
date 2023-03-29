import { Outlet } from "react-router-dom";
// import Cart from "../Cart/Cart";
import Home from "../Home/Home";
// import Product from "../Product/Product";

const RootLayout = () => {
  return (
    <>
      <Outlet />
     
     
      <Home />
      {/* <Product /> */}
      {/* <Cart /> */}
    </>
  );
};

export default RootLayout;
