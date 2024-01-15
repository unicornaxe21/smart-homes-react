/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import logo from "../assets/images/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
  return (
    <>
      <header className="mainheader fixed-top">
        <div className="row">
          <div className="col-lg-7">
            <div className="mainheader-lft">
              <a href="/">
                <img src={logo} alt="" />
              </a>
              <div className="mainheader-dropdown">
                <div className="dropdown">
                  <button
                    className="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Alekya Nilayam
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link className="dropdown-item" to="/selectcountry">
                        Alekya Nilayam
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Alekya Nilayam
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Alekya Nilayam
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button
                    className="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Explore
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Explore
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Explore
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Explore
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button
                    className="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Help
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Faq
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 text-end">
            <div className="mainheader-right">
              <div className="mainheader-slide">
                <button>
                  <i class="fas fa-chevron-left"></i>
                </button>
                <span>
                  <Link to="/selectcountry">INDIA</Link>
                </span>
                <button>
                  <i class="fas fa-chevron-right"></i>
                </button>
              </div>
              <div className="mainheader-slide">
                <button>
                  <i class="fas fa-chevron-left"></i>
                </button>
                <span>
                  <Link to="/amenities">Alekhya Apartments - 1</Link>
                </span>
                <button>
                  <i class="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
