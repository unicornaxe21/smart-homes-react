/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom";

function Sidebar() {
  const CustomNavLink = ({ to, children }) => {
    const location = useLocation();
    const currentRoute = location.pathname;
    const isActive = currentRoute === to;

    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to}>{children}</Link>
      </li>
    );
  };

  return (
    <>
      <aside className="sidebar sticky-top">
        <ul className="sidebar-list">
          <li>
            <a href="#">
              <span>Let’s set up your profile </span>
              <i class="fas fa-chevron-right"></i>
            </a>
            <hr className="line"></hr>
            <em>100% completed</em>
          </li>
          <CustomNavLink to="/user-profile">
            <span>Profile</span>
            <i class="fas fa-chevron-right"></i>
          </CustomNavLink>
          <li>
            <a href="#">
              <span>Home Page</span>
              <i class="fas fa-chevron-right"></i>
            </a>
          </li>
          <CustomNavLink to="/visitorlist">
            <span>Visitors List</span>
            <i class="fas fa-chevron-right"></i>
          </CustomNavLink>
          <CustomNavLink to="/people-list">
            <span>People</span>
            <i class="fas fa-chevron-right"></i>
          </CustomNavLink>
          <hr></hr>
          <li>
            <h4>House Profile</h4>
          </li>
          <CustomNavLink to="/flat-01">
            <span>Flat - 101</span>
            <i class="fas fa-chevron-right"></i>
          </CustomNavLink>
          <li>
            <a href="#">
              <span>Flat - 102</span>
              <i class="fas fa-chevron-right"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Flat - 103</span>
              <i class="fas fa-chevron-right"></i>
            </a>
          </li>
          <hr></hr>
          <li>
            <a href="#">
              <span>Edit </span>
              <i class="fas fa-chevron-right"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Contacts</span>
              <i class="fas fa-chevron-right"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Notifications</span>
              <i class="fas fa-chevron-right"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Settings </span>
              <i class="fas fa-chevron-right"></i>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
