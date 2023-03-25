import { Outlet } from "react-router-dom";
import Home from "../Home/Home";

const RootLayout = () => {
  return (
    <>
      <Outlet />
      <Home />
    </>
  );
};

export default RootLayout;
