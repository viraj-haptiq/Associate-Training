import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  toggleCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  selectCartItems,
  selectCartTotal,
  selectCartItemCount,
} from "../store/cartSlice";

const CartSidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.cart.isCartOpen);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const itemCount = useSelector(selectCartItemCount);

  return (
    <>
      {isOpen && (
        <div
          className="cart-overlay"
          onClick={() => dispatch(toggleCart())}
        ></div>
      )}

      <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button onClick={() => dispatch(toggleCart())} className="close-btn">
            &times;
          </button>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.product.id} className="cart-item">
                <img src={item.product.image} alt={item.product.name} />
                <div className="item-details">
                  <p className="item-name">{item.product.name}</p>
                  <p className="item-price">
                    {item.quantity} x {item.product.price}
                  </p>
                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        dispatch(decrementQuantity(item.product.id))
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch(incrementQuantity(item.product.id))
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="remove-item-btn"
                  onClick={() => dispatch(removeFromCart(item.product.id))}
                >
                  &times;
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="total-section">
            <p>Total Items: {itemCount}</p>
            <h3>Subtotal: ₹{cartTotal.toFixed(2)}</h3>
          </div>
          <Link to="/checkout">
            <button className="checkout-btn">Proceed to Checkout</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
