import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/free-solid-svg-icons"

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = (e) => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className= "nav-container">
          <NavLink  to="/" className="nav-logo">
            <div className="nav-logo-container">
              <p className="nav-logo-first">FRİZBİ</p>
              <p className="nav-logo-second">TEKNİK</p>
            </div>
          </NavLink>
       
          
          <ul className={click? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
              
                to="/"
                className={({isActive}) => "nav-links" + (isActive ? " active":"")}
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
              
                to="/team"
                className={({isActive}) => "nav-links" + (isActive ? " active":"")}
                onClick={handleClick}
              >
                Team
              </NavLink>
            </li>
           {/* <li className="nav-item">
              <NavLink
              
                to="/gallery"
                className={({isActive}) => "nav-links" + (isActive ? " active":"")}
                onClick={handleClick}
              >
                Gallery
              </NavLink>
  </li>*/}
            <li className="nav-item">
              <NavLink
              
                to="/contact"
                className={({isActive}) => "nav-links" + (isActive ? " active":"")}
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
         
          <div className="nav-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={click ? Icons.faTimes : Icons.faBars} />
          
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
