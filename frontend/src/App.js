import { BrowserRouter, Routes, Route } from "react-router-dom";

import Flights from "./pages/Flights";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Flights />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;