import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ closeMenu, showMenu, scrollToTop, navID }) => {
  return (
    <nav className={`navigation${showMenu ? " open" : ""}`} id={navID}>
      <ul className="nav-links-wrapper">
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-nav-link" : ""}`
            }
            onClick={() => {
              scrollToTop();
              closeMenu();
            }}
          >
            Our Company
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/locations"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-nav-link" : ""}`
            }
            onClick={() => {
              scrollToTop();
              closeMenu();
            }}
          >
            Locations
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-nav-link" : ""}`
            }
            onClick={() => {
              scrollToTop();
              closeMenu();
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
