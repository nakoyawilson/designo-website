import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ closeMenu, showMenu }) => {
  return (
    <nav className={`navigation${showMenu ? " open" : ""}`}>
      <ul className="nav-links-wrapper">
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-nav-link" : ""}`
            }
            onClick={closeMenu}
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
            onClick={closeMenu}
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
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
