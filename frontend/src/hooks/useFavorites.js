import { useContext } from "react"
import { FavoritesContext } from "../context/FavoritesContext"

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
   
    return context;
}