import React from "react";
import Slider from "./Slider";
import Brands from "./Brands";
import ProductCarousel from "./ProductCarousel";
import Category from "./Category";

const Home = () => {
  return (
    <div>
      <Slider />
      <Brands />
      <ProductCarousel />
      <Category />
    </div>
  );
};

export default Home;
