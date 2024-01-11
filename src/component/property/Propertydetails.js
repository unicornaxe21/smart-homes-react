import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import logo from "../../assets/images/logo.png";
import userimg from "../../assets/images/user-img.png";
import house01 from "../../assets/images/house-01.png";
import house02 from "../../assets/images/house-02.png";
import house03 from "../../assets/images/house-03.png";
import Propertyslide from "../Propertyslide";

function Propertydetails() {
  return (
    <>
      <div className="tp-header">
        <div className="tp-header-brand">
          <Link to="">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="tp-header-right">
          <Link to="#">
            <i className="fas fa-star"></i>
          </Link>
          <Link to="#">
            <i className="fas fa-comment-alt"></i>
          </Link>
          <Link to="/user-profile">
            <span>
              <img src={userimg} alt="" />
            </span>
          </Link>
        </div>
      </div>
      <div className="property-dtl-fltr">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7">
              <div className="property-dtl-fltr-lft">
                <form className="row align-items-center">
                  <div className="dtl-fltr-bx col-lg-8">
                    <span className="fas fa-search"></span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                  </div>
                  <div className="col-lg-4">
                    <button>
                      <i className="fas fa-filter"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="property-dtl-fltr-rgt">
                <Link to="/add-house">
                  <i className="fas fa-plus me-2"></i>Add House
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="property-dtl-lst">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7">
              <div className="property-dtl-lst-lft">
                <div className="property-dtl-lst-lft-icon">
                  <span>2 -10 of 50</span>
                  <Link>
                    <i className="fas fa-chevron-left"></i>
                  </Link>
                  <Link>
                    <i className="fas fa-chevron-right"></i>
                  </Link>
                </div>
                <ul>
                  <li>
                    <div className="property-dtl-lst-img">
                      <img src={house01} alt="" />
                    </div>
                    <div className="property-dtl-lst-cntn">
                      <div className="property-dtl-lst-cntn-txt">
                        <h4>Apartment</h4>
                      </div>
                      <div className="property-dtl-lst-cntn-icon">
                        <span className="fas fa-star"></span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="property-dtl-lst-img">
                      <img src={house03} alt="" />
                    </div>
                    <div className="property-dtl-lst-cntn">
                      <div className="property-dtl-lst-cntn-txt">
                        <h4>Villa</h4>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="property-dtl-lst-img">
                      <img src={house02} alt="" />
                    </div>
                    <div className="property-dtl-lst-cntn">
                      <div className="property-dtl-lst-cntn-txt">
                        <h4>Individual House</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="property-slide">
                <Propertyslide />
                <h4 className="head">Apartment</h4>
              </div>
              <div className="text-center mt-4">
                <Link to="/add-house" className="shadowb-btn">
                  Continue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Propertydetails;
