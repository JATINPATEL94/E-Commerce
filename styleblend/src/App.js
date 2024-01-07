import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import NotificationBar from "./components/NotificationBar";
import Values from "./components/Values";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ProductPage from "./components/ProductPage";
import UserAccount from "./components/UserAccount";
import Contact from "./components/Contact";
import Shery from "sheryjs";

function App() {
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.imageMasker("#images", {
    //Parameters are optional.
    mouseFollower: true,
    text: "StyleBlend.",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  return (
    <Router>
      <div className="font-sans overflow-x-hidden">
        <NotificationBar />
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/useraccount" element={<UserAccount />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Values />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
