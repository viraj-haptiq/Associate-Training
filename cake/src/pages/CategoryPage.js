import React from "react";
import { useParams } from "react-router-dom";
import ProductListPage from "../features/products/ProductListPage";

const CategoryPage = () => {
  const { category } = useParams();

  return (
    <div>
      <ProductListPage category={category} />
    </div>
  );
};

export default CategoryPage;
