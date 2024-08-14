import "bootstrap/dist/css/bootstrap.min.css";
import "../MobileNav/mobile-nav.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useSelector } from "react-redux";
import navIcon from '../Nav/nav-assets/nav-main-icon.svg';
import navIconDark from '../Nav/nav-assets/nav-icon-dark.svg';
import { Link } from "react-router-dom";


function MobileNav() {
  const isDark = useSelector((state) => state.dark.isDark);
  return (
    <nav className="navbar  fixed-top mobileNav">
      <div className="container-fluid">
        <Link className="navbar-brand mobileTitle" to="/" >
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
            borderColor: isDark ? '#ffffff' : '#000000',
            backgroundColor: isDark ? '#333333' : '#ffffff',
          }}
        >
          <span className={`navbar-toggler-icon  ${isDark ? 'darkk':'whitee'}`}></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title mobileTitleNav" id="offcanvasNavbarLabel">
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
                  About
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
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li >
                    <a className="dropdown-item " href="#">
                      Corporate Law
                    </a>
                  </li>
                  <li >
                    <a className="dropdown-item " href="#">
                      Real Estate
                    </a>
                  </li>
                  <li >
                    <a className="dropdown-item" href="#">
                      Tax & Customs Laws
                    </a>
                  </li>
                  <li >
                    <a className="dropdown-item" href="#">
                      Public Procurement
                    </a>
                  </li>
                  <li >
                    <a className="dropdown-item" href="#">
                      Banking & Finance
                    </a>
                  </li>
                  
                </ul>
              
              </li>

              
              <li className="nav-item  item-mob">
                <a className="nav-link" href="/news">
                  News
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
                  Resources
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Network
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Legal Notices
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Laws of Kosova
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Insights
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
                  Careers
                </a>
              </li>
              

              <button className="btn mobileBtn">Contact Us</button>

              
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
