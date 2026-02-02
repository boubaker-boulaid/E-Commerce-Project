import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, addUpdateCart } = useCart();

  const handleUpdateQuantity = (productId, currentQty, delta) => {
    const newQty = currentQty + delta;
    if (newQty >= 1) {
      addUpdateCart(productId, newQty);
    }
  };

  const handleRemove = (cartId) => {
    if (window.confirm("Remove this masterpiece from your cart?")) {
      removeFromCart(cartId);
    }
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + Number(item.product.price) * Number(item.quantity),
    0,
  );
  
  const shipping = subtotal > 0 ? 15.0 : 0.0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <section className="section container">
        <div className="empty-cart-state">
          <div className="empty-visual">
            <ion-icon name="bag-handle-outline"></ion-icon>
          </div>
          <h2 className="h2 title">Your bag is empty</h2>
          <p className="section-text">
            Start your discovery and fill it with your favorite pieces.
          </p>
          <Link
            to="/products"
            className="btn btn-primary"
            style={{ marginInline: "auto", marginTop: "30px" }}
          >
            Explore Collection
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <header className="cart-header">
          <h1 className="h1 cart-title">Your Selection</h1>
          <p className="section-text">{cartItems.length} items in your bag</p>
        </header>

        <div className="cart-container">
          {/* List of Item Cards */}
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <article className="cart-item-card" key={item.id}>
                <div className="item-img-wrapper">
                  <img
                    src={item.product.primaryImg}
                    alt={item.product.title}
                    className="item-img"
                  />
                </div>

                <div className="item-details">
                  <div className="item-main-info">
                    <div>
                      <p className="item-category">{item.product.category}</p>
                      <h3 className="item-name">{item.product.title}</h3>
                    </div>
                    <p className="item-price">
                      ${item.product.price}
                    </p>
                  </div>

                  <div className="item-footer">
                    <div className="modern-qty">
                      <button
                        className="qty-btn"
                        onClick={() =>
                          handleUpdateQuantity(
                            item.product_id,
                            item.quantity,
                            -1,
                          )
                        }
                        aria-label="Decrease quantity"
                      >
                        <ion-icon name="remove-outline"></ion-icon>
                      </button>
                      <span className="qty-val">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() =>
                          handleUpdateQuantity(
                            item.product_id,
                            item.quantity,
                            1,
                          )
                        }
                        aria-label="Increase quantity"
                      >
                        <ion-icon name="add-outline"></ion-icon>
                      </button>
                    </div>

                    <button
                      className="item-remove-btn"
                      onClick={() => handleRemove(item.id)}
                    >
                      <ion-icon name="trash-outline"></ion-icon>
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sticky Summary Card */}
          <aside className="summary-wrapper">
            <div className="cart-summary-card">
              <h2 className="summary-card-title">Summary</h2>

              <div className="summary-details">
                <div className="summary-item">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-item">
                  <span>Estimated Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="summary-item">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="summary-item total">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="btn checkout-button">Secure Checkout</button>

              <div
                style={{
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Link
                  to="/products"
                  className="btn-link"
                  style={{ color: "var(--white)", borderColor: "var(--white)" }}
                >
                  Return to Boutique
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Cart;
