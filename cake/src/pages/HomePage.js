import React from "react";
import WelcomeBanner from "../components/WelcomeBanner";
import CategorySection from "../components/CategorySection";
import TestimonialsSection from "../components/TestimonialsSection";

const HomePage = () => {
  return (
    <>
      <WelcomeBanner />
      <CategorySection />
      <TestimonialsSection />
    </>
  );
};

export default HomePage;
