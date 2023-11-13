import React from "react";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import NotificationBar from "./components/NotificationBar";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="font-sans overflow-x-hidden ">
      <NotificationBar />
      <NavigationBar />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
