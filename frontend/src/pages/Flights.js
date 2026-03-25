import React from "react";
import { useNavigate } from "react-router-dom";

import flight1 from "../images/flight1.jpg";
import flight2 from "../images/flight2.jpg";
import flight3 from "../images/flight3.jpg";

const Flights = () => {

  const navigate = useNavigate();

  const flights = [
    {
      id: 1,
      name: "Air India",
      from: "Delhi",
      to: "Mumbai",
      price: 4500,
      image: flight1,
    },
    {
      id: 2,
      name: "Indigo",
      from: "Bangalore",
      to: "Goa",
      price: 3500,
      image: flight2,
    },
    {
      id: 3,
      name: "Vistara",
      from: "Chennai",
      to: "Hyderabad",
      price: 4000,
      image: flight3,
    },
  ];

  return (
    <div style={container}>
      <h1>Flight Booking App</h1>
      <h2>Available Flights</h2>

      <div style={grid}>
        {flights.map((flight) => (
          <div key={flight.id} style={card}>
            <img src={flight.image} alt="flight" style={img} />

            <h3>{flight.name}</h3>

            <p>
              {flight.from} → {flight.to}
            </p>

            <h4>₹{flight.price}</h4>

            <button
              style={button}
              onClick={() => navigate("/booking")}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const container = {
  textAlign: "center",
};

const grid = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
};

const card = {
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "15px",
  width: "280px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

const img = {
  width: "100%",
  height: "160px",
  objectFit: "cover",
  borderRadius: "8px",
};

const button = {
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  padding: "10px",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Flights;