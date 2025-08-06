const allProducts = [
  // Icing Cakes
  {
    id: 101,
    name: "Chocolate Truffle",
    category: "icing",
    price: "₹800",
    image: "/images/chocolate-truffle.jpeg",
  },
  {
    id: 102,
    name: "Black Forest",
    category: "icing",
    price: "₹750",
    image: "/images/black-forest.jpeg",
  },
  {
    id: 103,
    name: "Red Velvet",
    category: "icing",
    price: "₹900",
    image: "/images/red-velvet.jpeg",
  },
  {
    id: 104,
    name: "Pineapple Delight",
    category: "icing",
    price: "₹700",
    image: "/images/pineapple-delight.jpeg",
  },
  {
    id: 105,
    name: "Strawberry Cream",
    category: "icing",
    price: "₹850",
    image: "/images/strawberry-cream.jpeg",
  },
  {
    id: 106,
    name: "Butterscotch Bliss",
    category: "icing",
    price: "₹780",
    image: "/images/butterscotch-bliss.jpeg",
  },
  {
    id: 107,
    name: "Mango Mousse",
    category: "icing",
    price: "₹950",
    image: "/images/mango-mousse.jpeg",
  },
  {
    id: 108,
    name: "White Forest",
    category: "icing",
    price: "₹760",
    image: "/images/white-forest.jpeg",
  },
  {
    id: 109,
    name: "Pink Forest",
    category: "icing",
    price: "₹750",
    image: "/images/pink-forest.jpeg",
  },
  {
    id: 110,
    name: "Green Forest",
    category: "icing",
    price: "₹750",
    image: "/images/green-forest.jpeg",
  },
  {
    id: 111,
    name: "Chocolate Dutch",
    category: "icing",
    price: "₹800",
    image: "/images/chocolate-dutch.jpeg",
  },
  {
    id: 112,
    name: "Milk Chocolate",
    category: "icing",
    price: "₹800",
    image: "/images/milk-chocolate.jpeg",
  },

  // Plain Cakes
  {
    id: 201,
    name: "Classic Vanilla",
    category: "plain",
    price: "₹500",
    image: "/images/classic-vanilla.jpeg",
  },
  {
    id: 202,
    name: "Rich Chocolate",
    category: "plain",
    price: "₹550",
    image: "/images/rich-chocolate.jpeg",
  },
  {
    id: 203,
    name: "Marble Cake",
    category: "plain",
    price: "₹520",
    image: "/images/marble-cake.jpeg",
  },
  {
    id: 204,
    name: "Lemon Drizzle",
    category: "plain",
    price: "₹600",
    image: "/images/lemon-drizzle.jpeg",
  },
  {
    id: 205,
    name: "Mango Drizzle",
    category: "plain",
    price: "₹600",
    image: "/images/mango-drizzle.jpeg",
  },
  {
    id: 206,
    name: "Pineapple Drizzle",
    category: "plain",
    price: "₹600",
    image: "/images/pineapple-drizzle.jpeg",
  },
  {
    id: 207,
    name: "Chocolate chocochips",
    category: "plain",
    price: "₹600",
    image: "/images/chocolate-chocochips.jpeg",
  },

  // Customised Cakes
  {
    id: 301,
    name: "Wedding Tier Cake",
    category: "customised",
    price: "₹3500",
    image: "/images/wedding-tier.jpeg",
  },
  {
    id: 302,
    name: "Birthday Theme Cake",
    category: "customised",
    price: "₹2500",
    image: "/images/birthday-theme.jpeg",
  },
  {
    id: 303,
    name: "Anniversary Special",
    category: "customised",
    price: "₹2800",
    image: "/images/anniversary-special.jpeg",
  },
  {
    id: 304,
    name: "Photo Print Cake",
    category: "customised",
    price: "₹2000",
    image: "/images/photo-print.jpeg",
  },

  {
    id: 305,
    name: "Cartoon cake",
    category: "customised",
    price: "₹2000",
    image: "/images/cartoon-cake.jpeg",
  },
];

export const fetchProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const products = allProducts.filter((p) => p.category === category);
      resolve(products);
    }, 500);
  });
};

export const fetchProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = allProducts.find((p) => p.id === parseInt(productId));
      resolve(product);
    }, 300);
  });
};
export const fetchSimilarProducts = ({ category, currentProductId, limit }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const similar = allProducts

        .filter((p) => p.category === category)

        .filter((p) => p.id !== parseInt(currentProductId))

        .slice(0, 4);
      resolve(similar);
    }, 300);
  });
};

export const fetchProductsBySearchQuery = (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!query) {
        return resolve([]);
      }

      const lowercasedQuery = query.toLowerCase();
      const results = allProducts.filter((product) =>
        product.name.toLowerCase().includes(lowercasedQuery)
      );
      resolve(results);
    }, 500);
  });
};
