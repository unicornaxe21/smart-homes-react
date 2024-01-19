import React from "react";
import Loginheader from "./Loginheader";
import registrationsuccess from "../../assets/images/registration-img.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Registrationsuccess() {
  return (
    <>
      <section className="login-sec">
        <div className="row justify-content-center">
          <Loginheader />
          <div className="col-lg-6">
            <div className="register-succes text-center">
              <img src={registrationsuccess} alt="" />
              <h4 className="head text-center text-white mt-4">
                <em>Registration successful</em>
              </h4>
            </div>
          </div>
          <div className="col-lg-12 text-end">
            <Link to="/welcome" className="thm-blu-btn text-white me-4">
              {" "}
              Next
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Registrationsuccess;
