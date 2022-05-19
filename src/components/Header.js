import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import darkLogo from "../assets/shared/desktop/logo-dark.png";
import hamburgerIcon from "../assets/shared/mobile/icon-hamburger.svg";
import closeIcon from "../assets/shared/mobile/icon-close.svg";
import "./Header.css";

const Header = ({ showMenu, closeMenu }) => {
  return (
    <header className="header container">
      <NavLink to="/">
        <img src={darkLogo} alt="Designo logo" className="logo" />
      </NavLink>
      <button>
        <img src={showMenu ? closeIcon : hamburgerIcon} alt="" />
      </button>
      {showMenu && <Navbar closeMenu={closeMenu} />}
    </header>
  );
};

export default Header;
