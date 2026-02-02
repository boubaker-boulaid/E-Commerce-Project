import React from "react";
import ProductForm from "../../../components/ProductForm/ProductForm";
import { useNavigate } from "react-router-dom";
import { productValidationRules } from "../../../assets/validationRules";
import { useForm } from "../../../hooks/useForm";
import { useResource } from "../../../hooks/useResource";

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
    console.log("product data ", data);
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("brand", data.brand);
    formData.append("category", data.category);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("stock", data.stock);
    formData.append("primaryImage", data.primaryImage);

    console.log("product data ", formData);

    const res = await AddProduct(null, "post", formData);
    console.log("product addedddddddd", res);

    if (res) {
        alert("product added")
        reset();
        navigate(-1);
    }
  };

  const { formData, formErrors, handleChange, handleSubmit, imagePreview } =
    useForm(initialData, productValidationRules, onValidSubmit);

  return (
    <>
      <div>add product</div>

      <ProductForm
        formData={formData}
        formErrors={formErrors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        imagePreview={imagePreview}
      />
    </>
  );
}

export default AddProduct;
