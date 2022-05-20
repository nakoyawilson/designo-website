import { Link, useLocation } from "react-router-dom";
import CallToAction from "./CallToAction";
import Navbar from "./Navbar";
import lightLogo from "../assets/shared/desktop/logo-light.png";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import youtube from "../assets/shared/desktop/icon-youtube.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import pinterest from "../assets/shared/desktop/icon-pinterest.svg";
import "./Footer.css";

const Footer = ({ scrollToTop }) => {
  let location = useLocation();

  return (
    <footer className="footer">
      {location.pathname !== "/contact" && (
        <CallToAction scrollToTop={scrollToTop} />
      )}
      <div className="container">
        <div className="content-wrapper">
          <Link to="/" onClick={scrollToTop}>
            <img src={lightLogo} alt="Designo logo" className="logo" />
          </Link>
          <Navbar scrollToTop={scrollToTop} />
        </div>
        <div className="content-wrapper">
          <address className="contact-details-wrapper">
            <span className="contact-detail contact-detail-heading">
              Designo Central Office
            </span>
            <span className="contact-detail">3886 Wellington Street</span>
            <span className="contact-detail">Toronto, Ontario M9C 3J5</span>
          </address>
          <address className="contact-details-wrapper">
            <span className="contact-detail contact-detail-heading">
              Contact Us (Central Office)
            </span>
            <span className="contact-detail">P : +1 253-863-8967</span>
            <span className="contact-detail">M : contact@designo.co</span>
          </address>
          <ul className="social-icons-wrapper">
            <li>
              <img src={facebook} alt="" className="social-icon" />
            </li>
            <li>
              <img src={youtube} alt="" className="social-icon" />
            </li>
            <li>
              <img src={twitter} alt="" className="social-icon" />
            </li>
            <li>
              <img src={pinterest} alt="" className="social-icon" />
            </li>
            <li>
              <img src={instagram} alt="" className="social-icon" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
