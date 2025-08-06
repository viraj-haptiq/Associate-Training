import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../store/cartSlice";

const OrderSummary = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      {cartItems.map((item) => (
        <div key={item.product.id} className="summary-item">
          <img src={item.product.image} alt={item.product.name} />
          <div className="summary-item-info">
            <p>{item.product.name}</p>
            <span>Qty: {item.quantity}</span>
          </div>
          <p className="summary-item-price">
            ₹
            {(
              parseFloat(item.product.price.replace("₹", "")) * item.quantity
            ).toFixed(2)}
          </p>
        </div>
      ))}
      <div className="summary-total">
        <strong>Total</strong>
        <strong>₹{cartTotal.toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default OrderSummary;
