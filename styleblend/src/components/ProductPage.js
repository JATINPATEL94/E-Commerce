import React, { useState } from "react";
import Star_icon from "../images/Icons/Star_Icon.svg";
import Star_Filed_icon from "../images/Icons/Star_Filled_ Icon.svg";
import right_arrow_icon from "../images/Icons/Slider_icons/Button-1.png";
import Add_icon from "../images/Icons/Add.png";
import Minus_icon from "../images/Icons/Minus.png";
import like_icon from "../images/Icons/Navbar_icons/like.svg";
import like_Filled_icon from "../images/Icons/Navbar_icons/like_Filled.svg";
import Button_right_icon from "../images/Icons/Slider_icons/Button-1.png";
import Button_left_icon from "../images/Icons/Slider_icons/Button.png";

const ProductPage = () => {
  const [count, setCount] = useState(1);

  const product = {
    name: "Men's Diamond Quilted Bomber Hoody",
    Image:
      "https://s3-alpha-sig.figma.com/img/2ddc/7d53/9e5042079dc654e8acaaf3c1132b5d2d?Expires=1701043200&Signature=btumOABlMFfGyhWXoo35SgsWZUDf2K4~CTLywRhOMq-4KI3Wp~Sv~E98HjT5g9d0HeXUVMnZrKia88viJk2lYpXKfdt8UqWqRx877RXddCx0Drgl6LU6RJvsTQkBovT~OzbmE-u1T603-YiCRIOg0Vd~0Q94QEfusp1Vb~gJjE7B5brL50BICDi46w9yGBqaHG4LwF9mHXhp-uoyvU09ba9dBdy3w39fPtrIPzG8K5rvIebnWYHnLJIEHdNHUkVuBxFe3hvpCIlPgaBbWZ4Rs12ZtFdOg-XsrD4jykayeoR9H7lkH3AF1kki3p9O1XbupOplht8tc4t8Q~M1uSSy6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    price: 800,
    disPrice: 600,
    rating: 4,
    like: false,
    Measurements: "17 1/2x20 5/8 ",
    CATEGORY: "Living Room",
    itemNumber: 112,
    description:
      "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
    mainDescription:
      "Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.",
    selectedColor: "Red",
    Reviews: 2,
    moreImage: [
      {
        Image: "https://via.placeholder.com/72x72",
      },
      {
        Image: "https://via.placeholder.com/72x72",
      },
      {
        Image: "https://via.placeholder.com/72x72",
      },
      {
        Image: "https://via.placeholder.com/72x72",
      },
    ],
    moreColor: [
      {
        colorName: "Black",
        Image: "https://via.placeholder.com/72x72",
      },
      {
        colorName: "Green",
        Image: "https://via.placeholder.com/72x72",
      },
      {
        colorName: "Yellow",
        Image: "https://via.placeholder.com/72x72",
      },
      {
        colorName: "Gray",
        Image: "https://via.placeholder.com/72x72",
      },
    ],
  };

  return (
    <div className="w-full h-full px-8 lg:px-20 justify-between items-start gap-8 flex flex-col md:flex-row ">
      {/* left part */}
      <div className="w-full h-full md:w-1/2 flex-col justify-start items-start gap-6 flex">
        <div className="w-full h-full relative items-center align-middle justify-center">
          {/* main image , new & 50% off */}
          <div className="w-full h-full left-0 top-0">
            {/* main image */}
            <div className="w-full h-full left-0 top-0 relative flex-col justify-center items-center inline-flex">
              <img
                className="w-full h-full max-h-[600px] object-cover"
                src="https://via.placeholder.com/548x729"
                alt="product images"
              />
            </div>
            {/* new */}
            <div className="w-[79.14px] h-[34.05px] px-[18px] py-2 left-[32.06px] top-[32.04px] absolute bg-white rounded justify-center items-center gap-2 inline-flex">
              <div className="text-center text-neutral-900 text-lg font-bold font-['Inter'] leading-[18px]">
                NEW
              </div>
            </div>
            {/* 50% off */}
            <div className="w-[84.15px] h-[34.05px] px-[18px] py-2 left-[32.06px] top-[75.10px] absolute bg-emerald-400 rounded justify-center items-center gap-2 inline-flex">
              <div className="text-center text-white text-lg font-bold font-['Inter'] leading-[18px]">
                -50%
              </div>
            </div>
          </div>
          {/* left-right button */}
          <div className="flex w-full bottom-[40%]  lg:px-10 justify-between items-center absolute z-10">
            <img
              className="w-12 h-12 rounded-full cursor-pointer"
              src={Button_left_icon}
              alt="<"
            />

            <img
              className="w-12 h-12  rounded-full cursor-pointer"
              src={Button_right_icon}
              alt="<"
            />
          </div>
        </div>
        {/* other product images */}
        <div className="w-full h-fit overflow-x-scroll">
          <div className="w-fit justify-start gap-6 inline-flex">
            {product.moreImage.map((moreImage, index) => {
              return (
                <div
                  key={index}
                  className="w-[167px] h-[167px] justify-center items-center flex"
                >
                  <img
                    className="w-[167px] h-[167px] object-cover"
                    src={moreImage.Image}
                    alt="other images"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Right part */}
      <div className="w-full h-full md:w-1/2 flex-col justify-start items-start inline-flex overflow-hidden ">
        {/* {product Details} */}
        <div className="w-full flex-col justify-start items-start flex">
          {/* top section */}
          <div className="w-full pb-6 border-b border-gray-200 flex-col justify-start items-start gap-4 flex">
            {/* rating & reviews */}
            <div className="justify-start items-center gap-2.5 inline-flex">
              <div className="w-[88px] h-4 justify-center items-start gap-0.5 flex">
                {/* Rating */}
                <div className="w-[88px] h-4 justify-center items-start gap-0.5 inline-flex">
                  {
                    // Createing an array using Array.from() to map over each index
                    Array.from({ length: 5 }).map((_, index) => (
                      <img
                        key={index}
                        className="w-4 h-4 relative flex-col justify-start items-start flex"
                        src={
                          product.rating >= index + 1
                            ? Star_Filed_icon
                            : Star_icon
                        }
                        alt=""
                      />
                    ))
                  }
                </div>
              </div>
              {/* reviews */}
              <div className="text-neutral-900 text-xs font-normal font-['Inter'] leading-tight">
                {product.Reviews} Reviews
              </div>
            </div>
            {/* title */}
            <div className="w-full text-neutral-900 text-[20px] lg:text-[40px] font-medium font-['Poppins'] leading-[44px]">
              {product.name}
            </div>
            {/* description */}
            <div className="w-full text-zinc-500 text-[10px] md:text-base font-normal font-['Inter'] leading-relaxed">
              {product.mainDescription}
            </div>
            {/* price */}
            <div className="w-full justify-start items-center gap-3 inline-flex">
              <div className="text-neutral-900 text-[28px] font-medium font-['Poppins'] leading-[34px]">
                {product.disPrice} ₹
              </div>
              <div className="text-zinc-500 text-xl font-medium font-['Poppins'] line-through leading-7">
                {product.price} ₹
              </div>
            </div>
          </div>
          {/* bottom section */}
          <div className="w-full py-6 flex-col justify-start items-start gap-6 flex">
            {/* Measurements */}
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="text-zinc-500 text-base font-semibold font-['Inter'] leading-relaxed">
                Measurements
              </div>
              <div className="text-black text-xl font-normal font-['Inter'] leading-loose">
                {product.Measurements} "
              </div>
            </div>
            {/* Color */}
            <div className="w-full flex-col justify-start items-start gap-4 flex">
              {/* selected color */}
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="justify-start items-center gap-1 inline-flex">
                  <div className="text-zinc-500 text-base font-semibold font-['Inter'] leading-relaxed">
                    Choose Color
                  </div>
                  <img
                    className="w-10 h-10 relative mb-[-10px]"
                    src={right_arrow_icon}
                    alt="right arrow"
                  />
                </div>
                <div className="text-black text-xl font-normal font-['Inter'] leading-loose">
                  {product.selectedColor}
                </div>
              </div>
              {/* Other Color */}
              <div className="w-full overflow-x-scroll">
                <div className="justify-start items-start gap-4 inline-flex w-fit">
                  {product.moreColor.map((moreColor, index) => {
                    return (
                      <div
                        key={index}
                        className="w-[72px] h-[72px] justify-center items-center inline-flex relative"
                      >
                        <img
                          className="w-[72px] h-[72px] object-cover"
                          src={moreColor.Image}
                          alt="other Color"
                        />
                        <div className="absolute">{moreColor.colorName}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* product cart & Wishlist */}
        <div className="w-full py-8 flex-col justify-start items-start gap-4 flex">
          {/* Quantity &  Wishlist*/}
          <div className="w-full h-fit justify-center items-center gap-6 flex">
            {/* Quantity */}
            <div className="w-fit px-8 py-4 bg-neutral-100 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="py-px justify-center items-center inline-flex">
                <img
                  onClick={() => setCount(count > 0 ? count - 1 : count)}
                  className="w-5 h-5 relative flex-col justify-start items-start flex cursor-pointer"
                  src={Minus_icon}
                  alt="Minus"
                />
                <input
                  type="number"
                  value={count}
                  readOnly
                  className="w-14 md:w-14 text-center pl-4 bg-neutral-100 text-neutral-900 text-sm md:text-base font-semibold font-['Inter'] leading-relaxed"
                ></input>
                <img
                  onClick={() => setCount(count + 1)}
                  className="w-5 h-5 relative flex-col justify-start items-start flex cursor-pointer"
                  src={Add_icon}
                  alt="Add"
                />
              </div>
            </div>
            {/* Wishlist */}
            <div className="w-full px-4 md:px-10 py-2.5 rounded-lg border border-neutral-900 justify-center items-center gap-2 flex">
              <img
                className="w-6 h-6 relative"
                src={product.like === true ? like_Filled_icon : like_icon}
                alt="Like"
              />
              <div className="text-center text-neutral-900  text-sm md:text-lg font-medium font-['Inter'] leading-normal md:leading-loose">
                Wishlist
              </div>
            </div>
          </div>
          {/* Add to Cart */}
          <div className="w-full px-10 py-2.5 bg-neutral-900 rounded-lg justify-center items-center gap-2 inline-flex">
            <div className="text-center text-white text-lg font-medium font-['Inter'] leading-loose cursor-pointer">
              Add to Cart
            </div>
          </div>
        </div>
        {/* CATEGORY & SKU */}
        <div className="h-24 py-6 border-t border-gray-200 flex-col justify-start items-start gap-2 flex">
          <div className="justify-start items-start gap-[98px] inline-flex">
            <div className="text-zinc-500 text-xs font-normal font-['Inter'] leading-tight">
              item code
            </div>
            <div className="text-neutral-900 text-xs font-normal font-['Inter'] leading-tight">
              {product.itemNumber}
            </div>
          </div>
          <div className="justify-start items-start gap-[58px] inline-flex">
            <div className="text-zinc-500 text-xs font-normal font-['Inter'] leading-tight">
              CATEGORY
            </div>
            <div className="text-neutral-900 text-xs font-normal font-['Inter'] leading-tight">
              {product.CATEGORY}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
