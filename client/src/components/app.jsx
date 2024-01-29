import React from "react";
import Header from "./header.jsx";
import Home from "./home.jsx";
import SignIn from "./signin.jsx";
import Register from "./register.jsx";
import Restaurants from "./restaurants.jsx";
import Footer from "./footer.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      {/* Set up the all routes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/searchrestaurants" element={<Restaurants />} />
        <Route path="/registerrestaurant" element={<Register />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
