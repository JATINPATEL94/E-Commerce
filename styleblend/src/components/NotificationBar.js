import React from "react";
import { useState } from "react";
import close_icon from "../images/Icons/close.svg";
import ticket from "../images/Icons/ticket-percent.svg";
import arrow from "../images/Icons/arrow-right.svg";

const NotificationBar = () => {
  const [toggleOffer, setToggleOffer] = useState(true);
  function openCloseOffer() {
    setToggleOffer(!toggleOffer);
  }
  return (
    <div
      className={`${
        toggleOffer === true ? "block" : "hidden"
      } flex fix bg-gray-100 py-2`}
    >
      <div className="w-screen  flex justify-center items-start gap-3">
        <div className="flex items-center gap-3">
          <img className="w-6 h-6 relative" src={ticket} alt="" />
          <div className="text-sm font-semibold leading-snug text-neutral-700">
            30% off storewide — Limited time!
          </div>
        </div>
        <div className="hidden md:flex items-center gap-1 border-b border-blue-500">
          <div className="text-sm font-medium leading-normal text-blue-500">
            Shop Now
          </div>
          <img className="w-18 h-18 relative" src={arrow} alt="" />
        </div>
      </div>
      <div className="mr-4">
        <img
          onClick={openCloseOffer}
          className="w-5 cursor-pointer"
          src={close_icon}
          alt="icon"
        />
      </div>
    </div>
  );
};

export default NotificationBar;
