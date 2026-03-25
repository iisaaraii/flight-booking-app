import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={nav}>
      <h2>✈️ FlightBook</h2>

      <div>
        <Link to="/" style={link}>Flights</Link>
        <Link to="/booking" style={link}>Booking</Link>
        <Link to="/payment" style={link}>Payment</Link>
      </div>
    </div>
  );
};

const nav = {
  display: "flex",
  justifyContent: "space-between",
  padding: "15px",
  background: "#0a3d62",
  color: "white"
};

const link = {
  color: "white",
  marginLeft: "20px",
  textDecoration: "none"
};

export default Navbar;