import "bootstrap/dist/css/bootstrap.min.css";
import "../MobileNav/mobile-nav.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useSelector } from "react-redux";
import navIcon from "../Nav/nav-assets/nav-main-icon.svg";
import navIconDark from "../Nav/nav-assets/nav-icon-dark.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SwitchModeButton from "../SwitchModeButton/SwitchModeButton";
import moonIcon from "./moon.svg";
import sunnyIcon from "./sunny-sharp.svg";
import SelectLanguage from "../Footer/SelectLanguage/SelectLanguage";
import { FormattedMessage } from "react-intl";

function MobileNav() {
  const isDark = useSelector((state) => state.dark.isDark);

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
    <nav
      className={`navbar  fixed-top mobileNav ${
        navbarBackground ? "nav-scrolled  " : ""
      }`}
    >
      <div className="container-fluid ">
        <Link className="navbar-brand mobileTitle" to="/">
          {isDark ? (
            <img src={navIconDark} className="navIconn" />
          ) : (
            <img src={navIcon} className="navIconn" />
          )}
          LAWKOS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          style={{
            borderColor: isDark ? "#ffffff" : "#000000",
            backgroundColor: isDark ? "#333333" : "#ffffff",
          }}
        >
          <span
            className={`navbar-toggler-icon  ${isDark ? "darkk" : "whitee"}`}
          ></span>
        </button>
        <div
          className="offcanvas offcanvas-start container-fluid-bg-color"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title mobileTitleNav"
              id="offcanvasNavbarLabel"
            >
              LAWKOS
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item item-mob">
                <a className="nav-link " aria-current="page" href="/about">
                  <FormattedMessage id="About" defaultMessage="About"/> 
                </a>
              </li>

              <li className="nav-item dropdown  item-mob">
                <a
                  className="nav-link dropdown-toggle "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FormattedMessage id="Services" defaultMessage="Services"/>  
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item " href="#">
                    <FormattedMessage id="Corporate Law" defaultMessage="Corporate Law"/>   
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="#">
                    <FormattedMessage id="Real Estate" defaultMessage="Real Estate"/>  
                      
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    <FormattedMessage id="Tax & Customs Laws " defaultMessage="Tax & Customs Laws "/>
                  
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    <FormattedMessage id="Public Procurement" defaultMessage="Public Procurement"/> 
                      
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    <FormattedMessage id="Banking & Finance" defaultMessage="Banking & Finance"/>  
                      
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item  item-mob">
                <a className="nav-link" href="/news">
                <FormattedMessage id="News" defaultMessage="News"/>  
                  
                </a>
              </li>

              <li className="nav-item dropdown  item-mob">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 <FormattedMessage id="Resources" defaultMessage="Resources"/>  
                  
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                    <FormattedMessage id="Network" defaultMessage="Network"/> 
                      
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    <FormattedMessage id="Legal Notices" defaultMessage="Legal Notices"/>
                      
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                    <FormattedMessage id="Laws of Kosova" defaultMessage="Laws of Kosova"/> 
                      
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    <FormattedMessage id="Insights" defaultMessage="Insights"/> 
                      
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#"> 

                      Podcast
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item  item-mob">
                <a className="nav-link" href="/news">
                <FormattedMessage id="Careers" defaultMessage="Careers"/> 
                  
                </a>
              </li>

              <button className="btn mobileBtn"><FormattedMessage id="Contact Us" defaultMessage="Contact Us"/> </button>
              <div className="switchButtonSelectLanguageWrapper">
                <SwitchModeButton
                  wrapperClasses="switch-mode-div "
                  switchIconClasses="iconSwitch"
                  switchButtonClasses="switchButton"
                  sunnyIcon={sunnyIcon}
                  moonIcon={moonIcon}
                />
                <SelectLanguage />
              </div>
            </ul>
            {/* <form className="d-flex mt-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MobileNav;
