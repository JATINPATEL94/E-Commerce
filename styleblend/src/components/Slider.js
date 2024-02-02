import React, { useEffect } from "react";
import Shery from "sheryjs";
import image3 from "../images/Photos/image3.jpg";

const Slider = () => {
  useEffect(() => {
    Shery.imageMasker(".img", {
      mouseFollower: true,
      text: "StyleBlend.",
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });

    Shery.makeMagnet(".img", {
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 2,
    });

    Shery.makeMagnet(".text-target", {
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 2,
    });
  }, []);

  return (
    <div className="w-screen h-fit py-8 px-8 lg:px-40 md:pb-10 bg-white flex-col justify-start items-center gap-8 inline-flex">
      <div id="images" className="w-full h-fit overflow-hidden relative">
        <img
          className=" w-screen max-h-screen object-cover img"
          src={image3}
          alt="image1"
        />

        <h2 className="text-target absolute top-1/3 left-0 p-7 text-xl md:text-4xl lg:text-6xl font-semibold text-white">
          Express Your <span className="font-bold text-stone-800">Style</span>
          ,
          <br />
          Mix Your <span className="font-bold text-stone-800"> Blend</span>.
        </h2>
      </div>
    </div>
  );
};

export default Slider;
