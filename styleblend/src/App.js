import React from "react";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import NotificationBar from "./components/NotificationBar";
import Slider from "./components/Slider";
import Brands from "./components/Brands";
import ProductCarousel from "./components/ProductCarousel";
import Values from "./components/Values";
import Category from "./components/Category";

function App() {
  return (
    <div className="font-sans overflow-x-hidden">
      <NotificationBar />
      <NavigationBar />
      <Slider />
      <Brands />
      <ProductCarousel />
      <Category />
      <Values />
      <Footer />
    </div>
  );
}

export default App;
