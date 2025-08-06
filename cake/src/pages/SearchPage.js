import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchProductsBySearchQuery } from "../api/cakeApi";
import ProductCard from "../features/products/ProductCard";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      const getResults = async () => {
        setLoading(true);
        const results = await fetchProductsBySearchQuery(query);
        setSearchResults(results);
        setLoading(false);
      };
      getResults();
    }
  }, [query]);

  if (loading) {
    return <div>Searching...</div>;
  }

  return (
    <div className="product-list-container">
      <h1 className="product-list-title">Search Results for: "{query}"</h1>

      {searchResults.length > 0 ? (
        <div className="product-grid">
          {searchResults.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>
          No products found matching your search.
        </p>
      )}
    </div>
  );
};

export default SearchPage;
