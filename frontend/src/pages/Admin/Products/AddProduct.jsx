import React from "react";
import ProductForm from "../../../components/ProductForm/ProductForm";
import { Link, useNavigate } from "react-router-dom";
import { productValidationRules } from "../../../assets/validationRules";
import { useForm } from "../../../hooks/useForm";
import { useResource } from "../../../hooks/useResource";
import "../Admin.css";

function AddProduct() {
  const navigate = useNavigate();

  const initialData = {
    name: "",
    brand: "",
    price: "",
    stock: "",
    category: "",
    description: "",
    primaryImage: null,
  };
  const { actionToResource: AddProduct } = useResource("products");

  const onValidSubmit = async (data, reset) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("brand", data.brand);
    formData.append("category", data.category);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("stock", data.stock);
    formData.append("primaryImage", data.primaryImage);

    const res = await AddProduct(null, "post", formData);

    if (res) {
        alert("product added")
        reset();
        navigate(-1);
    }
  };

  const { formData, formErrors, handleChange, handleSubmit, imagePreview } =
    useForm(initialData, productValidationRules, onValidSubmit);

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h2 className="h2 section-title" style={{ textAlign: "left" }}>
            Add Product
          </h2>
          <p className="admin-page-subtitle">
            New products appear in the shop straight away.
          </p>
        </div>
        <Link to="/admin/products" className="btn btn-secondary">
          <ion-icon name="arrow-back-outline"></ion-icon>
          Back to products
        </Link>
      </div>

      <ProductForm
        formData={formData}
        formErrors={formErrors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        imagePreview={imagePreview}
      />
    </div>
  );
}

export default AddProduct;
