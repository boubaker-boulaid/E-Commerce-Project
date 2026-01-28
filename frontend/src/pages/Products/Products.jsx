import React, { useEffect, useRef, useState } from "react";
import "./Products.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState(null);

  const page = searchParams.get("page");
  // const category = searchParams.get("category");

  const {
    data: products,
    isLoading,
    error,
  } = useFetch(`/products?${searchParams?.toString()}`);

  const lastPage = products.last_page ;

  console.log('last_page', lastPage);

  const filters = ["All", "Nike", "Adidas", "Puma", "Bata", "Apex"];

  const updatePathQuery = (query, value) => {
    const newParams = new URLSearchParams(searchParams);

    newParams.set(query, value);

    setSearchParams(newParams);
  };

  const deletePathQuery = (query) => {
    const newParams = new URLSearchParams(searchParams);

    newParams.delete(query);

    setSearchParams(newParams);
  };

  const handleBrandClick = (brand) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("page");

    if (brand === "All") {
      newParams.delete("brand");
    } else {
      newParams.set("brand", brand);
    }

    setSearchParams(newParams);
  };

  const handlSelectChange = (e) => {
    const newSort = e.target.value;
    setSort(newSort);

    const newParams = new URLSearchParams(searchParams);
    newParams.delete("page");

    if (newSort) {
      newParams.set("sort", newSort);
    } else {
      newParams.delete("sort");
    }

    setSearchParams(newParams);
  };

  useEffect(() => {
    if (!isLoading) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [page, isLoading]);

  // console.log("category:", category);
  console.log("products:", products);
  console.log("page", page);

  // Handle Laravel pagination: actual products are in products.data if paginated
  const actualProducts = Array.isArray(products)
    ? products
    : products?.data || [];

  const productsCount = Object.keys(actualProducts).length;

  const productsList = actualProducts.map((p) => (
    <ProductCard {...p} key={p.id} />
  ));

  console.log("products count", productsCount);
  
  if (error) return <div>{error} </div>

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
                    handleBrandClick(filter);
                    setActiveFilter(filter);
                  }}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>

          <div className="products-header">
            <h3 className="products-count">{productsCount} Products</h3>
            <div className="sort-wrapper">
              <label htmlFor="sort-select" className="sort-label">
                Sort by:
              </label>
              <select
                id="sort-select"
                className="sort-select"
                value={sort || ""}
                onChange={handlSelectChange}
              >
                <option value="">Newest</option>
                <option value="created_at-asc">Oldest</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="price-asc">Price: Low to High</option>
              </select>
            </div>
          </div>

          <ul className="product-list">{productsList}</ul>

          <div className="pagination-controls">
            <button
              className="btn btn-secondary"
              onClick={() => {
                !page || Number(page) === 2
                  ? deletePathQuery("page")
                  : updatePathQuery("page", page - 1);
              }}
              disabled={!page || Number(page) === 1}
            >
              Previous
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                page
                  ? updatePathQuery("page", Number(page) + 1)
                  : updatePathQuery("page", 2);
              }}
              disabled={Number(page) === Number(lastPage)}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
