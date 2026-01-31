import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";
import useFetch from "../../hooks/useFetch";
import { useResource } from "../../hooks/useResource";

const ProductDetails = () => {
  const {id} = useParams();

  const { data:product, error } = useResource(`/products/${id}`);
  console.log('product from product details', product);
  return (
    <section className="product-details section">
      <div className="container">

        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/products" className="breadcrumb-link">Products</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Running Sport Sneaker</span>
        </nav>

        <div className="product-details-wrapper">

          {/* Product Image */}
          <div className="product-gallery">
            <div className="gallery-main">
              <img
                src="/assets/images/product-1.jpg"
                alt="Running Sport Sneaker"
                className="main-image"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">

            <span className="product-brand">Nike</span>
            <h1 className="product-title">Running Sport Sneaker</h1>

            {/* Price */}
            <div className="product-price-wrapper">
              <span className="current-price">$150.00</span>
            </div>

            {/* Description */}
            <p className="product-description">
              Premium running sneakers designed for comfort and performance.
              Lightweight, breathable, and perfect for everyday training.
            </p>

            {/* Size (Static) */}
            <div className="product-option">
              <h4 className="option-title">Size: <span>EU 42</span></h4>
              <div className="size-options">
                <button className="size-btn">40</button>
                <button className="size-btn">41</button>
                <button className="size-btn active">42</button>
                <button className="size-btn">43</button>
              </div>
            </div>

            {/* Quantity (Static) */}
            <div className="product-option">
              <h4 className="option-title">Quantity:</h4>
              <div className="quantity-wrapper">
                <button className="quantity-btn">-</button>
                <span className="quantity-value">1</span>
                <button className="quantity-btn">+</button>
              </div>

              <span className="stock-info">
                <ion-icon name="checkmark-circle"></ion-icon>
                24 items in stock
              </span>
            </div>

            {/* Actions */}
            <div className="product-actions">
              <button className="btn btn-add-cart">
                <ion-icon name="bag-add-outline"></ion-icon>
                Add to Cart
              </button>
              <button className="btn btn-wishlist">
                <ion-icon name="heart-outline"></ion-icon>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
