import React from "react";
import { Link } from "react-router-dom";

const OrderSuccessPage = () => {
  return (
    <div className="order-success-container">
      <div className="order-success-card">
        <div className="success-checkmark">✓</div>
        <h2>Order Placed Successfully!</h2>
        <p>Thank you for your purchase. A confirmation email has been sent.</p>
        <Link to="/" className="continue-shopping-btn">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
