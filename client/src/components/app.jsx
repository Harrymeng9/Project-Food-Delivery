import React from "react";
import Home from "./home.jsx";
import Login from "./login.jsx";
import Register from "./register.jsx";
import Restaurants from "./restaurants.jsx";
import Footer from "./footer.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      {/* Navigation Links */}
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>

        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/restaurants">
          <button>Restaurants</button>
        </Link>

        <Link to="/register">
          <button>Register</button>
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
