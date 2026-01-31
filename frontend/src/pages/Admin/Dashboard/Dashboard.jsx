import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useResource } from "../../../hooks/useResource";
import "./Dashboard.css";

function Dashboard() {
  const { user } = useAuth();

  const { data: usersStatistic } = useResource("users_statistic");
  const { data: productsStatistic } = useResource("products_statistic");

  const usersCount = usersStatistic?.usersCount || 0;
  const productsCount = productsStatistic?.productsCount || 0;

  return (
    <div className="dashboard-content">
      <div className="content-header">
        <h2
          className="h2 section-title"
          style={{ textAlign: "left", marginBottom: "10px" }}
        >
          Dashboard Overview
        </h2>
        <p style={{ color: "var(--onyx)" }}>
          Welcome back, {user?.name}! Here is your daily digest.
        </p>
      </div>

      <div className="stat-grid">
        <Link to="/admin/users" className="stat-card">
          <div className="stat-icon users">
            <ion-icon name="people"></ion-icon>
          </div>
          <div className="stat-info">
            <span className="stat-label">Total Users</span>
            <span className="stat-value">{usersCount}</span>
          </div>
        </Link>

        <Link to="/admin/products" className="stat-card">
          <div className="stat-icon products">
            <ion-icon name="bag-handle"></ion-icon>
          </div>
          <div className="stat-info">
            <span className="stat-label">Total Products</span>
            <span className="stat-value">{productsCount}</span>
          </div>
        </Link>

        <div className="stat-card">
          <div className="stat-icon orders">
            <ion-icon name="cart"></ion-icon>
          </div>
          <div className="stat-info">
            <span className="stat-label">Total Orders</span>
            <span className="stat-value">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
