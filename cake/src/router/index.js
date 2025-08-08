import React from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "../components/PrivateRoute";

import HomePage from "../pages/HomePage";
import CategoryPage from "../pages/CategoryPage";
import WishlistPage from "../pages/WishlistPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import SearchPage from "../pages/SearchPage";
import LoginPage from "../pages/LoginPage";
import CheckoutPage from "../pages/CheckoutPage";
import AboutUs from "../pages/AboutUs";
import OrderSuccessPage from "../pages/OrderSuccessPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "category/:category",
        element: <CategoryPage />,
      },
      {
        path: "wishlist",
        element: <WishlistPage />,
      },
      {
        path: "product/:productId",
        element: <ProductDetailPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "checkout",
            element: <CheckoutPage />,
          },
        ],
      },
      {
        path: "order-success",
        element: <OrderSuccessPage />,
      },
    ],
  },
]);
