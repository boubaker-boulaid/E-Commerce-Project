import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductForm from "../../../components/ProductForm/ProductForm";
import apiProducts from "../../../api/apiProducts";
import { productValidationRules } from "../../../assets/validationRules";
import useFetch from "../../../hooks/useFetch";
import { useForm } from "../../../hooks/useForm";
import "../Admin.css";

// Renders the form once the product has loaded, so useForm starts from its values.
function EditProductForm({ product }) {
  const navigate = useNavigate();

  const initialData = {
    name: product.name ?? "",
    brand: product.brand ?? "",
    price: product.price ?? "",
    stock: product.stock ?? "",
    category: product.category ?? "",
    description: product.description ?? "",
    // The current image URL fills the preview; a new File replaces it.
    primaryImage: product.primary_img_url,
  };

  const onValidSubmit = async (data) => {
    const formData = new FormData();
    // PHP only reads multipart bodies on POST, so send PUT through _method.
    formData.append("_method", "PUT");
    ["name", "brand", "category", "description", "price", "stock"].forEach(
      (field) => formData.append(field, data[field] ?? ""),
    );
    if (data.primaryImage instanceof File) {
      formData.append("primaryImage", data.primaryImage);
    }

    try {
      await apiProducts.post(`products/${product.id}`, formData);
      navigate("/admin/products");
    } catch (err) {
      alert(err.response?.data?.message ?? "Could not save the product.");
    }
  };

  const { formData, formErrors, handleChange, handleSubmit, imagePreview } =
    useForm(initialData, productValidationRules, onValidSubmit);

  return (
    <ProductForm
      formData={formData}
      formErrors={formErrors}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      imagePreview={imagePreview}
    />
  );
}

function EditProduct() {
  const { id } = useParams();
  const { data: product, error } = useFetch(`products/${id}`);

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h2 className="h2 section-title" style={{ textAlign: "left" }}>
            Edit Product
          </h2>
          <p className="admin-page-subtitle">{product?.name}</p>
        </div>
        <Link to="/admin/products" className="btn btn-secondary">
          <ion-icon name="arrow-back-outline"></ion-icon>
          Back to products
        </Link>
      </div>

      {error ? (
        <p className="admin-empty">Could not load this product.</p>
      ) : product?.id ? (
        <EditProductForm key={product.id} product={product} />
      ) : (
        <p className="admin-empty">Loading…</p>
      )}
    </div>
  );
}

export default EditProduct;
