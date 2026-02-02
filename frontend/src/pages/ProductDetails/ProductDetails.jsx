import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";
import useFetch from "../../hooks/useFetch";
import { useCart } from "../../hooks/useCart";
import { useFavorites } from "../../hooks/useFavorites";
import { useAuth } from "../../hooks/useAuth";

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("42");

  const { data: product, isLoading, error } = useFetch(`/products/${id}`);

  const { cartItems, addUpdateCart, inCart, removeFromCart } = useCart();
  const { addToFavorites, removeFromFavorites, inFavorites } = useFavorites();

  const { isLogin } = useAuth();

  // Helper to safely access product properties
  // Note: id from params is string, product.id might be number
  const productId = product?.id || Number(id);

  const isInCart = inCart(productId);
  const isFavorite = inFavorites(productId);

  // Handlers
  const handleQuantityDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleQuantityIncrease = () => {
    setQuantity((prev) => (prev >= product.stock ? product.stock : prev + 1));
  };

  const handleCartAction = async () => {
    if (!isLogin) {
      alert("please login first");
      return;
    }
    if (isInCart) {
      // Find the cart item ID corresponding to this product
      const cartItem = cartItems?.find((item) => item.product_id === productId);
      const idToRemove = cartItem ? cartItem.id : productId;

      if (window.confirm("Remove item from cart?")) {
        await removeFromCart(idToRemove);
      }
    } else {
      await addUpdateCart(productId, quantity);
    }
  };

  const handleFavoriteAction = async () => {
    if (!isLogin) {
      alert("please login first");
      return;
    }
    if (isFavorite) {
      await removeFromFavorites(productId);
    } else {
      await addToFavorites(productId);
    }
  };

  if (isLoading) {
    return (
      <section className="product-details section">
        <div className="container">
          <div className="loading-state">Loading product details...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="product-details section">
        <div className="container">
          <div className="error-state">Error loading product: {error}</div>
        </div>
      </section>
    );
  }

  // Handle case where fetch hasn't completed or returned empty
  if (!product || Object.keys(product).length === 0) {
    return (
      <section className="product-details section">
        <div className="container">Product not found.</div>
      </section>
    );
  }

  console.log("product details", product);

  const { name, price, description, primary_img_url, brand, stock, category } =
    product;

  return (
    <section className="product-details section">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-link">
            Home
          </Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/products" className="breadcrumb-link">
            Products
          </Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{name}</span>
        </nav>

        <div className="product-details-wrapper">
          {/* Product Image */}
          <div className="product-gallery">
            <div className="gallery-main">
              <img src={primary_img_url} alt={name} className="main-image" />
            </div>
            {/* Optional: Add thumbnails if API provides them */}
          </div>

          {/* Product Info */}
          <div className="product-info">
            {brand && <span className="product-brand">{brand}</span>}
            <h1 className="product-title">{name}</h1>

            {/* Price */}
            <div className="product-price-wrapper">
              <span className="current-price">${price}</span>
            </div>

            {/* Description */}
            <p className="product-description">{description}</p>

            {/* Size (Interactive UI for now) */}
            <div className="product-option">
              <h4 className="option-title">
                Size: <span>{selectedSize}</span>
              </h4>
              <div className="size-options">
                {["40", "41", "42", "43"].map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? "active" : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="product-option">
              <h4 className="option-title">Quantity:</h4>
              <div className="quantity-wrapper">
                <button
                  className="quantity-btn"
                  onClick={handleQuantityDecrease}
                  disabled={quantity <= 1}
                >
                  <ion-icon name="remove-outline"></ion-icon>
                </button>
                <span className="quantity-value">{quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={handleQuantityIncrease}
                >
                  <ion-icon name="add-outline"></ion-icon>
                </button>
              </div>

              {stock !== undefined && (
                <span className="stock-info">
                  {Number(stock) > 0 ? (
                    <>
                      <ion-icon name="checkmark-circle"></ion-icon>
                      {stock} items in stock
                    </>
                  ) : (
                    <span style={{ color: "red" }}>Out of stock</span>
                  )}
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="product-actions">
              <button
                className="btn btn-add-cart"
                onClick={handleCartAction}
                style={
                  isInCart
                    ? {
                        backgroundColor: "var(--bittersweet)",
                        color: "white",
                        borderColor: "var(--bittersweet)",
                      }
                    : {}
                }
              >
                <ion-icon
                  name={isInCart ? "cart" : "bag-add-outline"}
                ></ion-icon>
                {isInCart ? "Remove from Cart" : "Add to Cart"}
              </button>
              <button
                className={`btn btn-wishlist ${isFavorite ? "active" : ""}`}
                onClick={handleFavoriteAction}
                style={{
                  backgroundColor: "white",
                  borderColor: isFavorite ? "var(--bittersweet)" : undefined,
                }}
              >
                <ion-icon
                  name={isFavorite ? "heart" : "heart-outline"}
                  style={{
                    color: isFavorite ? "var(--bittersweet)" : "inherit",
                  }}
                ></ion-icon>
              </button>
            </div>

            {/* Category */}
            {category && (
              <div className="product-meta">
                <p>
                  Category:{" "}
                  <Link
                    to={`/products?category=${category}`}
                    style={{ color: "var(--bittersweet)" }}
                  >
                    {category}
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;