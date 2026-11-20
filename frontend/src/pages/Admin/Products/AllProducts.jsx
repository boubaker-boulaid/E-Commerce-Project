import React from "react";
import { Link } from "react-router-dom";
import apiProducts from "../../../api/apiProducts";
import { useResource } from "../../../hooks/useResource";
import "../Admin.css";

const LOW_STOCK = 10;

function AllProducts() {
  const { data, error, refetch } = useResource("products_statistic");
  const products = data?.allProducts ?? [];

  const handleDelete = async (product) => {
    if (!confirm(`Delete "${product.name}"?`)) return;

    try {
      await apiProducts.delete(`products/${product.id}`);
      refetch();
    } catch (err) {
      alert(err.response?.data?.message ?? "Could not delete the product.");
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h2 className="h2 section-title" style={{ textAlign: "left" }}>
            All Products
          </h2>
          <p className="admin-page-subtitle">
            {products.length} products in the store
          </p>
        </div>

        <Link to="add" className="btn btn-primary">
          <ion-icon name="add-outline"></ion-icon>
          Add product
        </Link>
      </div>

      <div className="admin-card">
        {error ? (
          <p className="admin-empty">Could not load the products.</p>
        ) : products.length === 0 ? (
          <p className="admin-empty">No products yet.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <div className="admin-product-cell">
                      <img src={product.primary_img_url} alt="" />
                      {product.name}
                    </div>
                  </td>
                  <td className="admin-muted">{product.brand}</td>
                  <td className="admin-muted">{product.category}</td>
                  <td>${product.price}</td>
                  <td>
                    <span
                      className={`admin-badge ${product.stock < LOW_STOCK ? "low" : ""}`}
                    >
                      {product.stock} left
                    </span>
                  </td>
                  <td>
                    <div className="admin-actions">
                      <Link
                        to={`edit/${product.id}`}
                        className="admin-icon-btn"
                        aria-label={`Edit ${product.name}`}
                      >
                        <ion-icon name="create-outline"></ion-icon>
                      </Link>
                      <button
                        type="button"
                        className="admin-icon-btn danger"
                        aria-label={`Delete ${product.name}`}
                        onClick={() => handleDelete(product)}
                      >
                        <ion-icon name="trash-outline"></ion-icon>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AllProducts;
