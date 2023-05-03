/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

// icons

import { MdKeyboardArrowDown } from "react-icons/md";

// images
import { logo } from "../assets/images/Images";

export default function Navbar({ navbarClass, activeMobile, control }) {
  return (
    <>
      <div className={`w-100 ${activeMobile}`} onClick={control}></div>
      <div
        className={`menu d-flex align-items-md-center flex-column flex-md-row justify-content-between ${navbarClass}`}
      >
        <ul className="d-flex flex-column flex-md-row menu-list">
          <li className=" mb-item">
            <Link className="text-decoration-none" to="/" onClick={control}>
              Home
            </Link>
          </li>
          <li className="nav-item dropdown menu-item mb-item">
            <a
              to="#"
              className="dropdown-toggle d-inline-flex align-items-center text-decoration-none"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>pages</span>
              <MdKeyboardArrowDown />
            </a>
            <ul className="dropdown-menu drop-menu">
              <li>
                <Link to="/about" className="dropdown-item" onClick={control}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="dropdown-item" onClick={control}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown menu-item mb-item">
            <a
              to="#"
              className="dropdown-toggle d-inline-flex align-items-center text-decoration-none"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>station</span>
              <MdKeyboardArrowDown />
            </a>
            <ul className="dropdown-menu drop-menu">
              <li>
                <Link
                  to="/stationOne"
                  className="dropdown-item"
                  onClick={control}
                >
                  station 1
                </Link>
              </li>
              <li>
                <Link
                  to="/stationTwo"
                  className="dropdown-item"
                  onClick={control}
                >
                  station 2
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="d-none d-md-block">
          <Link to="/" className="navbar-brand ">
            <img src={logo} alt="logo" className="img-fluid" />
          </Link>
        </div>
        <ul className="d-flex flex-column flex-md-row menu-list">
          <li className=" mb-item">
            <Link className="text-decoration-none" to="/blog" onClick={control}>
              Blog
            </Link>
          </li>
          <li className="nav-item dropdown menu-item mb-item">
            <a
              to="#"
              className="dropdown-toggle d-inline-flex align-items-center text-decoration-none"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>shop</span>
              <MdKeyboardArrowDown className="arrow" />
            </a>
            <ul className="dropdown-menu drop-menu">
              <li>
                <Link to="/shopOne" className="dropdown-item" onClick={control}>
                  shop 1
                </Link>
              </li>
              <li>
                <Link to="/shopTwo" className="dropdown-item" onClick={control}>
                  shop2
                </Link>
              </li>
            </ul>
          </li>
          <li className=" mb-item">
            <Link
              className="text-decoration-none"
              to="/contact"
              onClick={control}
            >
              contact us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
