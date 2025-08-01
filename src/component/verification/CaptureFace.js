import React from "react";
import "../../assets/css/style.css";
import logo from "../../assets/images/logo.png";
import capture from "../../assets/images/capture-img.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function CaptureFace() {
  return (
    <>
      <div className="banner-head">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <section className="newuser">
        <div className="container">
          <div className="newuser-innr">
            <div className="row">
              <div className="col-lg-12">
                <h4>Capture image of your face</h4>
              </div>
              <div className="col-lg-6">
                <div className="newuser-cam">
                  <div className="newuser-cam-blank"></div>
                  <div className="face">FaceTime HD Camera</div>
                  <button className="cam-btn org">Capture Image</button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="capture">
                  <img src={capture} alt="" className="w-100 rounded" />
                  <Link to="/property-detail" className="cam-btn">
                    Confirm
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CaptureFace;
