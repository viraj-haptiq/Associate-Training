import React from "react";

const PaymentMethods = () => {
  return (
    <div className="payment-methods">
      <h3>Payment Method</h3>
      <div className="payment-option">
        <input
          type="radio"
          id="cod"
          name="payment"
          value="cod"
          defaultChecked
        />
        <label htmlFor="cod">Cash on Delivery (COD)</label>
      </div>
      <div className="payment-option">
        <input type="radio" id="upi" name="payment" value="upi" />
        <label htmlFor="upi">UPI / Net Banking</label>
      </div>
      <div className="payment-option">
        <input type="radio" id="card" name="payment" value="card" />
        <label htmlFor="card">Credit / Debit Card</label>
      </div>
    </div>
  );
};

export default PaymentMethods;
