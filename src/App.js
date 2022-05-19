import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <>
      <Header showMenu={showMenu} closeMenu={closeMenu} />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
