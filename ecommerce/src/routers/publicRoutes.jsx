import { createBrowserRouter } from "react-router-dom";
import ShopSingle from "../pages/shop/singleshop/ShopSingle";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/shop", element: <Shop /> },
  { path: "/shop/:id", element: <ShopSingle /> },
]);
