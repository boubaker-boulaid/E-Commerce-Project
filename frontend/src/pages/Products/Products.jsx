import React, { useState } from "react";
import "./Products.css";
import ProductCard from "../../components/ProductCard/ProductCard";
// import { products } from "../../assets/products";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchParams, setSearchParams] = useSearchParams();


  // const category = searchParams.get("category");

  const {
    data: products,
    isLoading,
    error,
  } = useFetch(`/products?${searchParams.toString()}`);



  const filters = ["All", "Nike", "Adidas", "Puma", "Bata", "Apex"];

  const updatePathQuery = (query,value) => {
    const newParams = new URLSearchParams(searchParams);

    newParams.set(query,value);

    setSearchParams(newParams);
  }


  // console.log("category:", category);
  console.log("products:", products);

  // Handle Laravel pagination: actual products are in products.data if paginated
  const actualProducts = Array.isArray(products)
    ? products
    : products?.data || [];

  const productsList = actualProducts.map((p) => (
    <ProductCard {...p} key={p.id} />
  ));

 
  return (
    <>
      <section className="section product">
        <div className="container">
          <h2 className="h2 section-title">Our Products</h2>

          <ul className="filter-list">
            {filters.map((filter) => (
              <li key={filter}>
                <button
                  className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
                  onClick={() => {
                    setActiveFilter(filter);
                    filter === "All" ?  setSearchParams((prev) => {
                      const newParams = new URLSearchParams(prev);
                      newParams.delete("brand");
                      return newParams;
                    }) : updatePathQuery('brand',filter);
                  }}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>

          <ul className="product-list">{productsList}</ul>

          <button>next</button>
          <button>next</button>
        </div>
      </section>
    </>
  );
};

export default Products;
