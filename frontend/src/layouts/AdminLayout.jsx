import React from "react";
import { Outlet } from "react-router-dom";
import Aside from "../components/SideBar/Aside";
import { useAuth } from "../hooks/useAuth";
import "./AdminLayout.css";

function AdminLayout() {
  const { user, logout } = useAuth();
  return (
    <section className="section admin-section">
      <div className="container admin-container">
        <Aside user={user} logout={logout} />
        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </section>
  );
}

export default AdminLayout;
