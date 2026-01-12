import React, { useState } from "react";
import "./Products.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { products } from "../../assets/products";
import { useSearchParams } from "react-router-dom";


const Products = () => {
  
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Nike', 'Adidas', 'Puma', 'Bata', 'Apex'];

  const filteredProducts = activeFilter === 'All' ? products : 
        products.filter(p => p.mark === activeFilter) ;
  
  const productsList = filteredProducts.map(p => (
    <ProductCard {...p} key={p.id} />
  ))
  
  return (
    <>
      <section className="section product">
            <div className="container">
              <h2 className="h2 section-title">Our Products</h2>

              <ul className="filter-list">
                {filters.map(filter => (
                  <li key={filter}>
                    <button 
                      className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                      onClick={() => setActiveFilter(filter)}
                    >
                      {filter}
                    </button>
                  </li>
                ))}
              </ul>
                
              <ul className="product-list">
                {productsList}
              </ul>
            </div>
          </section>
    </>
  );
};

export default Products;
