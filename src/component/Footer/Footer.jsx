import React from "react";
import "./Footer.css";
import egol from "./footerImg/egol.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-body ">
      <div className="footer-title">
        <h2 className="text-center text-white mt-4">My Footer</h2>
      </div>
      <div className="row mt-5">
        <div className="col-lg-4">
          <h2 className="text-center text-white mb-5">Navbar</h2>
          <nav className="footer-nav">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-lg-4">
          <h2 className="text-center text-white mb-5">Personal</h2>
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="https://github.com/Jahan44">Github</a>
              </li>
              <li>
                <a href="https://www.facebook.com/">Facebook</a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=_HJsh26QwYc">
                  Youtube
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-lg-4">
          <h2 className="text-center text-white">Conpany</h2>
          <div className="footer-img">
            <img className=" img-fluid" src={egol} alt="eggole" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
