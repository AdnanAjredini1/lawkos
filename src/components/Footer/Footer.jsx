import "../Footer/footer.scss";
import darkIcon from "../Nav/nav-assets/nav-icon-dark.svg";
import phoneIconDark from "../Nav/nav-assets/phone-dark.svg";
import fb from "./footer-assets/facebook.svg";
import linkedin from "./footer-assets/linkedin.svg";
import insta from "./footer-assets/instagram.svg";
import xIcon from "./footer-assets/X.svg";
import sunnyIcon from "./footer-assets/sunny-sharp.svg";
import moonIcon from "./footer-assets/moon.svg";
import { useDispatch, useSelector } from "react-redux";
import { darkActions } from "../../store/slice/darkModeSlice";
import SelectLanguage from "./SelectLanguage/SelectLanguage";
import { FormattedMessage } from "react-intl";
import SwitchModeButton from "../SwitchModeButton/SwitchModeButton";

function Footer() {
  const isDark = useSelector((state) => state.dark.isDark);
  const dispatch = useDispatch();

  return (
    <div className="footer-wrapper">
      <div className="first-row">
        <div className="left-part-first">
          <div className="title">
            <img src={darkIcon} />
            <p className="titlep">LAWKOS</p>
            <p className="p-legal">
              <FormattedMessage
                id="Legal Excellenca"
                defaultMessage="Legal Excellenca"
              />
            </p>
          </div>
          <div className="subscribe-div">
            <p className="subscribe-p">
              <FormattedMessage
                id="Subscribe to our newsletter"
                defaultMessage="Subscribe to our newsletter"
              />
            </p>
            <input
              type="email"
              className="subscribe-input"
              placeholder="Enter your email"
            />
            <button className="subscribe-button">
              <FormattedMessage id="Subscribe" defaultMessage="Subscribe" />
            </button>
          </div>
          <div className="part2">
            <div className="second-rowww">
              <img src={phoneIconDark} />
              <div className="numberrr">
                <p className="number-n">+383 123 456 789 </p>
                <p className="number-p">
                  <FormattedMessage
                    id="Call our office"
                    defaultMessage="Call our office"
                  />
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "15px",
                textAlign: "center",
              }}
            >
              <p className="connect-p">
                <FormattedMessage
                  id="Connect with us:"
                  defaultMessage="Connect with us:"
                />
              </p>
              <img
                width={27}
                height={26}
                style={{ cursor: "pointer" }}
                src={linkedin}
              />
              <img
                width={27}
                height={26}
                style={{ cursor: "pointer" }}
                src={xIcon}
              />
              <img
                width={14}
                height={28}
                style={{ cursor: "pointer" }}
                src={fb}
              />
              <img
                width={29}
                height={29}
                style={{ cursor: "pointer" }}
                src={insta}
              />
            </div>
          </div>
        </div>
        <div className="right-part-first">
          <div className="rowww">
            <p className="titleee">
              <FormattedMessage id="About" defaultMessage="About" />
            </p>
            <p className="elementtt">
              <FormattedMessage id="Our Story" defaultMessage="Our Story" />
            </p>
            <p className="elementtt">
              <FormattedMessage id="Our Team" defaultMessage="Our Team" />
            </p>
            <p className="elementtt">
              <FormattedMessage id="Careers" defaultMessage="Careers" />
            </p>
            <p className="elementtt">
              <FormattedMessage
                id="Clients & Partners"
                defaultMessage="Clients & Partners"
              />
            </p>
          </div>
          <div className="rowww">
            <p className="titleee">
              <FormattedMessage id="Services" defaultMessage="Services" />
            </p>
            <p className="elementtt">
              <FormattedMessage
                id="Practice Area"
                defaultMessage="Practice Area"
              />
            </p>
            <p className="elementtt">
              <FormattedMessage id="Solutions" defaultMessage="Solutions" />
            </p>
            <p className="elementtt">
              <FormattedMessage id="Legal Tech" defaultMessage="Legal Tech" />
            </p>
            <p className="elementtt">
              <FormattedMessage
                id="Case Studies"
                defaultMessage="Case Studies"
              />
            </p>
          </div>
          <div className="rowww">
            <p className="titleee">
              <FormattedMessage id="Resources" defaultMessage="Resources" />
            </p>
            <p className="elementtt">
              <FormattedMessage id="Contact Us" defaultMessage="Contact Us" />
            </p>
            <p className="elementtt">
              <FormattedMessage id="Latest News" defaultMessage="Latest News" />
            </p>
            <p className="elementtt">
              <FormattedMessage id="Insights" defaultMessage="Insights" />
            </p>
            <p className="elementtt">
              <FormattedMessage
                id="Legal Notices"
                defaultMessage="Legal Notices"
              />
            </p>
          </div>
        </div>
      </div>

      <div className="third-row">
        <div className="last-line"></div>
        <div className="last-row-footer">
          <p className="p-first-lats-row">
            <FormattedMessage
              id="© 2024 LAWKOS. All rights reserved"
              defaultMessage="© 2024 LAWKOS. All rights reserved"
            />
          </p>
          <p className="p-lats-row">
            <FormattedMessage id="Privacy" defaultMessage="Privacy" />{" "}
            &nbsp;&nbsp; | &nbsp;&nbsp;{" "}
            <FormattedMessage id="Cookies" defaultMessage="Cookies" />
          </p>
          <div className="languageAndDark">
            <SwitchModeButton
              wrapperClasses="switch-mode-div "
              switchIconClasses="iconSwitch"
              switchButtonClasses="switchButton"
              moonIcon={moonIcon}
              sunnyIcon={sunnyIcon}
            />

            <SelectLanguage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
