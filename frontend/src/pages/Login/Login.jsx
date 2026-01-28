import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { loginValidationRules } from "../../assets/validationRules";

function Login() {
  const navigate = useNavigate();

  const { user, loading, login, error, isLogin, isAdmin } = useAuth();

  console.log("user", user);
  console.log("loading", loading);
  console.log("error", error);
  console.log("islogin", isLogin);
  console.log("isAdmin", isAdmin);

  // const handleSubmit = (e) => {
  //     e.preventDefault();

  //     login(email, password);

  //     if (user) {
  //       navigate(-1)
  //     }

  // }

  const initialData = {
    email: "",
    password: "",
  };

  const onValidSubmit = async (formData, reset) => {
    const { email, password } = formData;

    const userdata = await login(email, password);

    if (userdata) {
      navigate(-1);
      reset();
    }
  };

  const { formData, formErrors, handleChange, resetForm, handleSubmit } =
    useForm(initialData, loginValidationRules, onValidSubmit);

  return (
    <form onSubmit={handleSubmit}>
      {error && <span style={{ color: "red" }}> {error} </span>}
      <h1>Log In To Your Account</h1>
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
      <button type="submit" className="btn btn-primary">
        Login
      </button>{" "}
      <span>
        dont have account <Link to="/register">register</Link>{" "}
      </span>
    </form>
  );
}

export default Login;
