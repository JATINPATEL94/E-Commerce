import React from "react";
import Button_right_icon from "../images/Icons/Slider_icons/Button-1.png";
import Button_left_icon from "../images/Icons/Slider_icons/Button.png";
// import image01 from "../images/Icons/Slider_icons/image01.png";

const Slider = () => {
  return (
    <div className="w-screen h-full px-8 lg:px-40 pb-10 bg-white flex-col justify-start items-center gap-8 inline-flex">
      <div className="w-full h-full">
        <div className="w-full h-full relative overflow-hidden items-center justify-center flex ">
          {/* images */}
          <div className="w-full h-full max-h-screen absolute bg-gradient-to-b from-neutral-700 to-neutral-700 overflow-hidden" />
          <img
            className="w-full h-full max-h-screen object-cover relative "
            // src={image01}
            src="https://s3-alpha-sig.figma.com/img/aabe/eeca/8be8724c73d11ceff61baec31388f8f9?Expires=1701043200&Signature=EigHiHDpIAtrCGuFBaUXBmgniLepkk9sROXVPcCK-EMpfFvNyqiyrtIgSDrq~f4VX2KTrRTDrfwqpFTZ6cOFrcOk8GuqD5Sgxh5vP73GlbFFWynsm3qbysUtczCAq2wIzrcbSlKfwvfca05AWM1vCXPbcEWtfioxJyh2v2X7gvRugx4Gy-vWROeqYjnK-k0MfF5j5jDR3HfmDrvsxsRZ7u5cnI6gaOxjwszLvsGy1NMu4E19R2oCa3GvTXSQCttJG-DtriLTz8Yg~wkWYnJLttLCklvfLDYB9URKxUx4T-RJwu1OCGYvCEYcZ6VFHMWGjRR5fQNMwfcrpmjWIftCmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
          <span className="text-neutral-900 text-5xl lg:text-6xl font-medium font-poppins">
            Simply Unique
          </span>
          <span className="text-zinc-500 text-5xl  lg:text-6xl font-medium font-poppins">
            /
          </span>
          <br />
          <span className="text-neutral-900 text-5xl lg:text-6xl font-medium font-poppins ">
            Simply Better
          </span>
          <span className="text-zinc-500 text-5xl  lg:text-6xl font-medium font-poppins ">
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
