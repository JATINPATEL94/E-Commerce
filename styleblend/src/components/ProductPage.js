import React, { useContext, useState } from "react";
import Star_icon from "../images/Icons/Star_Icon.svg";
import Star_Filed_icon from "../images/Icons/Star_Filled_ Icon.svg";
import right_arrow_icon from "../images/Icons/Slider_icons/Button-1.png";
import Add_icon from "../images/Icons/Add.png";
import Minus_icon from "../images/Icons/Minus.png";
import like_icon from "../images/Icons/Navbar_icons/like.svg";
import like_Filled_icon from "../images/Icons/Navbar_icons/like_Filled.svg";
import Button_right_icon from "../images/Icons/Slider_icons/Button-1.png";
import Button_left_icon from "../images/Icons/Slider_icons/Button.png";
import ProductContext from "../context/ProductContext";

const ProductPage = () => {
  const context = useContext(ProductContext);
  const { viewProducts, like, addToCartProducts, addToLikeProducts } = context;
  const [selectedSizes, setSelectedSizes] = useState(viewProducts.sizes[0]);
  const [selectedColors, setSelectedColors] = useState(viewProducts.colors[0]);
  const [count, setCount] = useState(1);

  // Handlers
  const handleAddToCart = async (viewProducts) => {
    await addToCartProducts({
      productId: viewProducts._id,
      quantity: count,
      colors: selectedColors,
      sizes: selectedSizes,
    });
  };
  const handleaddToLikeProducts = async (viewProducts) => {
    await addToLikeProducts({
      productId: viewProducts._id,
      colors: selectedColors,
      sizes: selectedSizes,
    });
  };

  return (
    <div className="w-full h-full px-8 pt-8 lg:px-20 justify-between items-start gap-8 flex flex-col md:flex-row ">
      {/* left part */}
      <div className="w-full h-full md:w-1/2 py-8 flex-col justify-start items-start gap-6 flex border-2">
        <div className="w-full h-full relative items-center align-middle justify-center">
          {/* main image , new & 50% off */}
          <div className="w-full h-full left-0 top-0">
            {/* main image */}
            <div className="w-full h-full left-0 top-0 relative flex-col justify-center items-center inline-flex">
              <img
                className="w-full h-full max-h-[600px] object-cover"
                src={viewProducts.productImage}
                alt="product images"
              />
            </div>
            {/* new */}
            <div className="w-[79.14px] h-[34.05px] px-[18px] py-2 left-[32.06px] top-[32.04px] absolute bg-neutral-700 rounded justify-center items-center gap-2 inline-flex">
              <div className="text-center text-white text-lg font-bold font-['Inter'] leading-[18px]">
                {viewProducts.new ? "NEW" : ""}
              </div>
            </div>
            {/* 50% off */}
            <div className="w-[84.15px] h-[34.05px] px-[18px] py-2 left-[32.06px] top-[75.10px] absolute bg-emerald-400 rounded justify-center items-center gap-2 inline-flex">
              <div className="text-center text-white text-lg font-bold font-['Inter'] leading-[18px]">
                -
                {Math.round(
                  ((viewProducts.mrp - viewProducts.price) / viewProducts.mrp) *
                    100
                )}
                %
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
      </div>
      {/* Right part */}
      <div className="w-full h-full md:w-1/2 flex-col justify-start items-start inline-flex overflow-hidden ">
        {/* {product Details} */}
        <div className="w-full flex-col justify-start items-start flex">
          {/* top section */}
          <div className="w-full pb-6 border-b border-gray-200 flex-col justify-start items-start gap-4 flex">
            {/* rating  */}
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
                        viewProducts.rating >= index + 1
                          ? Star_Filed_icon
                          : Star_icon
                      }
                      alt=""
                    />
                  ))
                }
              </div>
            </div>
            {/* title */}
            <div className="w-full text-neutral-900 text-[20px] lg:text-[40px] font-medium font-['Poppins'] leading-[44px]">
              {viewProducts.name}
            </div>
            {/* description */}
            <div className="w-full text-zinc-500 text-[10px] md:text-base font-normal font-['Inter'] leading-relaxed">
              {viewProducts.description}
            </div>
            {/* price */}
            <div className="w-full justify-start items-center gap-3 inline-flex">
              <div className="text-neutral-900 text-[28px] font-medium font-['Poppins'] leading-[34px]">
                {viewProducts.price} ₹
              </div>
              <div className="text-zinc-500 text-xl font-medium font-['Poppins'] line-through leading-7">
                {viewProducts.mrp} ₹
              </div>
            </div>
          </div>
          {/* bottom section */}
          <div className="w-full py-6 flex-col justify-start items-start gap-6 flex">
            {/* Sizes */}
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="text-zinc-500 text-base font-semibold font-['Inter'] leading-relaxed">
                Choose Sizes
              </div>
              <div className="text-black text-xl font-normal font-['Inter'] leading-loose">
                {selectedSizes}
              </div>
              <div className="flex gap-2 text-black text-xl font-normal font-['Inter'] leading-loose">
                {viewProducts.sizes.map((size) => (
                  <h5
                    key={size}
                    onClick={() => {
                      setSelectedSizes(size);
                    }}
                    className="border px-2"
                  >
                    {size}
                  </h5>
                ))}{" "}
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
                  {selectedColors}
                </div>
              </div>
              {/* Other Color */}
              <div className="w-full overflow-auto">
                <div className="justify-start items-start gap-4 inline-flex w-fit">
                  {viewProducts.colors.map((color, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          setSelectedColors(color);
                        }}
                        className={`w-[62px] h-[40px] rounded ${
                          color === "Black"
                            ? "bg-black"
                            : color === "Red"
                            ? "bg-red-600"
                            : color === "Gray"
                            ? "bg-gray-600"
                            : color === "Green"
                            ? "bg-green-600"
                            : color === "Yellow"
                            ? "bg-yellow-400"
                            : "bg-slate-600"
                        } text-white font-semibold justify-center items-center inline-flex`}
                      >
                        {color}
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
            <div
              onClick={() => {
                handleaddToLikeProducts(viewProducts);
              }}
              className="w-full px-4 md:px-10 py-2.5 rounded-lg border border-neutral-900 justify-center items-center gap-2 flex"
            >
              <img
                className="w-6 h-6 relative"
                src={
                  like.some(
                    (likeItem) => likeItem.productId === viewProducts._id
                  )
                    ? like_Filled_icon
                    : like_icon
                }
                alt="Like"
              />
              <div className="text-center text-neutral-900  text-sm md:text-lg font-medium font-['Inter'] leading-normal md:leading-loose">
                Wishlist
              </div>
            </div>
          </div>
          {/* Add to Cart */}
          <div className="w-full px-10 py-2.5 bg-neutral-900 rounded-lg justify-center items-center gap-2 inline-flex">
            <button
              onClick={() => {
                handleAddToCart(viewProducts);
              }}
              className="w-full h-full text-center text-white text-base font-medium font-['Inter'] leading-7 cursor-pointer"
            >
              Add to cart
            </button>
          </div>
        </div>
        {/* CATEGORY & SKU */}
        <div className="h-24 py-6 border-t border-gray-200 flex-col justify-start items-start gap-2 flex">
          <div className="justify-start items-start gap-[20px] inline-flex">
            <div className="text-zinc-500 text-xs font-normal font-['Inter'] leading-tight">
              item code :
            </div>
            <div className="text-neutral-900 text-xs font-normal font-['Inter'] leading-tight">
              {viewProducts._id}
            </div>
          </div>
          <div className="justify-start items-start gap-[12px] inline-flex">
            <div className="text-zinc-500 text-xs font-normal font-['Inter'] leading-tight">
              CATEGORY :
            </div>
            <div className="text-neutral-900 text-xs font-normal font-['Inter'] leading-tight">
              {viewProducts.category}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
