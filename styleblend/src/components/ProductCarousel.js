import React, { useContext } from "react";
import right_arrow_icon from "../images/Icons/Slider_icons/Button-1.png";
import ProductCard from "./ProductCard";
import ProductContext from "../context/ProductContext";

const ProductCarousel = () => {
  const detailsView = true;
  const context = useContext(ProductContext);
  const { products } = context;

  return (
    <div className="w-full h-full px-8 lg:px-40 my-10 bg-white flex-col gap-12 flex">
      {/* carousel title */}
      <div className="w-full justify-between items-end inline-flex">
        <div className="text-black text-[40px] font-medium font-['Poppins'] leading-[44px] text-target">
          New <br />
          Arrivals
        </div>
        <div className="border-b border-neutral-900 justify-start items-center gap-1 flex">
          <div className="justify-start items-center  flex">
            <div className="text-neutral-900 text-base font-medium font-['Inter'] leading-7">
              More Products
            </div>
            <img
              className="w-10 h-10 mb-[-10px]"
              src={right_arrow_icon}
              alt="right arrow"
            />
          </div>
        </div>
      </div>
      {/* products */}
      <div className="w-full h-fit justify-start items-start gap-6 inline-flex overflow-x-auto">
        {products.map((product) => {
          if (product.new === true) {
            return (
              <ProductCard
                product={product}
                detailsView={detailsView}
                key={product._id + product.colors + product.sizes}
                className="min-w-150" // Adjust the value as needed
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default ProductCarousel;
