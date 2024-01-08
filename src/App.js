import "./App.css";
import React from "react";
import Navbar from "./Componenst/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Footer from "./Componenst/Footer";
import Solution from "./pages/Solution";

function App() {
  return (
    <Router>
      <div style={{ color: "blue" }}>
        <Navbar />
        <Routes>
          {" "}
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/AboutUs" element={<Aboutus />} />
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/solution" element={<Solution />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
