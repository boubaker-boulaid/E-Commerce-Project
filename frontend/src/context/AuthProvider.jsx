import React, { useEffect, useMemo, useState } from "react";
import { AuthContext } from "./AuthContext";
import apiAuth from "../api/apiAuth";

function AuthProvider({ children }) {
  // set user to null if there is no user in localStorage
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null,
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(!!user);
  const [isAdmin, setIsAdmin] = useState(user?.role === "admin" || false);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      setIsLogin(true);
      setIsAdmin(user.role === "admin");
    } else {
      localStorage.removeItem("user");
      setIsLogin(false);
      setIsAdmin(false);
    }
  }, [user]);

  const handleAuth = async (endPoint, userData) => {
    try {
      setLoading(true);
      setUser(null); //clear the previous user

      await apiAuth.get("sanctum/csrf-cookie"); //get the cookie
      await apiAuth.post(endPoint, userData);

      const res = await apiAuth.get("api/user");
      console.log("user info ", res);
      setUser(res.data);

      return res.data;
    } catch (err) {
      console.error("Auth error", err);
      if (err.status === 422) {
        setError("invalide email or password !");
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const login = (email, password) => handleAuth("login", { email, password });

  const register = (userData) => handleAuth("register", userData);

  const logout = async () => {
    try {
      await apiAuth.post("logout", {});
      setUser(null);
      setIsLogin(false);
      setIsAdmin(false);
    } catch (err) {
      console.error("logout error", err);

      setUser(null);
      setIsLogin(false);
      setIsAdmin(false);
    }
  };

  const values = useMemo(
    () => ({
      user,
      loading,
      login,
      register,
      logout,
      error,
      isAdmin,
      isLogin,
    }),
    [user, loading, error, isAdmin, isLogin],
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
