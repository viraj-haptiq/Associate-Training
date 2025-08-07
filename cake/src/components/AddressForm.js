import React from "react";

const AddressForm = () => {
  return (
    <div className="address-form">
      <h3>Shipping Address</h3>
      <div className="form-row">
        <div className="form-group half-width">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div className="form-group half-width">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="enter your full address"
          required
        />
      </div>
      <div className="form-row">
        <div className="form-group half-width">
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" required />
        </div>
        <div className="form-group half-width">
          <label htmlFor="pincode">Pincode</label>
          <input type="text" id="pincode" name="pincode" required />
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
