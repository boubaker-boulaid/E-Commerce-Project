import { Link } from "react-router-dom";

const NavBar = ({isMenuOpen, toggleMenu, logo}) => {

    return (
        <nav className={`navbar ${isMenuOpen ? "active" : ""}`} data-navbar>
          <button
            className="nav-close-btn"
            data-nav-close-btn
            aria-label="Close Menu"
            onClick={toggleMenu}
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <Link to="/" className="logo">
            <img
              src="./assets/images/logo.svg"
              width="190"
              height="50"
              alt="Footcap logo"
            />
          </Link>

          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="navbar-link">
                About
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/products" className="navbar-link">
                Products
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/blog" className="navbar-link">
                Blog
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact-us" className="navbar-link">
                Contact
              </Link>
            </li>
          </ul>

          <ul className="nav-action-list">
            <li>
            
              <button className="nav-action-btn">
                {/* <input type="text" /> */}
                <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
                <span className="nav-action-text">Search</span>
              </button>
            </li>
            <li>
              <Link to="/login" className="nav-action-btn">
                <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                <span className="nav-action-text">Login / Register</span>
              </Link>
            </li>
            <li>
              <Link to="/favorites" className="nav-action-btn">
                <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
                <span className="nav-action-text">Wishlist</span>
                <data className="nav-action-badge" value="5" aria-hidden="true">
                  5
                </data>
              </Link>
            </li>
            <li>
              <Link to="/cart" className="nav-action-btn">
                <ion-icon name="bag-outline" aria-hidden="true"></ion-icon>
                <data className="nav-action-text" value="318.00">
                  Basket: <strong>$318.00</strong>
                </data>
                <data className="nav-action-badge" value="4" aria-hidden="true">
                  4
                </data>
              </Link>
            </li>
          </ul>
        </nav>
    )
}

export default NavBar;