import React from "react";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    id: 1,
    name: "Icing Cakes",
    image: "/images/icing-cake.jpeg",
    path: "/category/icing",
  },
  {
    id: 2,
    name: "Plain Cakes",
    image: "/images/plain-cake.jpeg",
    path: "/category/plain",
  },
  {
    id: 4,
    name: "Customised Cakes",
    image: "/images/customised-cake.jpeg",
    path: "/category/customised",
  },
];

const CategorySection = () => {
  return (
    <section className="category-section">
      <h2>Our Categories</h2>
      <div className="category-container">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            image={category.image}
            path={category.path}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
