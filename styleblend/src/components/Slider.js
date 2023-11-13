import React from "react";
import Button_right_icon from "../images/Icons/Slider_icons/Button-1.png";
import Button_left_icon from "../images/Icons/Slider_icons/Button.png";
import image01 from "../images/Icons/Slider_icons/image01.png";

const Slider = () => {
  return (
    <div className="w-screen h-full px-8 lg:px-40 pb-10 bg-white flex-col justify-start items-center gap-8 inline-flex">
      <div className="w-full h-full">
        <div className="w-full h-full relative overflow-hidden items-center justify-center flex ">
          {/* images */}
          <div className="w-full h-full absolute bg-gradient-to-b from-neutral-700 to-neutral-700 overflow-hidden" />
          <img
            className="w-full h-full object-cover relative "
            src={image01}
            alt=""
          />
          {/* left-right button */}
          <div className="hidden md:flex w-full  px-10 justify-between items-center absolute z-10">
            <img
              className="w-12 h-12 rounded-full shadow cursor-pointer"
              src={Button_left_icon}
              alt="<"
            />

            <img
              className="w-12 h-12  rounded-full shadow cursor-pointer"
              src={Button_right_icon}
              alt="<"
            />
          </div>
          {/* slider images navigation  */}
          <div className="min-w-fit w-20 h-7 gap-2 flex items-center absolute bottom-1 lg:bottom-5 z-20">
            <div className="bg-white w-4 h-4 rounded-full border cursor-pointer"></div>
            <div className="bg-white w-10 h-4 rounded-full border cursor-pointer"></div>
            <div className="bg-white w-4 h-4 rounded-full border cursor-pointer"></div>
            <div className="bg-white w-4 h-4 rounded-full border cursor-pointer"></div>
            <div className="bg-white w-4 h-4 rounded-full border cursor-pointer"></div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit flex-col md:flex-row justify-between items-center gap-4 flex">
        <div className="w-full">
          <span class="text-neutral-900 text-5xl lg:text-6xl font-medium font-poppins">
            Simply Unique
          </span>
          <span class="text-zinc-500 text-5xl  lg:text-6xl font-medium font-poppins">
            /
          </span>
          <br />
          <span class="text-neutral-900 text-5xl lg:text-6xl font-medium font-poppins ">
            Simply Better
          </span>
          <span class="text-zinc-500 text-5xl  lg:text-6xl font-medium font-poppins ">
            .
          </span>
        </div>
        <div className=" justify-center align-middle">
          <span className="text-neutral-700 text-base font-semibold font-['Inter'] leading-relaxed">
            StyleBlend.{" "}
          </span>
          <span className="text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed">
            is a gift & decorations store based in HCMC, Vietnam. Est since
            2019.{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
