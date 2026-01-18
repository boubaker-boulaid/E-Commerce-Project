import { Link } from "react-router-dom";
import "./ProductCard.css";
// ProductCard component - displays a single product with image, actions, and details
function ProductCard({ image, title, categories, price }) {
  const categoriesList = categories.map((cat, index) => (
    <Link
      to={`/products?category=${cat}`}
      className="card-cat-link"
      key={index}
    >
      {" "}
      ({cat}){" "}
    </Link>
  ));

  return (
    <li className="product-item">
      <div className="product-card" tabIndex="0">
        {/* Product Image Section */}
        <figure className="card-banner">
          {/* Product Image */}
          <img
            src={image}
            width="312"
            height="350"
            loading="lazy"
            alt="Running Sneaker Shoes"
            className="image-contain"
          />

          {/* Action Buttons - appear on hover */}
          <ul className="card-action-list">
            {/* Add to Cart */}
            <li className="card-action-item">
              <button
                className="card-action-btn"
                aria-labelledby="card-label-1"
              >
                <ion-icon name="cart-outline"></ion-icon>
              </button>

              <div className="card-action-tooltip" id="card-label-1">
                Add to Cart
              </div>
            </li>

            {/* Add to favorite */}
            <li className="card-action-item">
              <button
                className="card-action-btn"
                aria-labelledby="card-label-2"
              >
                <ion-icon name="heart-outline"></ion-icon>
              </button>

              <div className="card-action-tooltip" id="card-label-2">
                Add to favorite
              </div>
            </li>

            {/* Quick View */}
            <li className="card-action-item">
              <button
                className="card-action-btn"
                aria-labelledby="card-label-3"
              >
                <ion-icon name="eye-outline"></ion-icon>
              </button>

              <div className="card-action-tooltip" id="card-label-3">
                Quick View
              </div>
            </li>
          </ul>
        </figure>

        {/* Product Details Section */}
        <div className="card-content">
          {/* Product Categories */}
          <div className="card-cat">{categoriesList}</div>

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
