import React from "react";
import { useResource } from "../../../hooks/useResource";
import { Link } from "react-router-dom";

function AllProducts() {
  const { data: products } = useResource("products_statistic");
  console.log("products_statistic", products);
  const { allProducts } = products;
  console.log("all products", allProducts);

  return (
    <div>
      <h1>All Products</h1>
      <Link to="add">add a new product</Link>
      <div></div>
    </div>
  );
}

export default AllProducts;
