import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartSidebar from "../components/CartSidebar";
import { WishlistProvider } from "../context/WishlistContext";

const MainLayout = () => {
  return (
    <WishlistProvider>
      <div>
        <CartSidebar />
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </WishlistProvider>
  );
};

export default MainLayout;
