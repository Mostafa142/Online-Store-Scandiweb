import { createBrowserRouter } from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import Kids from "../pages/Categories/Kids";
import Clothes from "../pages/Categories/Clothes";
import Tech from "../pages/Categories/Tech";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import RootLayout from "../pages/RootLayout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Tech", element: <Tech /> },
      { path: "/Clothes", element: <Clothes /> },
      // { path: "/Kids", element: <Kids /> },
      { path: "/Cart", element: <Cart /> },
      { path: "/Product", element: <Product /> },
    ],
  },
]);
