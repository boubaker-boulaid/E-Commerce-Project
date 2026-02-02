import { Link } from "react-router-dom";
import "./ProductCard.css";
import { useFavorites } from "../../hooks/useFavorites";
import { useCart } from "../../hooks/useCart";


function ProductCard({ id, primary_img_url, title, category, price }) {
  const {addToFavorites, removeFromFavorites, inFavorites } = useFavorites();
  const {addUpdateCart, inCart, removeFromCart} = useCart();

  const isInCart = inCart(id);
  const isFavorite = inFavorites(id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites(id);
    }
  };


  const handlePanierClick = () => {
    if (isInCart) {
      if (confirm("remove from cart?")) {
        removeFromCart(id);
      }
    } else {
      addUpdateCart(id, 1);
    } 
  }



  return (
    <li className="product-item">
      <div className="product-card" tabIndex="0">
        <figure className="card-banner">
          <img
            src={primary_img_url}
            width="312"
            height="350"
            loading="lazy"
            alt={title}
            className="image-contain"
          />

          {/* Action Buttons - appear on hover */}
          <ul className="card-action-list">
            {/* Add to Cart */}
            <li className="card-action-item">
              <button
                className="card-action-btn"
                aria-labelledby="card-label-1"
                onClick={handlePanierClick}
                style={{color: isInCart ? "var(--bittersweet)" : ""}}
              >
                <ion-icon name={isInCart ? "cart" : "cart-outline"}></ion-icon>
              </button>

              <div className="card-action-tooltip" id="card-label-1">
                Add to Cart
              </div>
            </li>

            {/* Add to favorite */}
            <li className="card-action-item">
              <button
                className={`card-action-btn ${isFavorite ? "active" : ""}`}
                aria-labelledby="card-label-2"
                onClick={handleFavoriteClick}
                style={{ color: isFavorite ? "var(--bittersweet)" : "" }}
              >
                <ion-icon
                  name={isFavorite ? "heart" : "heart-outline"}
                ></ion-icon>
              </button>

              <div className="card-action-tooltip" id="card-label-2">
                {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
              </div>
            </li>

            {/* Quick View */}
            <li className="card-action-item">
              <Link
                to={`/products/${id}`}
                className="card-action-btn"
                aria-labelledby="card-label-3"
              >
                <ion-icon name="eye-outline"></ion-icon>
              </Link>

              <div className="card-action-tooltip" id="card-label-3">
                Quick View
              </div>
            </li>
          </ul>
        </figure>

        {/* Product Details Section */}
        <div className="card-content">
          {/* Product Categories */}
          <div className="card-cat">
            <Link
              to={`/products?category=${category}`}
              className="card-cat-link"
            >
              ({category})
            </Link>
          </div>

          {/* Product Title */}
          <h3 className="h3 card-title">
            <a href="#">{title} </a>
          </h3>

          {/* Product Price */}
          <data className="card-price" value="180.85">
            {price} $
          </data>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
