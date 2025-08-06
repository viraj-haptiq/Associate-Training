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
  // {
  //   id: 3,
  //   name: "Cupcakes",
  //   image:
  //     "https://images.unsplash.com/photo-1614707267537-b85aaf00c8b7?q=80&w=1974&auto=format&fit=crop",
  //   path: "/category/cupcake", // Assuming cupcakes are a type of icing cake for this example
  // },
  {
    id: 4,
    name: "Customised Cakes",
    image: "/images/customised-cake.jpeg",
    path: "/category/customised", // Add path property
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
