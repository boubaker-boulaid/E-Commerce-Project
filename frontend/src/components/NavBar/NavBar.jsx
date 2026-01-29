import { Link } from "react-router-dom";
import "./NavBar.css";
import { useAuth } from "../../hooks/useAuth";
import { useFavorites } from "../../hooks/useFavorites";

const NavBar = ({ isMenuOpen, toggleMenu, logo }) => {
  const { isLogin, logout, user } = useAuth();
  const { favoritesCount } = useFavorites();

  const userTextProfile = user?.name ? user.name.slice(0, 2).toUpperCase() : "";

  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      logout();
    }
  };

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
          src="/assets/images/logo.svg"
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
          <Link to="/contact-us" className="navbar-link">
            Contact
          </Link>
        </li>
      </ul>

      <ul className="nav-action-list">
        <li>
          <button className="nav-action-btn">
            <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
          </button>
        </li>
        
        <li>
          <Link to="/favorites" className="nav-action-btn">
            <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
            <data className="nav-action-badge" value="5" aria-hidden="true">
              {favoritesCount}
            </data>
          </Link>
        </li>
        <li>
          <Link to="/cart" className="nav-action-btn">
            <ion-icon name="bag-outline" aria-hidden="true"></ion-icon>
            <data className="nav-action-text" value="318.00"></data>
            <data className="nav-action-badge" value="4" aria-hidden="true">
              4
            </data>
          </Link>
        </li><li>
          {!isLogin ? (
            <Link to="/login" className="nav-action-btn">
              <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
            </Link>
          ) : (
            <div className="user-profile-badge" title={user?.name}>
              {userTextProfile}
            </div>
          )}
        </li>
        <li>
          {isLogin && (
            <button
              className="nav-action-btn"
              onClick={handleLogout}
              title="Logout"
            >
              <ion-icon name="log-out-outline" aria-hidden="true"></ion-icon>
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
