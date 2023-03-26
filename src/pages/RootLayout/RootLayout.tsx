import { Outlet } from "react-router-dom";
// import Home from "../Home/Home";
import Product from "../Product/Product";

const RootLayout = () => {
  return (
    <>
      <Outlet />
      {/* <Home /> */}
      <Product />
    </>
  );
};

export default RootLayout;
