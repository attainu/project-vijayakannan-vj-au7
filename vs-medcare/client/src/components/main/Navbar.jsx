import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import headlogo from "../../images/head-logo-1.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-back fixed-top" id="mainNav">
        <div className="container">
          <HashLink smooth className="navbar-brand" to="#home">
            <img className="nav-logo" src={headlogo} alt="head-logo" />
          </HashLink>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-plus-square fa-2x"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <HashLink smooth className="nav-link" to="#home">
                  Home
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth className="nav-link" to="#about">
                  About
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth className="nav-link" to="#doctor">
                  Doctor's
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth className="nav-link" to="#medcamp">
                  Medical Camps
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth className="nav-link" to="#team">
                  Team
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth className="nav-link" to="#contact">
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
