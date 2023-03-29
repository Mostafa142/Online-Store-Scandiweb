import { createBrowserRouter } from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import Kids from "../pages/Categories/Kids";
import Men from "../pages/Categories/Men";
import Women from "../pages/Categories/Women";
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
      { path: "/Women", element: <Women /> },
      { path: "/Men", element: <Men /> },
      { path: "/Kids", element: <Kids /> },
      { path: "/Cart", element: <Cart /> },
      { path: "/Product", element: <Product /> },
    ],
  },
]);
