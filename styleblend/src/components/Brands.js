import React from "react";
import brands01 from "../images/Icons/Brands_icons/brand01.svg";

const Brands = () => {
  return (
    <div className="w-full pt-10 flex-col items-center gap-4 inline-flex overflow-hidden px-8 lg:px-40">
      <div className="text-neutral-900 text-xl font-semibold font-['Inter'] leading-loose">
        Trending Brands
      </div>
      <div className=" px-2 w-full justify-between items-start gap-5 flex overflow-x-scroll overflow-y-hidden">
        <img className="w-[167px] h-16" src={brands01} alt="brand01" />
        <img className="w-[167px] h-16" src={brands01} alt="brand01" />
        <img className="w-[167px] h-16" src={brands01} alt="brand01" />
        <img className="w-[167px] h-16" src={brands01} alt="brand01" />
        <img className="w-[167px] h-16" src={brands01} alt="brand01" />
        <img className="w-[167px] h-16" src={brands01} alt="brand01" />
      </div>
    </div>
  );
};

export default Brands;
