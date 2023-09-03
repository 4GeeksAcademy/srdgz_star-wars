import React from "react";
import { Link } from "react-router-dom";

import Dropdown from "./components/Dropdown.jsx";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3 sticky-top">
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand mx-5 my-3 h1">
            <img
              src="https://seeklogo.com/images/S/Star_Wars-logo-97DD55947B-seeklogo.com.png"
              alt="logo"
              width="120"
              height="50"
            />
          </span>
        </Link>
        <Dropdown />
      </div>
    </nav>
  );
};

export default Navbar;
