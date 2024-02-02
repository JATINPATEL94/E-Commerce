import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import like_icon from "../images/Icons/Navbar_icons/like.svg";
import like_Filled_icon from "../images/Icons/Navbar_icons/like_Filled.svg";
import Star_icon from "../images/Icons/Star_Icon.svg";
import Star_Filed_icon from "../images/Icons/Star_Filled_ Icon.svg";
import ProductContext from "../context/ProductContext";

const ProductCard = ({ product, detailsView, col_View }) => {
  const context = useContext(ProductContext);
  const { setViewProducts, like, addToCartProducts, addToLikeProducts } =
    context;
  const navigate = useNavigate();
  // Handlers
  const handleAddToCart = async (product) => {
    await addToCartProducts({
      productId: product._id,
      quantity: 1,
      colors: product.colors[0],
      sizes: product.sizes[0],
    });
  };

  const handleaddToLikeProducts = async (data) => {
    await addToLikeProducts(data);
  };

  const handleViewProduct = async (data) => {
    const {
      _id,
      name,
      description,
      productImage,
      mrp,
      price,
      colors,
      sizes,
      rating,
      category,
    } = data;
    setViewProducts({
      _id,
      name,
      description,
      productImage,
      mrp,
      price,
      colors,
      sizes,
      rating,
      category,
      new: data.new,
      quantity: 1,
    });
    navigate("/product");
  };

  return (
    <div>
      {detailsView === true ? (
        <div className="w-full min-w-[220px] max-w-[262px] h-fit border flex-col justify-center items-start gap-3 inline-flex">
          {/* top section */}
          <div className="w-full max-h-80 relative flex-col justify-start items-start flex group">
            {/* image */}
            <div className="group/view w-full max-h-80 flex-col justify-center items-center inline-flex relative">
              <img
                onClick={() => {
                  handleViewProduct(product);
                }}
                className="w-[262px] h-[349px] object-cover"
                src={product.productImage}
                alt={product.name}
              />
              <div className="group-hover/view:block hidden absolute text-white font-bold">
                Click To View
              </div>
            </div>
            {/* new and -50% */}
            <div className="flex-col justify-start items-start gap-2 inline-flex absolute top-4 left-4">
              <div className="px-3.5 py-1 bg-white rounded justify-center items-center gap-2 inline-flex">
                <div className="text-center text-neutral-900 text-base font-bold font-['Inter'] uppercase leading-none">
                  {product.new ? "NEW" : ""}
                </div>
              </div>
              <div className="px-3.5 py-1 bg-emerald-400 rounded justify-center items-center gap-2 inline-flex">
                <div className="text-center text-white text-base font-bold font-['Inter'] uppercase leading-none">
                  -
                  {Math.round(
                    ((product.mrp - product.price) / product.mrp) * 100
                  )}
                  %
                </div>
              </div>
            </div>
            {/* Like */}
            <div className="w-8 h-8 p-1.5 bg-white rounded-[32px] shadow justify-center items-center gap-2.5 inline-flex absolute top-4 right-4">
              <img
                onClick={() => {
                  handleaddToLikeProducts({
                    productId: product._id,
                    colors: product.colors[0],
                    sizes: product.sizes[0],
                  });
                }}
                className="w-5 h-5 relative cursor-pointer"
                src={
                  like.some((likeItem) => likeItem.productId === product._id)
                    ? like_Filled_icon
                    : like_icon
                }
                alt="Like"
              />
            </div>
            {/* Add To Cart */}
            <div className="group-hover:block hidden  w-[230px] h-[46px] p-2 bg-neutral-900 rounded-lg shadow gap-1 absolute bottom-0 left-2">
              <button
                onClick={() => {
                  handleAddToCart(product);
                }}
                className="w-full h-full text-center text-white text-base font-medium font-['Inter'] leading-7 cursor-pointer"
              >
                Add to cart
              </button>
            </div>
          </div>
          {/* bottom section */}
          <div className="p-2 self-stretch h-fit flex-col justify-start items-start gap-3 inline-flex">
            <div className="self-stretch h-[72px] flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch h-[72px] flex-col justify-start items-start gap-1 flex">
                {/* product rating */}
                <div className="w-[88px] h-4 justify-center items-start gap-0.5 inline-flex">
                  {
                    // Createing an array using Array.from() to map over each index
                    Array.from({ length: 5 }).map((_, index) => (
                      <img
                        key={index} // Add a unique key for each image
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
                {/* product title */}
                <div className="self-stretch h-6 overflow-hidden text-neutral-900 text-base font-semibold font-['Inter'] leading-relaxed">
                  {product.name}
                </div>
                {/* product price */}
                <div className="justify-start items-start gap-3 inline-flex">
                  <div className="text-neutral-900 text-sm font-semibold font-['Inter'] leading-snug">
                    {product.price} ₹
                  </div>
                  <div className="text-zinc-500 text-sm font-normal font-['Inter'] line-through leading-snug">
                    {product.mrp} ₹
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`${
            col_View === true ? "flex-col" : "flex-col ssm:flex-row"
          } w-full h-full min-w-[240px] p-1 justify-top items-start gap-3 inline-flex border`}
        >
          {/* top section */}
          <div className="w-full h-full relative flex-col items-center align-middle flex group">
            {/* image */}
            <div className="w-full h-full flex-col justify-center items-center align-middle flex">
              <img
                onClick={() => {
                  handleViewProduct(product);
                }}
                className="w-[262px] h-[349px] object-cover"
                src={product.productImage}
                alt={product.name}
              />
              <div className="group-hover/view:block hidden absolute text-white font-bold">
                Click To View
              </div>
            </div>
            {/* new and -50% */}
            <div className="flex-col justify-start items-start gap-2 inline-flex absolute top-4 left-4">
              <div className="px-3.5 py-1 bg-white rounded justify-center items-center gap-2 inline-flex">
                <div className="text-center text-neutral-900 text-base font-bold font-['Inter'] uppercase leading-none">
                  {product.new ? "NEW" : ""}
                </div>
              </div>
              <div className="px-3.5 py-1 bg-emerald-400 rounded justify-center items-center gap-2 inline-flex">
                <div className="text-center text-white text-base font-bold font-['Inter'] uppercase leading-none">
                  -
                  {Math.round(
                    ((product.mrp - product.price) / product.mrp) * 100
                  )}
                  %
                </div>
              </div>
            </div>
          </div>
          {/* bottom section */}
          <div
            className={`${
              col_View === true
                ? "w-full h-full flex-col justify-start items-start gap-1 flex relative pb-10 p-1"
                : "w-full h-full flex-col justify-start items-start gap-1 flex relative pb-10 py-4"
            }`}
          >
            {/* product rating */}
            <div className="w-[88px] h-4 justify-center items-start gap-0.5 inline-flex">
              {
                // Createing an array using Array.from() to map over each index
                Array.from({ length: 5 }).map((_, index) => (
                  <img
                    key={index} // Add a unique key for each image
                    className="w-4 h-4 relative flex-col justify-start items-start flex"
                    src={
                      product.rating >= index + 1 ? Star_Filed_icon : Star_icon
                    }
                    alt=""
                  />
                ))
              }
            </div>
            {/* title & Like    */}
            <div className="w-full flex justify-between">
              {/* product title */}
              <div className="self-stretch h-6 overflow-hidden text-neutral-900 text-base font-semibold font-['Inter'] leading-relaxed">
                {product.name}
              </div>
              {/* Like */}
              <div className="w-8 h-8 p-1.5 bg-white">
                <img
                  onClick={() => {
                    handleaddToLikeProducts({ productId: product._id });
                  }}
                  className="w-5 h-5 relative cursor-pointer"
                  src={
                    like.some((likeItem) => likeItem.productId === product._id)
                      ? like_Filled_icon
                      : like_icon
                  }
                  alt="Like"
                />
              </div>
            </div>
            {/* product price */}
            <div className="justify-start items-start gap-3 inline-flex">
              <div className="text-neutral-900 text-sm font-semibold font-['Inter'] leading-snug">
                {product.price} ₹
              </div>
              <div className="text-zinc-500 text-sm font-normal font-['Inter'] line-through leading-snug">
                {product.mrp} ₹
              </div>
            </div>
            {/* description */}
            <div className="mb-2 text-zinc-500 text-sm font-normal font-['Inter'] leading-snug">
              {product.description}
            </div>
            {/* Add To Cart */}
            <div className=" w-full h-[46px] absolute py-2 bg-neutral-900 rounded-lg shadow bottom-0">
              <button
                onClick={() => {
                  handleAddToCart(product);
                }}
                className="w-full h-full text-center text-white text-base font-medium font-['Inter'] leading-7 cursor-pointer"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
