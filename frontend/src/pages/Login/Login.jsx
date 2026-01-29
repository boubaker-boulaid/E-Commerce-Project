import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { loginValidationRules } from "../../assets/validationRules";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const { loading, login, error } = useAuth();

  const initialData = {
    email: "",
    password: "",
  };

  const onValidSubmit = async (formData, reset) => {
    const { email, password } = formData;

    const userdata = await login(email, password);

    if (userdata) {
      navigate("/products");
      reset();
    }
  };

  const { formData, formErrors, handleChange, resetForm, handleSubmit } =
    useForm(initialData, loginValidationRules, onValidSubmit);

  return (
    <section className="section auth-section">
      <div className="container">
        <div className="auth-card">
          <h1 className="h2 auth-title">Log In To Your Account</h1>

          <form onSubmit={handleSubmit} className="auth-form">
            {error && (
              <div
                className="error-message"
                style={{ textAlign: "center", marginBottom: "15px" }}
              >
                {error}
              </div>
            )}

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={handleChange}
                value={formData.email}
                className="form-input"
              />
              {formErrors.email && (
                <span className="error-message"> {formErrors.email} </span>
              )}
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                onChange={handleChange}
                value={formData.password}
                className="form-input"
              />
              {formErrors.password && (
                <span className="error-message"> {formErrors.password} </span>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-auth"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="auth-link">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
