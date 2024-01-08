import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assest/logo.jpg";

function Navbar() {
  return (
    <nav className="navbar" sx={{ bgcolor: "red" }}>
      {/* <div className='navbox'> */}
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div>
        <ul className="nav-link">
          <Link to="/" className="home">
            <li>Home</li>
          </Link>
          <Link to="/Services" className="services">
            <li>Services</li>
          </Link>
          <Link to="/solution" className="solution">
            <li>solution</li>
          </Link>
          <Link to="/Aboutus" className="aboutus">
            <li>About Us</li>
          </Link>
          <Link to="/ContactUs" className="contect">
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
      {/* </div> */}
    </nav>
  );
}

export default Navbar;
