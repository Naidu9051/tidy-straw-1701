import React, { useState } from "react";
import { FaSearch, FaHeart, FaLuggageCart } from "react-icons/fa";
import './navbar.css';
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className = "main-nav">

        {/* 1st menu part */}
        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li>
              <a href="#">WOMEN</a>
            </li>
            <li>
              <a href="#">MEN</a>
            </li>
            <li>
              <a href="#">KIDS</a>
            </li>
            <li>
              <a href="#">/</a>
            </li>
            <li>
              <a href="#">DESIGN-ART</a>
            </li>
          </ul>
        </div>

         {/* 2nd logo part */}
         <div className="logo">
          <img
            src="https://www.yoox.com/media/yoox16/header/yoox-logo-p.svg"
            alt="company logo"
          />
        </div>

        {/* 3rd icon with links */}
        <div className="nav-icons">
            <ul>
              <li>
                <a href="#" target='search'><FaSearch className="search"/></a>
              </li>
              <li>
                <a href="#" target='search'><FaHeart className="like"/></a>
              </li>
              <li>
                <a href="#" target='search'><FaLuggageCart className="cart"/></a>
              </li>
            </ul>
              {/* hamburger menu start */}
              <div className="hamburger-menu ">
                  <a href="#" onClick={() =>setShowMediaIcons(!showMediaIcons)}>
                      <GiHamburgerMenu/>
                  </a>
              </div>
        </div>

        

      </nav>
    </>
  );
};

export default Navbar;
