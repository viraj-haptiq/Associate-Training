import React from "react";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../features/products/ProductCard";
import { Link } from "react-router-dom";

const WishlistPage = () => {
  const { wishlistItems } = useWishlist();

  return (
    <div className="product-list-container">
      <h1 className="product-list-title">My Wishlist</h1>

      {wishlistItems.length > 0 ? (
        <div className="product-grid">
          {wishlistItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "4rem" }}>
          <p>Your wishlist is empty.</p>
          <Link to="/" style={{ color: "#e83e8c" }}>
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
