/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import user from "../../assets/images/user-img.png";
import flloricon from "../../assets/images/floor-icon.png";
import people from "../../assets/images/people.png";
import tv from "../../assets/images/tv-icon.png";
import bulb from "../../assets/images/bulb-icon.png";
import wifi from "../../assets/images/wifi-icon.png";
import fan from "../../assets/images/fan-icon.png";
import router from "../../assets/images/router-icon.png";
import ac from "../../assets/images/ac-icon.png";
import port from "../../assets/images/port-icon.png";
import telephone from "../../assets/images/telephone-icon.png";
import wall from "../../assets/images/wall-light.png";
import disco from "../../assets/images/disco-light.png";
import tablefan from "../../assets/images/table-fan.png";
import light from "../../assets/images/light.png";
import oven from "../../assets/images/oven.png";
import mixer from "../../assets/images/mixer.png";
import coffee from "../../assets/images/coffee.png";
import fridge from "../../assets/images/fridge.png";
import celling from "../../assets/images/celling.png";
import exhaust from "../../assets/images/exhaust.png";
import theatre from "../../assets/images/theatre.png";
import vanity from "../../assets/images/vanity.png";
import outdoor from "../../assets/images/out-door.png";
import lamp from "../../assets/images/lamp.png";
import heater from "../../assets/images/heater.png";
import Loginheader from "../login/Loginheader";

