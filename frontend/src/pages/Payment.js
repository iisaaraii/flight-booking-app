import React, { useState } from "react";

const Payment = () => {

  const [success, setSuccess] = useState(false);

  const handlePayment = () => {
    setSuccess(true);
  };

  if (success) {
    return (
      <div style={successBox}>
        <h1>✅ Payment Successful</h1>
        <p>Your flight has been booked</p>
        <h3>Happy Journey ✈️</h3>
      </div>
    );
  }

  return (
    <div style={container}>
      <h1>Payment</h1>

      <div style={card}>
        <input placeholder="Card Number" style={input} />
        <input placeholder="Card Holder Name" style={input} />
        <input placeholder="Expiry Date" style={input} />
        <input placeholder="CVV" style={input} />

        <button style={button} onClick={handlePayment}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "40px"
};

const card = {
  width: "350px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)"
};

const input = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const button = {
  padding: "12px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

const successBox = {
  textAlign: "center",
  marginTop: "100px"
};

export default Payment;