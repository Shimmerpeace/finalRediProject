import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products, onSearch, categories }) {
  return (
    <>
      <div className="category-container">
        <select onChange={(e) => onSearch("", e.target.value)}>
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="product-list">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
