import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ image, name, path }) => {
  return (
    <Link to={path} className="category-card-link">
      <div className="category-card">
        <img src={image} alt={name} className="category-image" />
        <h3>{name}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
