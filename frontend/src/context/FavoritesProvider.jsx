import { useMemo } from "react";
import { FavoritesContext } from "./FavoritesContext";
import { useResource } from "../hooks/useResource";

function FavoritesProvider({ children }) {
  const {
    data:favorites,
    error,
    actionToResource
  } = useResource("favorites")
  
  const addToFavorites = async (productId) => {
    const newFavData = {product_id: productId};
    const res = await actionToResource(null,'post',newFavData);
    console.log("resssssssssssssss", res);
  }

  const removeFromFavorites = async (productId) => {
    await actionToResource(`/${productId}`,'delete');
  }

  console.log("favorites", favorites);

  const inFavorites = (productId) => {
    const target = favorites.find(p => p.id === productId);
    if (!target) return false;
    return true;
  }
  
  const values = useMemo(
    () => ({
      favorites,
      addToFavorites,
      removeFromFavorites,
      favoritesCount:favorites.length,
      inFavorites,
      error,
    }),
    [favorites, error],
  );

  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesProvider;
