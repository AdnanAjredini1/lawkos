import React from "react";
import { Link } from "react-router-dom";
import navIcon from "../Nav/nav-assets/nav-main-icon.svg";
import { useSelector } from "react-redux";
import phoneIcon from "../Nav/nav-assets/phone.svg";
import navIconDark from "../Nav/nav-assets/nav-icon-dark.svg";
import phoneIconDark from "../Nav/nav-assets/phone-dark.svg";
import arrowDownDark from "../Nav/nav-assets/arrow-down-dark.svg";
import arrowDown from "../Nav/nav-assets/downArrow.svg";
import ServicesMenu from "./ServicesMenu";
import ResourcesMenu from "./ResourcesMenu";

const Nav = () => {
  const isDark = useSelector((state) => state.dark.isDark);
  console.log(isDark);

  return (
    <div id="nav">
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
        <Link style={{ textDecoration: "none" }} to="/">
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
          <Link className="nav-link service" to="/services">
            Services
            {isDark ? <img  className="arrow" src={arrowDown} /> : <img className="arrow" src={arrowDownDark} />}
          </Link>
          <div className="lene-div">
          <div className='line'>
            <div className="lineee"></div>
          </div>
          </div>
         
          <ServicesMenu  />
        </div>
        <div className="resources-div">
          <Link className="nav-link resource" to="/resources">
            Resources
            {isDark ? <img className="arrow" src={arrowDown} /> : <img className="arrow" src={arrowDownDark} />}
          </Link>
          <div className="lene-div">
          <div className='line'>
            <div className="lineee"></div>
          </div>
          </div>
         
          <ResourcesMenu  />
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
    </div>
  );
};

export default Nav;
