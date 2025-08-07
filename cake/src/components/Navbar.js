import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart, selectCartItemCount } from "../store/cartSlice";
import { logout } from "../store/authSlice";
const Navbar = () => {
  const { wishlistItems } = useWishlist();
  const dispatch = useDispatch();
  const cartItemCount = useSelector(selectCartItemCount);
  const [searchTerm, setSearchTerm] = useState("");
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const navigate = useNavigate(); //
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${searchTerm.trim()}`);
      setSearchTerm("");
    }
  };
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          CakeShop
        </Link>
      </div>

      <div className="navbar-middle">
        <div className="dropdown">
          <button className="nav-link dropdown-btn">Categories</button>
          <div className="dropdown-content">
            <Link to="/category/icing">Icing Cakes</Link>
            <Link to="/category/plain">Plain Cakes</Link>
            <Link to="/category/customised">Customised Cakes</Link>
          </div>
        </div>
        <Link to="/aboutus" className="nav-link">
          About Us
        </Link>
      </div>

      <div className="navbar-right">
        <form onSubmit={handleSearchSubmit} className="search-bar">
          <input
            type="text"
            placeholder="Search cakes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>

        <Link to="/wishlist" className="nav-icon-link">
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
          <span className="nav-icon-badge">{wishlistItems.length}</span>
        </Link>
        <button
          onClick={() => dispatch(toggleCart())}
          className="cart-icon nav-icon-link nav-icon-btn"
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
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span className="nav-icon-badge">{cartItemCount}</span>
        </button>
        {isAuthenticated ? (
          <div className="user-info">
            <span>Welcome, {user.firstName}!</span>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="login-button-link">
            <button className="login-button">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
