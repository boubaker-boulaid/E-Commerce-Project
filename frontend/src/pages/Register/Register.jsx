import React from "react";
import { useForm } from "../../hooks/useForm";
import { registerValidationRules } from "../../assets/validationRules";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Register() {
  const initialData = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const { register, error, loading } = useAuth();
  const navigate = useNavigate();

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
    <form onSubmit={handleSubmit}>
      {error && (
        <div style={{ color: "red", marginBottom: "10px" }}> {error} </div>
      )}

      <h1>Create Account</h1>

      <input
        type="text"
        name="name"
        placeholder="Your name"
        onChange={handleChange}
        value={formData.name}
        className="form-input"
      />
      {formErrors.name && (
        <span style={{ color: "red" }}> {formErrors.name} </span>
      )}

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        onChange={handleChange}
        value={formData.email}
        className="form-input"
      />
      {formErrors.email && (
        <span style={{ color: "red" }}> {formErrors.email} </span>
      )}

      <input
        type="password"
        name="password"
        placeholder="Your Password"
        onChange={handleChange}
        value={formData.password}
        className="form-input"
      />
      {formErrors.password && (
        <span style={{ color: "red" }}> {formErrors.password} </span>
      )}

      <input
        type="password"
        name="password_confirmation"
        placeholder="Confirm Your Password"
        onChange={handleChange}
        value={formData.password_confirmation}
        className="form-input"
      />
      {formErrors.password_confirmation && (
        <span style={{ color: "red" }}> {formErrors.password_confirmation} </span>
      )}

      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </button>
    </form>
  );
}

export default Register;
