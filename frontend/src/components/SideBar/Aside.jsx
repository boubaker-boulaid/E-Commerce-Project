import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Aside({ user, logout }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    // Exact match for admin root (dashboard)
    if (path === "/admin" && location.pathname === "/admin") return "active";
    // Partial match for other admin routes (e.g. /admin/users matches /admin/users/1)
    if (path !== "/admin" && location.pathname.startsWith(path))
      return "active";
    return "";
  };

  return (
    <aside className="dashboard-sidebar">
      <div className="user-profile">
        <div className="user-avatar">{user?.name?.charAt(0).toUpperCase()}</div>
        <h3 className="user-name">{user?.name}</h3>
        <p className="user-role">Administrator</p>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li className="nav-item">
            <Link to="/admin" className={`nav-link ${isActive("/admin")}`}>
              <ion-icon name="grid-outline"></ion-icon>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/admin/users"
              className={`nav-link ${isActive("/admin/users")}`}
            >
              <ion-icon name="people-outline"></ion-icon>
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/admin/products"
              className={`nav-link ${isActive("/admin/products")}`}
            >
              <ion-icon name="bag-handle-outline"></ion-icon>
              Products
            </Link>
          </li>
        </ul>
      </nav>

      <button
        className="btn btn-secondary logout-btn"
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        <ion-icon name="log-out-outline"></ion-icon>
        Logout
      </button>
    </aside>
  );
}

export default Aside;
