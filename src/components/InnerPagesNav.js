import { Link, useLocation } from "react-router-dom";
import rightArrow from "../assets/shared/desktop/icon-right-arrow.svg";
import "./InnerPagesNav.css";

const InnerPagesNav = () => {
  let location = useLocation();

  return (
    <ul className="inner-pages grid container">
      {location.pathname !== "/web" && (
        <li className="inner-page-wrapper">
          <Link to="/web">
            <h2 className="subheading">Web Design</h2>
            <span className="view-projects">
              View Projects
              <img src={rightArrow} alt="" className="right-arrow-icon" />
            </span>
          </Link>
        </li>
      )}
      {location.pathname !== "/app" && (
        <li className="inner-page-wrapper">
          <Link to="/app">
            <h2 className="subheading">App Design</h2>
            <span className="view-projects">
              View Projects
              <img src={rightArrow} alt="" className="right-arrow-icon" />
            </span>
          </Link>
        </li>
      )}
      {location.pathname !== "/graphic" && (
        <li className="inner-page-wrapper">
          <Link to="/graphic">
            <h2 className="subheading">Graphic Design</h2>
            <span className="view-projects">
              View Projects
              <img src={rightArrow} alt="" className="right-arrow-icon" />
            </span>
          </Link>
        </li>
      )}
    </ul>
  );
};

export default InnerPagesNav;
