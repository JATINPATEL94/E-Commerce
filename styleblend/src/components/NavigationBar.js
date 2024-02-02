import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import ProductContext from "../context/ProductContext";
import { showToast } from "../utils/toastHandler.js";
import close_icon from "../images/Icons/close.svg";
import user_icon from "../images/Icons/Navbar_icons/user-circle.svg";
import cart_icon from "../images/Icons/Navbar_icons/cart.svg";
import elipse_icon from "../images/Icons/Navbar_icons/ellipse_1.svg";
import like_icon from "../images/Icons/Navbar_icons/like.svg";
import instagram_icon from "../images/Icons/Navbar_icons/instagram.svg";
import linkedin_icon from "../images/Icons/Navbar_icons/linkedin.svg";
import email_icon from "../images/Icons/Navbar_icons/email.svg";
import menu_open_icon from "../images/Icons/Navbar_icons/menu-open.svg";
import OrderSummary from "./OrderSummary";

const NavigationBar = () => {
  const context = useContext(ProductContext);
  const {
    LoadingAnimation,
    isLogin,
    setIsLogin,
    userStatus,
    getFullUserDetails,
    fetchAllProduct,
    serchProducts,
    cart,
    getAllCartProducts,
    like,
    searchQuery,
    setSearchQuery,
    searchResults,
    setSearchResults,
    setViewProducts,
    getAllOrder,
    logoutUser,
  } = context;
  const navigate = useNavigate();

  // default states
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleOderSummary, setToggleOderSummary] = useState(false);
  const [loading, setLoading] = useState(false);

  const debouncedFetchSuggestions = debounce(serchProducts, 300);
  // Handlera
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    debouncedFetchSuggestions();

    return () => debouncedFetchSuggestions.cancel(); // Cancel the debounce on unmount
  }, [searchQuery]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchAllProduct();
      await userStatus();
    };
    fetchData();
  }, []);

  async function openCloseOderSummary() {
    const body = document.body;
    setToggleOderSummary(!toggleOderSummary);
    body.classList.toggle("overflow-hidden", !toggleOderSummary); //Diseble Scrolling in mobile navbar is ON.
    if (!toggleOderSummary) {
      await getAllCartProducts();
    }
  }

  function openCloseMenu() {
    const body = document.body;
    setToggleMenu(!toggleMenu);
    body.classList.toggle("overflow-hidden", !toggleMenu); //Diseble Scrolling in mobile navbar is ON.
  }

  const openSetting = async () => {
    try {
      setLoading(true);
      await getFullUserDetails();
      await getAllOrder();
      navigate("/useraccount");
      setIsLogin(true);
    } catch (error) {
      setIsLogin(false);
      navigate("/login");
      showToast(error.message);
    } finally {
      setLoading(false);
    }
  };

  const logoutHandler = async () => {
    try {
      await logoutUser();
      navigate("/");
      setIsLogin(false);
      openCloseMenu();
    } catch (error) {
      showToast(error.message);
    }
  };

  return (
    <div className="navbar">
      {/* Desktop View */}
      <div
        className={`${
          toggleMenu === true ? "hidden" : "flex"
        } md:flex justify-between items-center w-screen h-30 py-4  px-8 lg:px-40 bg-white`}
      >
        {/* Desktop navigation links */}
        <div className="flex justify-center items-center w-full">
          <img
            onClick={openCloseMenu}
            className="cursor-pointer md:hidden w-15 h-15"
            src={menu_open_icon}
            alt=""
          />
          <span className="text-2xl font-medium font-poppins">
            <Link to="/" className="text-black text-target">
              StyleBlend.
            </Link>
          </span>
          <div className="w-full flex justify-center align-middle gap-5 lg:gap-10">
            <Link
              to="/"
              className="hidden md:block  text-neutral-900 text-sm font-medium font-space-grotesk leading-normal"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="hidden md:block  text-zinc-500 text-sm font-medium font-space-grotesk leading-normal"
            >
              Shop
            </Link>
            <Link
              to="/product"
              className="hidden md:block  text-zinc-500 text-sm font-medium font-space-grotesk leading-normal"
            >
              Product
            </Link>
            <Link
              to="/contact"
              className="hidden md:block  text-zinc-500 text-sm font-medium font-space-grotesk leading-normal"
            >
              Contact Us
            </Link>
          </div>
        </div>
        {/* Desktop icons */}
        <div className="h-7 flex items-center gap-4 relative">
          {/* SEARCH */}
          <div className="relative h-full w-fit items-center border md:block hidden">
            {/* search bar */}
            <input
              type="text"
              className="h-full w-full  pl-4 font-semibold grow border shrink basis-0 text-zinc-500 text-sm font-['Inter'] leading-snug"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <img
              className="w-6 h-5 p-1 absolute top-0.5 right-0.5 bg-neutral-100 cursor-pointer"
              src={close_icon}
              alt="close"
              onClick={() => {
                setSearchQuery("");
              }}
            />
          </div>
          {/* search lists */}
          <div className="md:visible invisible  flex flex-col gap-1 w-full max-h-80 rounded bg-neutral-100 absolute top-10 -left-2 z-20">
            {searchResults.map((product) => {
              return (
                <div
                  key={product._id}
                  className="w-full border border-neutral-500 h-fit p-1  flex gap-2 align-middle items-center justify-center"
                  onClick={() => {
                    setViewProducts(product);
                    navigate("/product");
                  }}
                >
                  <img
                    className="w-10 h-14 object-cover"
                    src={product.productImage}
                    alt={product.name}
                  />
                  <div>
                    <h4 className="text-neutral-900 text-sm font-medium font-space-grotesk leading-normal">
                      {product.name}
                    </h4>
                    <div className="flex gap-2">
                      <p className="text-zinc-500 text-sm font-normal font-['Inter'] line-through leading-snug">
                        ₹ {product.mrp}
                      </p>
                      <p className="text-zinc-500 text-sm font-normal font-['Inter'] leading-snug">
                        ₹ {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* LOGIN & USERACCOUNT */}
          <div className="hidden md:block w-8 h-8 relative">
            {loading ? (
              <LoadingAnimation />
            ) : isLogin ? (
              <img
                onClick={openSetting}
                src={user_icon}
                alt="User"
                className="w-full h-full"
              />
            ) : (
              <Link
                to="/login"
                className="hidden md:block  text-zinc-500 text-sm font-medium font-space-grotesk leading-normal"
              >
                Login
              </Link>
            )}
          </div>
          {/* CART */}
          <div className="w-[85px] h-8 py-0.5 justify-center items-center inline-flex">
            <img
              onClick={openCloseOderSummary}
              className="w-6 h-6 relative flex-col justify-start items-start flex cursor-pointer"
              src={cart_icon}
              alt="cart"
            />
            <div className="m-1 relative flex-col justify-start items-start flex">
              <img className="bg-red w-5 h-5" src={elipse_icon} alt="" />
              <div className="text-white text-xs mt-[-19px] pl-1.5 font-bold">
                {cart.items.length}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div
        className={`${
          toggleMenu === true ? "block" : "hidden"
        } md:hidden inline-flex w-full p-10 bg-white flex-col justify-between items-center overflow-hidden h-screen `}
      >
        <div className=" h-[380px] pb-2 flex-col justify-start items-start gap-4 flex">
          {/* logo and close button for Mobile */}
          <div className=" self-stretch justify-between items-center inline-flex">
            <div className="justify-center items-center flex">
              <div className="text-center">
                <span className="text-black text-base font-bold font-poppins leading-normal text-target">
                  StyleBlend.
                </span>
                <span className="text-zinc-500 text-base font-medium font-poppins leading-normal">
                  .
                </span>
              </div>
            </div>
            <img
              onClick={openCloseMenu}
              className="cursor-pointer w-6 h-6 relative"
              src={close_icon}
              alt=""
            />
          </div>
          {/* search-bar for Mobile */}
          <div className="relative self-stretch  bg-white rounded-md border border-zinc-500 justify-start items-center inline-flex">
            {/* search bar */}
            <div className="h-[46px] w-full relative">
              <input
                type="text"
                className="h-full w-full  pl-4 font-semibold grow border shrink basis-0 text-zinc-500 text-sm font-['Inter'] leading-snug"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <img
                className="w-8 h-10 p-1 absolute top-0.5 right-0.5 bg-neutral-300 cursor-pointer"
                src={close_icon}
                alt="close"
                onClick={() => {
                  setSearchQuery("");
                }}
              />
            </div>
            {/* search items list */}
            <div className="visible md:invisible  flex flex-col gap-1 w-full max-h-80 rounded bg-neutral-100 absolute top-10 -left-0 z-20">
              {searchResults.map((product) => {
                return (
                  <div
                    key={product._id}
                    className="w-full border border-neutral-500 h-fit p-1  flex gap-2 align-middle items-center justify-center"
                    onClick={() => {
                      setViewProducts(product);
                      openCloseMenu();
                      navigate("/product");
                    }}
                  >
                    <img
                      className="w-10 h-14 object-cover"
                      src={product.productImage}
                      alt={product.name}
                    />
                    <div>
                      <h4 className="text-neutral-900 text-sm font-medium font-space-grotesk leading-normal">
                        {product.name}
                      </h4>
                      <div className="flex gap-2">
                        <p className="text-zinc-500 text-sm font-normal font-['Inter'] line-through leading-snug">
                          ₹ {product.mrp}
                        </p>
                        <p className="text-zinc-500 text-sm font-normal font-['Inter'] leading-snug">
                          ₹ {product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* menu-bar Links for Mobile */}
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="h-10 pb-2 border-b border-gray-200 flex-col justify-start items-start gap-2.5 flex">
              <div className="pb-2 justify-end items-center inline-flex">
                <Link
                  onClick={() => {
                    openCloseMenu();
                  }}
                  to="/"
                  className="w-[303px] text-neutral-900 text-sm font-medium font-['Inter'] leading-normal"
                >
                  Home
                </Link>
              </div>
            </div>
            <div className="h-10 pb-2 border-b border-gray-200 flex-col justify-start items-start gap-2.5 flex">
              <div className="pb-2 justify-end items-center inline-flex">
                <Link
                  onClick={() => {
                    openCloseMenu();
                  }}
                  to="/useraccount"
                  className="w-[303px] text-neutral-900 text-sm font-medium font-['Inter'] leading-normal"
                >
                  Profile
                </Link>
              </div>
            </div>
            <div className="h-10 pb-2 border-b border-gray-200 flex-col justify-start items-start gap-2.5 flex">
              <div className="w-[295px] h-8 relative">
                <Link
                  onClick={() => {
                    openCloseMenu();
                  }}
                  to="shop"
                  className="w-[303px] left-0 top-0 absolute text-neutral-900 text-sm font-medium font-['Inter'] leading-normal"
                >
                  Shop
                </Link>
                <div className="w-6 h-6 left-[271px] top-[4px] absolute" />
              </div>
            </div>
            <div className="h-10 pb-2 border-b border-gray-200 flex-col justify-start items-start gap-2.5 flex">
              <div className="w-[295px] h-8 relative">
                <Link
                  onClick={() => {
                    openCloseMenu();
                  }}
                  to="product"
                  className="w-[303px] left-0 top-0 absolute text-neutral-900 text-sm font-medium font-['Inter'] leading-normal"
                >
                  Product
                </Link>
                <div className="w-6 h-6 left-[271px] top-[4px] absolute" />
              </div>
            </div>
            <div className="h-10 pb-2 border-b border-gray-200 flex-col justify-start items-start gap-2.5 flex">
              <div className="pb-2 justify-end items-center inline-flex">
                <Link
                  onClick={() => {
                    openCloseMenu();
                  }}
                  to="contact"
                  className="w-[303px] text-neutral-900 text-sm font-medium font-['Inter'] leading-normal"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* footer-bar for Mobile */}
        <div className="self-stretch h-[210px] flex-col justify-between items-center flex">
          <div className="w-[295px] flex-col justify-start items-center gap-2 flex">
            <div className="h-10 pb-2 border-b border-gray-200 flex-col justify-start items-start gap-2.5 flex">
              <div className="w-[295px] h-8 relative">
                <div
                  onClick={() => {
                    openCloseMenu();
                    openCloseOderSummary();
                  }}
                  className="w-[303px] left-0 top-0 absolute text-zinc-500 text-lg font-medium font-['Inter'] leading-loose"
                >
                  Cart
                </div>
                <div className="w-[50px] h-7 pl-px py-0.5 left-[245px] top-[2px] absolute justify-center items-center gap-[5px] inline-flex">
                  <img
                    className="w-6 h-6 relative flex-col justify-start items-start flex"
                    src={cart_icon}
                    alt=""
                  />
                  <div className="w-5 h-5 relative flex-col justify-start items-start flex">
                    <img className="w-5 h-5" src={elipse_icon} alt="" />
                    <div className="text-white text-xs mt-[-18px] pl-1.5 font-bold">
                      {cart.items.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-10 pb-2 border-b border-gray-200 flex-col justify-start items-start gap-2.5 flex">
              <div className="w-[295px] h-8 relative">
                <Link
                  to="/useraccount"
                  onClick={() => {
                    openCloseMenu();
                  }}
                  className="w-[303px] left-0 top-0 absolute text-zinc-500 text-lg font-medium font-['Inter'] leading-loose"
                >
                  Wishlist
                </Link>
                <div className="w-[50px] pl-px pt-[1.67px] pb-[2.33px] left-[245px] top-[2px] absolute justify-center items-end gap-[5px] inline-flex">
                  <img
                    className="w-6 h-6 relative flex-col justify-start items-start flex"
                    src={like_icon}
                    alt=""
                  />
                  <div className="w-5 h-5 relative flex-col justify-start items-start flex">
                    <img className="w-5 h-5" src={elipse_icon} alt="" />
                    <div className="mt-[-18px] pl-1.5 text-white text-xs font-bold">
                      {like.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[295px] items-center gap-4 flex">
            <button
              onClick={() => {
                isLogin
                  ? logoutHandler()
                  : navigate("/login") || openCloseMenu();
              }}
              className="w-full self-stretch px-[26px] py-2.5 bg-neutral-900 rounded-md justify-center items-center gap-1 inline-flex"
            >
              <h5 className="text-center text-white text-lg font-medium font-['Inter'] leading-loose">
                {isLogin ? "Logout" : "Login"}
              </h5>
            </button>
          </div>
          {/* social media link of footer-bar for Mobile */}
          <div className="w-[295px] justify-start items-start gap-2.5 inline-flex">
            <div className="justify-around w-full items-start gap-6 flex py-3">
              <a
                href="https://www.instagram.com/jatin_patel_94/"
                target="blank"
              >
                <img
                  className="w-8 h-8 p-1 border bg-white border-black rounded-full"
                  src={instagram_icon}
                  alt=""
                />
              </a>
              <a
                href="https://www.linkedin.com/in/patel-jatin-/"
                target="blank"
              >
                <img
                  className="w-8 h-8 p-1 border bg-white border-black rounded-full"
                  src={linkedin_icon}
                  alt=""
                />
              </a>
              <a href="mailto:jatin.patel1355@gmail.com">
                <img
                  className="w-8 h-8 p-1 border bg-white border-black rounded-full"
                  src={email_icon}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* OrderSummary */}
      {toggleOderSummary === true ? (
        <OrderSummary openCloseOderSummary={openCloseOderSummary} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavigationBar;
