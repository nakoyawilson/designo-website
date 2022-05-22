import { Link, useLocation } from "react-router-dom";
import rightArrow from "../assets/shared/desktop/icon-right-arrow.svg";
import "./InnerPagesNav.css";

const InnerPagesNav = ({ scrollToTop }) => {
  let location = useLocation();

  return (
    <ul className="inner-pages grid container" id="services">
      {location.pathname !== "/web" && (
        <Link
          to="/web"
          onClick={scrollToTop}
          className="inner-page-wrapper web-design"
        >
          <li>
            <h2 className="subheading">Web Design</h2>
            <span className="view-projects">
              View Projects
              <img src={rightArrow} alt="" className="right-arrow-icon" />
            </span>
          </li>
        </Link>
      )}
      {location.pathname !== "/app" && (
        <Link
          to="/app"
          onClick={scrollToTop}
          className="inner-page-wrapper app-design"
        >
          <li>
            <h2 className="subheading">App Design</h2>
            <span className="view-projects">
              View Projects
              <img src={rightArrow} alt="" className="right-arrow-icon" />
            </span>
          </li>
        </Link>
      )}
      {location.pathname !== "/graphic" && (
        <Link
          to="/graphic"
          onClick={scrollToTop}
          className="inner-page-wrapper graphic-design"
        >
          <li>
            <h2 className="subheading">Graphic Design</h2>
            <span className="view-projects">
              View Projects
              <img src={rightArrow} alt="" className="right-arrow-icon" />
            </span>
          </li>
        </Link>
      )}
    </ul>
  );
};

export default InnerPagesNav;
