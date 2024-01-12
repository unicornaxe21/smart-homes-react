import React from "react";
import "../../assets/css/style.css";
import logo from "../../assets/images/logo.png";
import capture from "../../assets/images/capture-img.png";
import uploadCloud from "../../assets/images/cloud-upload-1.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Newuser() {
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
                  <Link to="" className="face">
                    FaceTime HD Camera
                  </Link>
                  <Link to="/welcome" className="cam-btn org">
                    Capture Image
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="capture">
                  <img src={capture} alt="" className="w-100 rounded" />
                  <Link to="/welcome" className="cam-btn">
                    Confirm
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12">
              <h4>Upload your recent photo here:</h4>
            </div>
            <div className="col-lg-12 p-5">
              <div className="bg-white text-center p-5">
                  <img src={uploadCloud} width={100} height={100} />
                  <h5 className="text-dark">Drop & Drag a backup to import it</h5>
                <input type="file" className="btn btn-outline-success" />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-md-6 text-start">
                <Link to="/" className="thm-blu-btn text-white">
                  Back
                </Link>
              </div>
              <div className="col-md-6 text-end">
                <Link to="/" className="thm-blu-btn text-white">
                  Next
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Newuser;
