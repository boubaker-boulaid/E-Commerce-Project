import { Link } from "react-router-dom";
import "./Header.css";
// import logo from '../../assets/logo.svg'
import { useState } from "react";
import NavBar from "../NavBar/NavBar";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? "active" : ""}`} data-header>
      <div className="container">
        <div
          className={`overlay ${isMenuOpen ? "active" : ""}`}
          data-overlay
          onClick={toggleMenu}
        ></div>

        <Link to="/" className="logo">
          <img
            src="/assets/images/logo.svg"
            width="160"
            height="50"
            alt="Footcap logo"
          />
        </Link>

        <button
          className="nav-open-btn"
          data-nav-open-btn
          aria-label="Open Menu"
          onClick={toggleMenu}
        >
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
