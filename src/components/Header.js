import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import darkLogo from "../assets/shared/desktop/logo-dark.png";
import hamburgerIcon from "../assets/shared/mobile/icon-hamburger.svg";
import closeIcon from "../assets/shared/mobile/icon-close.svg";
import "./Header.css";

const Header = ({ showMenu, closeMenu, toggleMenu }) => {
  return (
    <header className="header container">
      <Link to="/">
        <img src={darkLogo} alt="Designo logo" className="logo" />
      </Link>
      <button onClick={toggleMenu}>
        <img src={showMenu ? closeIcon : hamburgerIcon} alt="" />
      </button>
      <Navbar closeMenu={closeMenu} showMenu={showMenu} />
    </header>
  );
};

export default Header;
