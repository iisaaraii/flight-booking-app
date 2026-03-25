import React from "react";
import { useNavigate } from "react-router-dom";

const Booking = () => {

  const navigate = useNavigate();

  return (
    <div style={container}>
      <h1>Flight Booking</h1>

      <div style={card}>
        <label>Name</label>
        <input type="text" placeholder="Enter passenger name" style={input} />

        <label>Email</label>
        <input type="email" placeholder="Enter email" style={input} />

        <label>Seats</label>
        <input type="number" placeholder="Number of seats" style={input} />

        <button
          style={button}
          onClick={() => navigate("/payment")}
        >
          Proceed to Payment
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
  marginTop: "10px",
  backgroundColor: "#28a745",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

export default Booking;