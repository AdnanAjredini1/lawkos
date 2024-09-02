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
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

const Nav = () => {
  const isDark = useSelector((state) => state.dark.isDark);
  console.log(isDark);

  const [navbarBackground, setNavbarBackground] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 50) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="navv" className={navbarBackground ? "nav-scrolled" : ""}>
      <div className="logoo">
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
      <div className="nav-linkss">
        <div className="about-div">
          <Link className="nav-link" to="/about">
            <FormattedMessage id="About">About</FormattedMessage>
            
          </Link>
        </div>
        <div className="services-div">
          <Link className="nav-link service" to="/services">
            <FormattedMessage id="Services"> Services</FormattedMessage>
            {isDark ? (
              <img className="arrow" src={arrowDown} />
            ) : (
              <img className="arrow" src={arrowDownDark} />
            )}
          </Link>
          <div className="lene-div">
            <div className="line1">
              <div className="lineee"></div>
            </div>
          </div>

          <ServicesMenu />
        </div>
        <div className="resources-div">
          <Link className="nav-link resource" to="/resources">
            <FormattedMessage id="Resources"> Resources</FormattedMessage>
            {isDark ? (
              <img className="arrow" src={arrowDown} />
            ) : (
              <img className="arrow" src={arrowDownDark} />
            )}
          </Link>
          <div className="lene-div">
            <div className="line1">
              <div className="lineee"></div>
            </div>
          </div>

          <ResourcesMenu />
        </div>
        <div className="news-div">
          <Link className="nav-link" to="/news">
            <FormattedMessage id="News"> News</FormattedMessage>
          </Link>
        </div>
        <div className="careers-div">
          <Link className="nav-link" to="/careers">
            <FormattedMessage id="Careers">Careers</FormattedMessage>
          </Link>
        </div>
      </div>
      <div className="nav-rightPart">
        {isDark ? <img src={phoneIconDark} /> : <img src={phoneIcon} />}
        <div className="number">
          <p className="number-n">+383 123 456 789 </p>
          <p className="number-p"><FormattedMessage id="Call our office" defaultMessage="Call our office" /></p>
        </div>
        <button className="contact-button">
          <FormattedMessage id="Contact Us" defaultMessage="Contact Us"/>
        </button>
      </div>
    </div>
  );
};

export default Nav;
