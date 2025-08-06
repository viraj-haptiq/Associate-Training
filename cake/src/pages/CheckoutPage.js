import React from "react";
import AddressForm from "../components/AddressForm";
import OrderSummary from "../components/OrderSummary";
import PaymentMethods from "../components/PaymentMethods";

const CheckoutPage = () => {
  const handlePlaceOrder = () => {
    alert("Thank you for your order! (This is a demo)");
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Secure Checkout</h1>
      <div className="checkout-layout">
        <div className="checkout-left">
          <AddressForm />
          <PaymentMethods />
        </div>

        <div className="checkout-right">
          <OrderSummary />
        </div>
      </div>
      <div className="checkout-actions">
        <button className="place-order-btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
