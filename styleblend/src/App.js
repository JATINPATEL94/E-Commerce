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
import ProductContextProvider from "./context/ProductContextProvider.js";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";
import Shery from "sheryjs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./components/Checkout.js";

function App() {
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  return (
    <ProductContextProvider>
      <Router>
        <div className="font-sans overflow-x-hidden">
          <NotificationBar />
          <NavigationBar />
          <ToastContainer stacked />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/useraccount" element={<UserAccount />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Values />
          <Footer />
        </div>
      </Router>
    </ProductContextProvider>
  );
}

export default App;
