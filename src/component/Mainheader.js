/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../assets/images/logo.png";
import user from "../assets/images/user-img.png";

function Mainheader() {
  return (
    <>
      <header className="thm-header">
        <nav className="navbar navbar-expand-lg custom_nav">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    How
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="nav-btn">
                <Link to="/login" className="btn">
                  Login
                </Link>
                <Link to="" className="btn">
                  Logout
                </Link>
                <Link to="/user-profile" className="usr-img">
                  <img src={user} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Mainheader;
