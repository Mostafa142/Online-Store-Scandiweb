import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const RootLayout = () => {
  return (
    <>
      <div className="md:px-32 px-10">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
