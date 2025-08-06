import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

const ProductCard = ({ product }) => {
  const { name, price, image, id } = product;

  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const dispatch = useDispatch();

  const handleWishlistClick = () => {
    if (isInWishlist(id)) {
      removeFromWishlist(id);
    } else {
      addToWishlist(product);
    }
  };
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="product-card-link-wrapper">
        <img src={image} alt={name} className="product-image" />
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price}</p>
      </Link>
      <button
        className={`wishlist-btn ${isInWishlist(id) ? "active" : ""}`}
        onClick={handleWishlistClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </button>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
