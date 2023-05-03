import React, { useState } from "react";

// images
import Navbar from "./Navbar";

// icons

import { BiMenu } from "react-icons/bi";

// images
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="container">
        <nav className="navbar ">
          <div className="container-fluid p-0 m-0">
            <Link path="/" className="navbar-brand mx-auto d-block d-md-none">
              <img src={logo} alt="logo" className="img-fluid" />
            </Link>
            <button
              type="button"
              className="bg-transparent d-inline-block d-md-none menu-btn"
              onClick={handleMenuToggle}
            >
              <BiMenu />
            </button>
            <Navbar navbarClass="d-none d-md-flex" />

            {showMenu && (
              <Navbar
                navbarClass="d-flex d-md-none mobile-nav"
                activeMobile="mobile-menu"
                control={handleMenuToggle}
              />
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
// Home
// Pages
// Station
// Blog
// Shop
// Contact Us
