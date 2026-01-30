import React from "react";
import { useForm } from "../../hooks/useForm";
import { registerValidationRules } from "../../assets/validationRules";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const initialData = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const { register, error, loading, setError } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    setError(null);
  }, []);

  const onValidSubmit = async (data, reset) => {
    const newUser = await register(data);
    if (newUser) {
      reset();
      navigate("/");
    }
  };

  const { formData, formErrors, handleChange, handleSubmit } = useForm(
    initialData,
    registerValidationRules,
    onValidSubmit,
  );


  return (
    <section className="section auth-section">
      <div className="container">
        <div className="auth-card">
          <h1 className="h2 auth-title">Create Account</h1>

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
                type="text"
                name="name"
                placeholder="Your name"
                onChange={handleChange}
                value={formData.name}
                className="form-input"
              />
              {formErrors.name && (
                <span className="error-message"> {formErrors.name} </span>
              )}
            </div>

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

            <div className="form-group">
              <input
                type="password"
                name="password_confirmation"
                placeholder="Confirm Your Password"
                onChange={handleChange}
                value={formData.password_confirmation}
                className="form-input"
              />
              {formErrors.password_confirmation && (
                <span className="error-message">
                  {" "}
                  {formErrors.password_confirmation}{" "}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-auth"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <p className="auth-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;
