import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="section not-found-section">
      <div className="container not-found-content">
        <div className="error-icon">
          <ion-icon name="alert-circle-outline"></ion-icon>
        </div>

        <h1 className="error-code">404</h1>
        <h2 className="h2 not-found-title">Oops! Page Not Found</h2>

        <p className="not-found-text">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <Link to="/" className="btn btn-primary not-found-btn">
          <ion-icon name="home-outline"></ion-icon>
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
