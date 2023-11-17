import React from "react";
import { useState } from "react";
import close_icon from "../images/Icons/close.svg";
import search_icon from "../images/Icons/Navbar_icons/search.svg";
import user_icon from "../images/Icons/Navbar_icons/user-circle.svg";
import cart_icon from "../images/Icons/Navbar_icons/cart.svg";
import elipse_icon from "../images/Icons/Navbar_icons/ellipse_1.svg";
import like_icon from "../images/Icons/Navbar_icons/like.svg";
import instagram_icon from "../images/Icons/Navbar_icons/instagram.svg";
import facebook_icon from "../images/Icons/Navbar_icons/facebook.svg";
import youtube_icon from "../images/Icons/Navbar_icons/youtube.svg";
import menu_open_icon from "../images/Icons/Navbar_icons/menu-open.svg";

const NavigationBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  function openCloseMenu() {
    const body = document.body;
    setToggleMenu(!toggleMenu);
    body.classList.toggle("overflow-hidden", !toggleMenu); //Diseble Scrolling in mobile navbar is ON.
  }
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
            <span className="text-black">StyleBlend.</span>
            <span className="text-zinc-500 lg:pl-30"></span>
          </span>
          <div className="w-full flex justify-center align-middle gap-5 lg:gap-10">
            <a
              href="/home"
              className="hidden md:block  text-neutral-900 text-sm font-medium font-space-grotesk leading-normal"
            >
              Home
            </a>
            <a
              href="/shop"
              className="hidden md:block  text-zinc-500 text-sm font-medium font-space-grotesk leading-normal"
            >
              Shop
            </a>
            <a
              href="/product"
              className="hidden md:block  text-zinc-500 text-sm font-medium font-space-grotesk leading-normal"
            >
              Product
            </a>
            <a
              href="/contactus"
              className="hidden md:block  text-zinc-500 text-sm font-medium font-space-grotesk leading-normal"
            >
              Contact Us
            </a>
          </div>
        </div>
        {/* Desktop icons */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block w-6 h-6 relative">
            <img src={search_icon} alt="Search" />
          </div>
          <div className="hidden md:block w-6 h-6 relative">
            <img src={user_icon} alt="User" />
          </div>
          <div className="w-[60px] h-7 pl-px py-0.5 justify-center items-center inline-flex">
            <img
              className="w-6 h-6 relative flex-col justify-start items-start flex"
              src={cart_icon}
              alt=""
            />
            <div className="m-1 relative flex-col justify-start items-start flex">
              <img className="bg-red w-5 h-5" src={elipse_icon} alt="" />
              <div className="text-white text-xs mt-[-19px] pl-1.5 font-bold">
                2
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
        <div className=" h-[310px] flex-col justify-start items-start gap-4 flex">
          {/* logo and close button for Mobile */}
          <div className=" self-stretch justify-between items-center inline-flex">
            <div className="justify-center items-center flex">
              <div className="text-center">
                <span className="text-black text-base font-bold font-poppins leading-normal">
                  StyleBlend
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
          <div className="self-stretch h-[46px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch h-[46px] px-4 bg-white rounded-md border border-zinc-500 justify-start items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                <div className="w-6 h-6 relative" />
                <img src={search_icon} alt="" />
                <div className="grow shrink basis-0 text-zinc-500 text-sm font-normal font-['Inter'] leading-snug">
                  Search
                </div>
              </div>
            </div>
          </div>
          {/* menu-bar for Mobile */}
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="h-10 pb-2 border-b border-gray-200 flex-col justify-start items-start gap-2.5 flex">
              <div className="pb-2 justify-end items-center inline-flex">
                <div className="w-[303px] text-neutral-900 text-sm font-medium font-['Inter'] leading-normal">
                  Home
                </div>
              </div>
            </div>
            <div className="h-10 pb-2 border-b border-gray-200 flex-col justify-start items-start gap-2.5 flex">
              <div className="w-[295px] h-8 relative">
                <div className="w-[303px] left-0 top-0 absolute text-neutral-900 text-sm font-medium font-['Inter'] leading-normal">
                  Shop
                </div>
                <div className="w-6 h-6 left-[271px] top-[4px] absolute" />
              </div>
            </div>
            <div className="h-10 pb-2 border-b border-gray-200 flex-col justify-start items-start gap-2.5 flex">
              <div className="w-[295px] h-8 relative">
                <div className="w-[303px] left-0 top-0 absolute text-neutral-900 text-sm font-medium font-['Inter'] leading-normal">
                  Product
                </div>
                <div className="w-6 h-6 left-[271px] top-[4px] absolute" />
              </div>
            </div>
            <div className="h-10 pb-2 border-b border-gray-200 flex-col justify-start items-start gap-2.5 flex">
              <div className="pb-2 justify-end items-center inline-flex">
                <div className="w-[303px] text-neutral-900 text-sm font-medium font-['Inter'] leading-normal">
                  Contact Us
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer-bar for Mobile */}
        <div className="self-stretch h-[210px] flex-col justify-between items-center flex">
          <div className="w-[295px] flex-col justify-start items-center gap-2 flex">
            <div className="h-10 pb-2 border-b border-gray-200 flex-col justify-start items-start gap-2.5 flex">
              <div className="w-[295px] h-8 relative">
                <div className="w-[303px] left-0 top-0 absolute text-zinc-500 text-lg font-medium font-['Inter'] leading-loose">
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
                      2
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-10 pb-2 border-b border-gray-200 flex-col justify-start items-start gap-2.5 flex">
              <div className="w-[295px] h-8 relative">
                <div className="w-[303px] left-0 top-0 absolute text-zinc-500 text-lg font-medium font-['Inter'] leading-loose">
                  Wishlist
                </div>
                <div className="w-[50px] pl-px pt-[1.67px] pb-[2.33px] left-[245px] top-[2px] absolute justify-center items-end gap-[5px] inline-flex">
                  <img
                    className="w-6 h-6 relative flex-col justify-start items-start flex"
                    src={like_icon}
                    alt=""
                  />
                  <div className="w-5 h-5 relative flex-col justify-start items-start flex">
                    <img className="w-5 h-5" src={elipse_icon} alt="" />
                    <div className="mt-[-18px] pl-1.5 text-white text-xs font-bold">
                      2
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[295px] items-center gap-4 flex">
            <div className="w-full self-stretch px-[26px] py-2.5 bg-neutral-900 rounded-md justify-center items-center gap-1 inline-flex">
              <div className="text-center text-white text-lg font-medium font-['Inter'] leading-loose">
                Sign In
              </div>
            </div>
          </div>
          {/* social media link of footer-bar for Mobile */}
          <div className="w-[295px] justify-start items-start gap-2.5 inline-flex">
            <div className="justify-around w-full items-start gap-6 flex">
              <img
                className="rounded-full w-10 h-10 p-2 bg-neutral-900 border border-neutral-900"
                src={instagram_icon}
                alt=""
              />
              <img
                className="rounded-full w-10 h-10 p-2 bg-neutral-900 border-neutral-900"
                src={facebook_icon}
                alt=""
              />
              <img
                className="rounded-full w-10 h-10 p-2 bg-neutral-900 border border-neutral-900"
                src={youtube_icon}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
