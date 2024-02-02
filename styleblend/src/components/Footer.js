import React from "react";
import { Link } from "react-router-dom";
import instagram_icon from "../images/Icons/Navbar_icons/instagram.svg";
import linkedin_icon from "../images/Icons/Navbar_icons/linkedin.svg";
import email_icon from "../images/Icons/Navbar_icons/email.svg";

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
              Clothing And Fashion Wear Store
            </div>
          </div>
          <div className="justify-end items-end gap-5 lg:gap-10 flex">
            <Link
              to="/"
              className="text-white text-sm font-normal leading-snug"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-white text-sm font-normal leading-snug"
            >
              Shop
            </Link>
            <Link
              to="/product"
              className="text-white text-sm font-normal leading-snug"
            >
              Product
            </Link>
            <Link
              to="contact"
              className="text-white text-sm font-normal leading-snug"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full py-4 border-t border-zinc-500 justify-between items-center flex">
        <div className="gap-7 lg:gap-10 flex">
          <div className="text-gray-200 text-xs font-normal font-['Poppins'] leading-tight">
            Copyright © 2024 StyleBlend. All rights reserved
          </div>
          <Link
            to="/"
            className=" text-white text-xs font-semibold font-['Poppins'] leading-tight"
          >
            Privacy Policy
          </Link>
          <Link
            to="/"
            className="text-white text-xs font-semibold font-['Poppins'] leading-tight"
          >
            Terms of Use
          </Link>
        </div>
        <div className="flex gap-5 lg:gap-14">
          <a href="https://www.instagram.com/jatin_patel_94/" target="blank">
            <img
              className="w-8 h-8 p-1 border bg-white border-white rounded-full"
              src={instagram_icon}
              alt=""
            />
          </a>
          <a href="https://www.linkedin.com/in/patel-jatin-/" target="blank">
            <img
              className="w-8 h-8 p-1 border bg-white border-white rounded-full"
              src={linkedin_icon}
              alt=""
            />
          </a>
          <a href="mailto:jatin.patel1355@gmail.com">
            <img
              className="w-8 h-8 p-1 border bg-white border-white rounded-full"
              src={email_icon}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
