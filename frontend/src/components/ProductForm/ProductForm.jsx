import React from "react";
import "./ProductForm.css";

const ProductForm = ({
  formData,
  formErrors,
  handleChange,
  handleSubmit,
  imagePreview,
}) => {
  return (
    <div className="product-form-card">
      <h2 className="form-title">Product Details</h2>

      <form className="form-grid" onSubmit={handleSubmit}>
        {/* Basic Info */}
        <div className="form-row">
          <div className="input-group">
            <label className="input-label">Product Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="input-field"
              placeholder="e.g. Wireless Headphones"
            />
            {formErrors.name && (
              <span className="error-message"> {formErrors.name} </span>
            )}
          </div>

          <div className="input-group">
            <label className="input-label">Brand</label>
            <input
              type="text"
              name="brand"
              onChange={handleChange}
              value={formData.brand}
              className="input-field"
              placeholder="e.g. Sony"
            />
            {formErrors.brand && (
              <span className="error-message"> {formErrors.brand} </span>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <label className="input-label">Price ($)</label>
            <input
              type="number"
              name="price"
              onChange={handleChange}
              value={formData.price}
              className="input-field"
              placeholder="0.00"
              step="0.01"
            />
            {formErrors.price && (
              <span className="error-message"> {formErrors.price} </span>
            )}
          </div>

          <div className="input-group">
            <label className="input-label">Stock Quantity</label>
            <input
              type="number"
              name="stock"
              onChange={handleChange}
              value={formData.stock}
              className="input-field"
              placeholder="0"
            />
            {formErrors.stock && (
              <span className="error-message"> {formErrors.stock} </span>
            )}
          </div>
        </div>

        <div className="input-group">
          <label className="input-label">Category</label>
          <select
            name="category"
            className="select-field"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="home">Women</option>
            <option value="beauty">Men</option>
            <option value="sports">Sports</option>
          </select>
          {formErrors.category && (
            <span className="error-message"> {formErrors.category} </span>
          )}
        </div>

        <div className="input-group">
          <label className="input-label">Description</label>
          <textarea
            name="description"
            onChange={handleChange}
            value={formData.description}
            className="textarea-field"
            placeholder="Detailed product description..."
          />
        </div>

        {/* Image Uploads */}
        <div className="image-upload-container">
          {/* Primary Image */}
          <div className="input-group">
            <label className="input-label">Primary Image</label>
            <div className="upload-box">
              {imagePreview ? (
                <>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="image-preview"
                  />
                  {/* Reuse existing hidden input but make sure it still works */}
                  <input
                    type="file"
                    name="primaryImage"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </>
              ) : (
                <>
                  <ion-icon
                    name="cloud-upload-outline"
                    className="upload-icon"
                  ></ion-icon>
                  <span className="upload-text">
                    Click to upload primary image
                  </span>
                  <input
                    type="file"
                    name="primaryImage"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </>
              )}

              {formErrors.primaryImage && (
                <span className="error-message">
                  {" "}
                  {formErrors.primaryImage}{" "}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            <ion-icon name="save-outline"></ion-icon>
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
