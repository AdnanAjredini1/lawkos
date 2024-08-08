import React from "react";
import { Link } from "react-router-dom";
import navIcon from "../assets/icons/nav-main-icon.svg";
import { useSelector } from "react-redux";
import phoneIcon from "../assets/icons/phone.svg";
import navIconDark from "../assets/icons/nav-icon-dark.svg";
import phoneIconDark from "../assets/icons/phone-dark.svg";
import arrowDownDark from '../assets/icons/arrow-down-dark.svg'

const Nav = () => {
  const isDark = useSelector((state) => state.dark.isDark);
  console.log(isDark);

  return (
    <nav >
      <div className="logo">
        {isDark ? (
          <Link to="/">
            <img src={navIconDark} className="navIcon" />
          </Link>
        ) : (
          <Link to="/">
            <img src={navIcon} className="navIcon" />
          </Link>
        )}
        <Link style={{textDecoration:"none"}} to="/">
          <p className="title">LAWKOS</p>
        </Link>
      </div>
      <div className="nav-links">
        <div className="about-div">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </div>
        <div className="services-div">
          <Link className="nav-link" to="/services">
            Services
          </Link>
          <img src={arrowDownDark}/>
        </div>
        <div className="resources-div">
          <Link className="nav-link" to="/resources">
            Resources
          </Link>
          <img src={arrowDownDark}/>
        </div>
        <div className="news-div">
          <Link className="nav-link" to="/news">
            News
          </Link>
        </div>
        <div className="careers-div">
          <Link className="nav-link" to="/careers">
            Careers
          </Link>
        </div>
      </div>
      <div className="nav-rightPart">
        {isDark ? <img src={phoneIconDark} /> : <img src={phoneIcon} />}
        <div className="number">
          <p className="number-n">+383 123 456 789 </p>
          <p className="number-p">Call our office</p>
        </div>
        <button className="contact-button">Contact Us</button>
      </div>
    </nav>
  );
};

export default Nav;
