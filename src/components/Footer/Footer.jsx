import "../Footer/footer.scss";
import darkIcon from "../Nav/nav-assets/nav-icon-dark.svg";
import phoneIconDark from "../Nav/nav-assets/phone-dark.svg";
import fb from './footer-assets/facebook.svg'
import linkedin from './footer-assets/linkedin.svg'
import insta from './footer-assets/instagram.svg'

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="first-row">
        <div className="left-part-first">
          <div className="title">
            <img src={darkIcon} />
            <p className="titlep">LAWKOS</p>
            <p className="p-legal">Legal Excellenca</p>
          </div>
          <div className="subscribe-div">
            <p className="subscribe-p">Subscribe to our newsletter</p>
            <input
              type="email"
              className="subscribe-input"
              placeholder="Enter your email"
            />
            <button className="subscribe-button">Subscribe</button>
          </div>
          <div >
            <div className="second-rowww">
            <img src={phoneIconDark} />
            <div className="numberrr">
              <p className="number-n">+383 123 456 789 </p>
              <p className="number-p">Call our office</p>
            </div>
            </div>
            <div style={{display:'flex',flexDirection:'row',gap:'15px',textAlign:'center'}}>
            <p className="connect-p">Connect with us:</p>
            <img style={{paddingBottom:'28px'}} src={linkedin} />
            <img style={{paddingBottom:'28px'}} src={fb} />
            <img style={{paddingBottom:'28px'}} src={insta} />
          
            </div>
          </div>
        </div>
        <div className="right-part-first">
          <div className="rowww">
            <p className="titleee">about</p>
            <p className="elementtt">Our Story</p>
            <p className="elementtt">Our Team</p>
            <p className="elementtt">Careers</p>
            <p className="elementtt">Clients & Partners</p>
          </div>
          <div className="rowww">
            <p className="titleee">services</p>
            <p className="elementtt">Practice Area</p>
            <p className="elementtt">Solutions</p>
            <p className="elementtt">Legal Tech</p>
            <p className="elementtt">Case Studies</p>
          </div>
          <div className="rowww">
            <p className="titleee">Resources</p>
            <p className="elementtt">Contact Us</p>
            <p className="elementtt">Latest News</p>
            <p className="elementtt">Insights</p>
            <p className="elementtt">Legal Notices</p>
          </div>
        </div>
      </div>

      <div className="third-row"></div>
    </div>
  );
}

export default Footer;
