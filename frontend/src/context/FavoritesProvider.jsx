import React, { useEffect, useMemo, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import useFetch from "../hooks/useFetch";
import apiProducts from "../api/apiProducts";
import apiAuth from "../api/apiAuth";
import { FavoritesContext } from "./FavoritesContext";

function FavoritesProvider({ children }) {
  const { user } = useAuth();

  const {
    data: favorites,
    error,
    refetch,
  } = useFetch(user ? "favorites" : null);

  const addToFavorites = async (productId) => {
    try {
      await apiProducts.post("favorites", { product_id: productId });
      refetch();
    } catch (err) {
      console.error("error adding to favorites", err);
    }
  };

  const removeFromFavorites = async (productId) => {
    try {
      await apiProducts.delete(`favorites/${productId}`);
      refetch();
    } catch (err) {
      console.error("error removing from favorites", err);
    }
  };
  console.log("favorites", favorites)
  const values = useMemo(
    () => ({
      favorites,
      addToFavorites,
      removeFromFavorites,
      favoritesCount:favorites.length,
      error,
    }),
    [favorites, error],
  );

  return (
    <FavoritesContext.Provider value={values}>
      {children}{" "}
    </FavoritesContext.Provider>
  );
}

export default FavoritesProvider;
