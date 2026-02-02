import ProductCard from "../../components/ProductCard/ProductCard";
import "./Favorites.css";
import { useFavorites } from "../../hooks/useFavorites";

const Favorites = () => {
  const { favorites, faritesCount } = useFavorites();

  return (
    <section className="section product">
      <div className="container">
        <h2 className="h2 section-title">My Favorites</h2>

        {favorites.length > 0 ? (
          <ul className="product-list">
            {favorites.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </ul>
        ) : (
          <div className="favorites-empty">
            <h3 className="h3">No favorites yet!</h3>
            <p>Start exploring and save your favorite items here.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Favorites;
