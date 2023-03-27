import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
// import Product from "../pages/Product/Product";
import RootLayout from "../pages/RootLayout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // { path: "Product", element: <Product /> }
    ],
  },
]);
