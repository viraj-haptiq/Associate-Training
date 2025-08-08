import React from "react";
import ProductCard from "../features/products/ProductCard";

const SimilarProducts = ({ products }) => {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div className="similar-products-section">
      <h2 className="similar-products-title">You Might Also Like</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
