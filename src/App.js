import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => {
    setShowMenu(false);
    document.body.classList.toggle("lock-scroll");
  };

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
    document.body.classList.toggle("lock-scroll");
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header
        showMenu={showMenu}
        closeMenu={closeMenu}
        toggleMenu={toggleMenu}
        scrollToTop={scrollToTop}
      />
      <Outlet context={scrollToTop} />
      <Footer scrollToTop={scrollToTop} />
    </>
  );
}

export default App;
