import React, { useState, useEffect, useMemo } from "react";
import ProductCard from "./ProductCard";
import { fetchProductsByCategory } from "../../api/cakeApi";
import { parsePrice } from "../../utils/priceParser";
const filterConfig = {
  icing: [
    { key: "all", label: "All Flavours" },
    { key: "chocolate", label: "Chocolate" },
    { key: "fruit", label: "Fruit Flavours" },
    { key: "forests", label: "Forests" },
    { key: "other", label: "Other" },
  ],
  plain: [
    { key: "all", label: "All Flavours" },
    { key: "chocolate", label: "Chocolate" },
    { key: "fruit", label: "Fruit Flavours" },
    { key: "other", label: "Other" },
  ],
};

const filterKeywords = {
  icing: {
    chocolate: ["truffle", "dutch", "milk chocolate"],
    fruit: ["mango", "pineapple", "strawberry"],
    forests: ["forest"],
  },
  plain: {
    chocolate: ["chocolate", "chocochips"],
    fruit: ["lemon", "mango", "pineapple"],
  },
};

const ProductListPage = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("default");
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    setActiveFilter("all");
    setSortOrder("default");
    const getProducts = async () => {
      setLoading(true);
      const productData = await fetchProductsByCategory(category);
      setProducts(productData);
      setLoading(false);
    };

    getProducts();
  }, [category]);

  const filteredProducts = useMemo(() => {
    if (activeFilter === "all") {
      return products;
    }

    const keywords = filterKeywords[category]?.[activeFilter] || [];
    if (activeFilter === "other") {
      const allKeywords = Object.values(filterKeywords[category] || {}).flat();
      return products.filter(
        (p) =>
          !allKeywords.some((keyword) => p.name.toLowerCase().includes(keyword))
      );
    }

    return products.filter((p) =>
      keywords.some((keyword) => p.name.toLowerCase().includes(keyword))
    );
  }, [products, activeFilter, category]);

  const sortedAndFilteredProducts = useMemo(() => {
    const sortableProducts = [...filteredProducts];
    if (sortOrder === "price-asc") {
      sortableProducts.sort(
        (a, b) => parsePrice(a.price) - parsePrice(b.price)
      );
    } else if (sortOrder === "price-desc") {
      sortableProducts.sort(
        (a, b) => parsePrice(b.price) - parsePrice(a.price)
      );
    }
    return sortableProducts;
  }, [filteredProducts, sortOrder]);

  if (loading) {
    return <div>Loading products...</div>;
  }

  const availableFilters = filterConfig[category];

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h1 className="product-list-title">
          {category.charAt(0).toUpperCase() + category.slice(1)} Cakes
        </h1>
        <div className="product-list-controls">
          {availableFilters && (
            <div className="control-container">
              <label htmlFor="filter-by">Filter By:</label>
              <select
                id="filter-by"
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                className="control-dropdown"
              >
                {availableFilters.map((filter) => (
                  <option key={filter.key} value={filter.key}>
                    {filter.label}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="control-container">
            <label htmlFor="sort-by">Sort By:</label>
            <select
              id="sort-by"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="control-dropdown"
            >
              <option value="default">Relevance</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
      <div className="product-grid">
        {sortedAndFilteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
