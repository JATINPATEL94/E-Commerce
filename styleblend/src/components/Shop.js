import React, { useState, useContext } from "react";
import chevron_right_icon from "../images/Icons/Shop_icons/chevron-right.png";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard.js";
import detail_grid_3x3l from "../images/Icons/Shop_icons/detail_grid-3x3l.png";
import detail_grid_3x3l_filled from "../images/Icons/Shop_icons/detail_grid-3x3l-filled.png";
import detail_grid_24 from "../images/Icons/Shop_icons/detail_grid-24.png";
import detail_grid_24_filled from "../images/Icons/Shop_icons/detail_grid-24-filled.png";
import grid_col_icon from "../images/Icons/Shop_icons/grid-col.png";
import grid_col_filled_icon from "../images/Icons/Shop_icons/grid-col-filled.png";
import grid_row_icon from "../images/Icons/Shop_icons/grid-row.png";
import grid_row_filled_icon from "../images/Icons/Shop_icons/grid-row-filled.png";
import ProductContext from "../context/ProductContext.js";

const Shop = () => {
  const context = useContext(ProductContext);
  const { products } = context;
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortType, setSortType] = useState("name");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });
  const [detailsView, setDetailsView] = useState(true);
  const [col_View, setCol_View] = useState(true);

  // Function to handle sorting change
  const handleSortChange = (e) => {
    const selectedSortType =
      e.target.options[e.target.selectedIndex].getAttribute("sorttype");
    const selectedSortOrder = e.target.value;

    setSortType(selectedSortType);
    setSortOrder(selectedSortOrder);
  };

  // Sort and filter logic
  const sortedProducts = products.sort((a, b) => {
    return sortType === "name"
      ? sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
      : sortOrder === "asc"
      ? a.price - b.price
      : b.price - a.price;
  });

  const filteredProducts = sortedProducts.filter((product) => {
    const isCategoryMatch =
      selectedCategory === "all" || product.category === selectedCategory;
    const isPriceInRange =
      product.price >= priceRange.min && product.price <= priceRange.max;

    return isCategoryMatch && isPriceInRange;
  });
  return (
    <div>
      {/* Shop Page Header */}
      <div className="w-full h-[392px] px-8 lg:px-40 flex-col justify-center items-center gap-2 inline-flex relative">
        <div className="w-full h-[392px] justify-center items-center inline-flex">
          <div className="w-[1120px] h-[392px] bg-gradient-to-b from-gray-100 via-gray-100 to-gray-100" />
        </div>
        <div className="w-full h-full px-8 lg:px-40 flex-col justify-center items-center align-middle gap-6 flex absolute">
          <div className="justify-start items-start gap-4 inline-flex">
            <div className="justify-start items-center gap-1 flex">
              <Link
                to="/"
                className="text-zinc-600 text-sm font-medium font-['Inter'] leading-normal"
              >
                Home
              </Link>
              <img
                className="w-3 h-3 relative"
                src={chevron_right_icon}
                alt="chevron-right"
              />
            </div>
            <h6 className="text-neutral-900 text-sm font-medium font-['Inter'] leading-normal">
              Shop
            </h6>
          </div>
          <h3 className="text-black text-[40px] lg:text-[54px] font-medium font-['Poppins'] leading-[58px]">
            Shop Page
          </h3>
          <h5 className=" text-center text-neutral-900 text-base lg:text-xl font-normal font-['Inter'] lg:leading-loose">
            Let’s design the place you always imagined.
          </h5>
        </div>
      </div>
      {/* Toolbar */}
      <div className=" w-full h-full px-8 lg:px-40 mt-14 gap-8 lg:flex justify-between align-middle">
        {/* Left Part */}
        <div className="md:flex gap-6 justify-center">
          {/* CATEGORIES */}
          <div className="flex flex-col">
            <h5 className="text-zinc-500 text-base font-semibold font-['Inter'] leading-relaxed">
              CATEGORIES
            </h5>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="my-2 h-full pl-4 pr-2 py-2 rounded-lg border-2 border-zinc-500 justify-between items-center inline-flex text-base font-semibold"
            >
              <option value="all">All Products</option>
              {[
                ...new Set(sortedProducts.map((product) => product.category)),
              ].map((category) => (
                <option
                  key={category}
                  value={category}
                  className="w-full h-full text-neutral-900  font-['Inter'] leading-relaxed"
                >
                  {category}
                </option>
              ))}
            </select>
          </div>
          {/* price range */}
          <div className="w-full md:w-fit flex flex-col">
            <h5 className="text-zinc-500 text-base font-semibold font-['Inter'] leading-relaxed">
              PRICE
            </h5>
            <div className="w-full h-full px-1 rounded-lg border-2 border-zinc-500 py-2  my-2 align-middle md:flex-col flex items-center text-center gap-1">
              <input
                type="range"
                min={0}
                max={2000}
                value={priceRange.max}
                onChange={(e) =>
                  setPriceRange({
                    ...priceRange,
                    max: parseInt(e.target.value, 10),
                  })
                }
                className="md:order-1 w-full h-1 appearance-none bg-gradient-to-r from-neutral-700 to-neutral-700  "
              />
              <p className="w-full md:w-24 text-base font-semibold">{` under ₹${priceRange.max}`}</p>
            </div>
          </div>
        </div>
        {/* Right part*/}
        <div className="w-full justify-between flex lg:justify-end align-middle text-center items-center gap-6">
          {/* sort */}
          <div className="flex p-1 border">
            <select
              onChange={handleSortChange}
              className="h-full text-neutral-900 text-base font-semibold font-['Inter'] leading-relaxed"
            >
              <option sorttype="name" value="asc">
                Name : A to Z
              </option>
              <option sorttype="name" value="desc">
                Name : Z to A
              </option>
              <option sorttype="price" value="asc">
                Price : Low To High
              </option>
              <option sorttype="price" value="desc">
                Price : High To Low
              </option>
            </select>
          </div>
          {/* view */}
          <div className="flex gap-2">
            <div className="flex border">
              <img
                onClick={() => setDetailsView(true)}
                className="w-7 h-7 m-1 border"
                src={
                  detailsView === true
                    ? detail_grid_3x3l_filled
                    : detail_grid_3x3l
                }
                alt="detail_grid"
              />
              <img
                onClick={() => setDetailsView(false)}
                className="w-7 h-7 m-1 border"
                src={
                  detailsView === false ? detail_grid_24_filled : detail_grid_24
                }
                alt="detail_grid"
              />
            </div>
            <div className="hidden ssm:flex border">
              <img
                onClick={() => setCol_View(true)}
                className="w-7 h-7 m-1 border"
                src={col_View === true ? grid_col_filled_icon : grid_col_icon}
                alt="grid_cols"
              />
              <img
                onClick={() => setCol_View(false)}
                className="w-7 h-7 m-1 border"
                src={col_View === false ? grid_row_filled_icon : grid_row_icon}
                alt="grid_cols"
              />
            </div>
          </div>
        </div>
      </div>
      {/* products */}
      <div className="w-full min-w-fit h-fit mt-8 px-8 lg:px-40 flex items-center justify-center">
        <div
          className={`${
            col_View === true
              ? "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5"
              : "grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 2xl:grid-cols-3 gap-3"
          } `}
        >
          {filteredProducts.map((product) => {
            return (
              <ProductCard
                key={product.name}
                product={product}
                col_View={col_View}
                detailsView={detailsView}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
