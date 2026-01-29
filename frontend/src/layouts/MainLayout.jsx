import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="main-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
