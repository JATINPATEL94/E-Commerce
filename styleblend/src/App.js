import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import NotificationBar from "./components/NotificationBar";
import Values from "./components/Values";
import Home from "./components/Home";
import Shop from "./components/Shop";

function App() {
  return (
    <Router>
      <div className="font-sans overflow-x-hidden">
        <NotificationBar />
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Values />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
