import React from "react";
import instagram_icon from "../images/Icons/Navbar_icons/instagram.svg";
import facebook_icon from "../images/Icons/Navbar_icons/facebook.svg";
import youtube_icon from "../images/Icons/Navbar_icons/youtube.svg";

const Footer = () => {
  return (
    <div className="hidden md:inline-flex w-screen h-[249px] px-8 lg:px-40 pt-20 pb-8 bg-neutral-900 flex-col justify-start items-start gap-[49px] ">
      <div className="w-full pb-2 justify-center items-center inline-flex">
        <div className="grow shrink basis-0 self-stretch justify-between items-center inline-flex">
          <div className="h-6 justify-start items-center gap-8 flex">
            <div className="justify-center items-center flex">
              <div className="text-center">
                <span className="text-white text-base font-medium font-poppins leading-normal">
                  StyleBlend
                </span>
                <span className="text-zinc-500 text-base font-medium font-poppins leading-normal">
                  .
                </span>
              </div>
            </div>
            <div className="w-px h-6 bg-zinc-500" />
            <div className="text-gray-200 text-sm font-normal  leading-snug">
              Gift & Decoration Store
            </div>
          </div>
          <div className="justify-end items-end gap-5 lg:gap-10 flex">
            <div className="text-white text-sm font-normal leading-snug">
              Home
            </div>
            <div className="text-white text-sm font-normal leading-snug">
              Shop
            </div>
            <div className="text-white text-sm font-normal leading-snug">
              Product
            </div>
            <div className="text-white text-sm font-normal leading-snug">
              Blog
            </div>
            <div className="text-white text-sm font-normal leading-snug">
              Contact Us
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-4 border-t border-zinc-500 justify-between items-center flex">
        <div className="gap-7 lg:gap-10 flex">
          <div className="text-gray-200 text-xs font-normal font-['Poppins'] leading-tight">
            Copyright © 2023 StyleBlend. All rights reserved
          </div>
          <div className=" text-white text-xs font-semibold font-['Poppins'] leading-tight">
            Privacy Policy
          </div>
          <div className="text-white text-xs font-semibold font-['Poppins'] leading-tight">
            Terms of Use
          </div>
        </div>
        <div className="flex gap-5 lg:gap-14">
          <img
            className="w-5 h-5 border border-white rounded-full"
            src={instagram_icon}
            alt=""
          />
          <img
            className="w-5 h-5 border border-white rounded-full"
            src={facebook_icon}
            alt=""
          />
          <img
            className="w-5 h-5 border border-white rounded-full"
            src={youtube_icon}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