function Amenities() {
  const appartmentArray = [
    "Alekhya Apartments - 1",
    "Alekhya Apartments - 2",
    "Alekhya Apartments - 3",
    "Alekhya Apartments - 4",
    "Alekhya Apartments - 5",
  ];
  const [appartmentName, setAppartmentName] = useState(appartmentArray[0]);
  let index = 0;

  const nextApartment = () => {
    index = (index + 1) % appartmentArray.length;
    setAppartmentName(appartmentArray[index]);
  };
  
  const prevApartment = () => {
    index = (index - 1 + appartmentArray.length) % appartmentArray.length;
    setAppartmentName(appartmentArray[index]);
  };

  return (
    <>
      <section className="login-sec amenities">
        <div className="row justify-content-center"></div>
        <Loginheader />
      </section>
      <div className="amenities-header">
        <div className="amenities-header-lft">
          <ul className="mb-0">
            <li className="navitem">
              <Link to="/">
                <span>
                  <img src={user} alt="" />
                </span>
              </Link>
            </li>
            <li className="navitem">
              <Link to="/" className="nav-link">
                Home Page
              </Link>
            </li>
            <li className="navitem">
              <div className="dropdown">
                <button
                  className="dropdown-toggle"
                  type="button"
                  id="dropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Floors
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdown">
                  <li>
                    <Link className="dropdown-item" to="">
                      Floor 1
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="">
                      Floor 2
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="">
                      Floor 3
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="amenities-header-rgt">
          <div>
            <select>
              <option>INDIA</option>
              <option>AUSTRALIA</option>
              <option>AMERICA</option>
              <option>U.K.</option>
            </select>
          </div>
          <div className="mainheader-slide">
            <button onClick={prevApartment}>
              <i class="fas fa-chevron-left"></i>
            </button>
            <span>{appartmentName}</span>
            <button onClick={nextApartment}>
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
      <section className="amenities-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="amenities-card amenities-flor">
                <h4 className="text-center">
                  <span>Flats / Houses</span>
                </h4>
                <h5 className="text-end mb-4">
                  <button>
                    <i class="fas fa-chevron-left"></i>
                  </button>
                  <span>Floors</span>
                  <button>
                    <i class="fas fa-chevron-right"></i>
                  </button>
                </h5>
                <h3 className="head">Floor -1</h3>
                <ul className="amenities-lst">
                  <li className="select">
                    <div className="amenities-flor-innr">
                      <img src={flloricon} alt="" />
                      <h6>Flat - 101</h6>
                    </div>
                  </li>
                  <li>
                    <div className="amenities-flor-innr">
                      <img src={flloricon} alt="" />
                      <h6>Flat - 102</h6>
                    </div>
                  </li>
                  <li>
                    <div className="amenities-flor-innr">
                      <img src={flloricon} alt="" />
                      <h6>Flat - 103</h6>
                    </div>
                  </li>
                  <li>
                    <div className="amenities-flor-innr">
                      <img src={flloricon} alt="" />
                      <h6>Flat - 104</h6>
                    </div>
                  </li>
                  <li>
                    <div className="amenities-flor-innr">
                      <img src={flloricon} alt="" />
                      <h6>Flat - 105</h6>
                    </div>
                  </li>
                  <li>
                    <div className="amenities-flor-innr">
                      <img src={flloricon} alt="" />
                      <h6>Flat - 106</h6>
                    </div>
                  </li>
                  <li>
                    <div className="amenities-flor-innr">
                      <img src={flloricon} alt="" />
                      <h6>Flat - 107</h6>
                    </div>
                  </li>
                  <li>
                    <div className="amenities-flor-innr">
                      <img src={flloricon} alt="" />
                      <h6>Flat - 108</h6>
                    </div>
                  </li>
                  <li>
                    <div className="amenities-flor-innr">
                      <img src={flloricon} alt="" />
                      <h6>Flat - 109</h6>
                    </div>
                  </li>
                  <li>
                    <div className="amenities-flor-innr">
                      <img src={flloricon} alt="" />
                      <h6>Flat - 110</h6>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="amenities-card amenities-hall">
                <h4 className="head text-white d-flex justify-content-between">
                  Bed Room
                  <Link to="" class="text-dark">
                    <i class="far fa-plus"></i>
                  </Link>
                </h4>
                <h6>Favourite's</h6>
                <ul className="amenities-lst">
                  <li>
                    <button className="on">
                      <img src={bulb} alt="" className="me-2" />
                      Light Bulb
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                  <li>
                    <button className="on">
                      <img src={fan} alt="" className="me-2" />
                      Ceiling Fan
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                  <li>
                    <button className="off">
                      <img src={lamp} alt="" className="me-2" />
                      Bed -side Lamp
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                  <li>
                    <button className="off">
                      <img src={heater} alt="" className="me-2" />
                      Heater
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                  <li>
                    <button className="off">
                      <img src={port} alt="" className="me-2" />
                      Port
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                  <li>
                    <button className="not-assigned"></button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="amenities-card amenities-people">
                <h4 className="head text-white">People</h4>
                <ul className="amenities-lst">
                  <li>
                    <div className="amenities-people-innr">
                      <img src={people} alt="" />
                      <h5>Person-1</h5>
                    </div>
                  </li>
                  <li>
                    <div className="amenities-people-innr">
                      <img src={people} alt="" />
                      <h5>Person-2</h5>
                    </div>
                  </li>
                  <li>
                    <div className="amenities-people-innr">
                      <img src={people} alt="" />
                      <h5>Person-3</h5>
                    </div>
                  </li>
                  <li>
                    <div className="amenities-people-innr">
                      <img src={people} alt="" />
                      <h5>Person-4</h5>
                    </div>
                  </li>
                  <li>
                    <div className="amenities-people-innr">
                      <img src={people} alt="" />
                      <h5>Person-5</h5>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="amenities-card amenities-hall">
                <h4 className="head text-white d-flex justify-content-between">
                  Bathroom - 1
                  <Link to="" class="text-dark">
                    <i class="far fa-plus"></i>
                  </Link>
                </h4>
                <ul className="amenities-lst">
                  <li>
                    <button className="on">
                      <img src={vanity} alt="" className="me-2" />
                      Vanity-light
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                  <li>
                    <button className="off">
                      <img src={bulb} alt="" className="me-2" />
                      Light Bulb
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                  <li>
                    <button className="not-assigned"></button>
                  </li>
                  <li>
                    <button className="off">
                      <img src={exhaust} alt="" className="me-2" />
                      Exhaust Fan
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="amenities-card amenities-hall">
                <h4 className="head text-white d-flex justify-content-between">
                  Balcony
                  <Link to="" class="text-dark">
                    <i class="far fa-plus"></i>
                  </Link>
                </h4>
                <ul className="amenities-lst">
                  <li>
                    <button className="off">
                      <img src={outdoor} alt="" className="me-2" />
                      Out Door Light
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                  <li>
                    <button className="not-assigned"></button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="amenities-card amenities-hall">
                <h4 className="head text-white d-flex justify-content-between">
                  Main Hall
                  <Link to="" class="text-dark">
                    <i class="far fa-plus"></i>
                  </Link>
                </h4>
                <h6>Favourite's</h6>
                <ul className="amenities-lst">
                  <li>
                    <button className="on">
                      <img src={tv} alt="" className="me-2" />
                      TV
                    </button>
                  </li>
                  <li>
                    <button className="off">
                      <img src={bulb} alt="" className="me-2" />
                      Light Bulb
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                  <li>
                    <button className="on">
                      <img src={wifi} alt="" className="me-2" />
                      Wifi
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                  <li>
                    <button className="on">
                      <img src={fan} alt="" className="me-2" />
                      Ceiling Fan
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                  <li>
                    <button className="on">
                      <img src={router} alt="" className="me-2" />
                      Set-Top Box
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                  <li>
                    <button className="on">
                      <img src={ac} alt="" className="me-2" />
                      Air Conditioner
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                  <li>
                    <button className="off">
                      <img src={port} alt="" className="me-2" />
                      Port
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                  <li>
                    <button className="on">
                      <img src={telephone} alt="" className="me-2" />
                      Telephone
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                  <li>
                    <button className="on">
                      <img src={wall} alt="" className="me-2" />
                      Wall Lights
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                  <li>
                    <button className="assigned">
                      <img src={disco} alt="" className="me-2" />
                      Disco Lights
                    </button>
                  </li>
                  <li>
                    <button className="not-assigned"></button>
                  </li>
                  <li>
                    <button className="assigned"></button>
                  </li>
                </ul>
              </div>
              <div className="amenities-card amenities-hall">
                <h4 className="head text-white d-flex justify-content-between">
                  Small Hall
                  <Link to="" class="text-dark">
                    <i class="far fa-plus"></i>
                  </Link>
                </h4>
                <ul className="amenities-lst">
                  <li>
                    <button className="off">
                      <img src={theatre} alt="" className="me-2" />
                      Theatre
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                  <li>
                    <button className="off">
                      <img src={bulb} alt="" className="me-2" />
                      Light Bulb
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="amenities-card amenities-hall">
                <h4 className="head text-white d-flex justify-content-between">
                  Dining Room
                </h4>
                <ul className="amenities-lst">
                  <li>
                    <button className="off">
                      <img src={tablefan} alt="" className="me-2" />
                      Table Fan
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                  <li>
                    <button className="off">
                      <img src={ac} alt="" className="me-2" />
                      Air Conditioner
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                  <li>
                    <button className="off">
                      <img src={light} alt="" className="me-2" />
                      Suspended Light
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                  <li>
                    <button className="off"></button>
                  </li>
                </ul>
              </div>
              <div className="amenities-card amenities-hall">
                <h4 className="head text-white d-flex justify-content-between">
                  Store Room
                </h4>
                <ul className="amenities-lst">
                  <li>
                    <button className="off">
                      <img src={bulb} alt="" className="me-2" />
                      Light Bulb
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="amenities-card amenities-hall">
                <h4 className="head text-white d-flex justify-content-between">
                  Kitchen
                </h4>
                <ul className="amenities-lst">
                  <li>
                    <button className="off">
                      <img src={oven} alt="" className="me-2" />
                      Oven
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                  <li>
                    <button className="off">
                      <img src={mixer} alt="" className="me-2" />
                      Mixer
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                  <li>
                    <button className="on">
                      <img src={coffee} alt="" className="me-2" />
                      Coffee Maker
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                  <li>
                    <button className="on">
                      <img src={fridge} alt="" className="me-2" />
                      Fridge
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                  <li>
                    <button className="on">
                      <img src={bulb} alt="" className="me-2" />
                      Light Bulb
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                  <li>
                    <button className="off">
                      <img src={celling} alt="" className="me-2" />
                      Ceiling Light
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                  <li>
                    <button className="off">
                      <img src={exhaust} alt="" className="me-2" />
                      Exhaust Fan
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                  <li>
                    <button className="off">
                      <img src={port} alt="" className="me-2" />
                      Port
                      <span class="fas fa-power-off"></span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Amenities;
