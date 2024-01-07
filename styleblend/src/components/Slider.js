import React from "react";
// import image1 from "../images/Photos/image1.jpg";

const Slider = () => {
  return (
    <div className="w-screen h-screen px-8 lg:px-40 pb-10 bg-white flex-col justify-start items-center gap-8 inline-flex">
      <div id="images" className="relative">
        <img
          className="w-full h-full object-cover justify-center align-middle img z-30"
          src="https://shorturl.at/mqyX5"
          alt="image1"
        />
        <img
          className="w-full h-full object-cover justify-center align-middle img absolute top-10  left-0 z-10"
          src="https://shorturl.at/mqyX5"
          alt="image1"
        />
      </div>
    </div>
  );
};

export default Slider;
