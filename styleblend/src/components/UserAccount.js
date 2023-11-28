import React, { useState } from "react";
import camera_icon from "../images/Icons/UserAccount _icons/camera.png";
import UserDetail from "./UserAccount/UserDetail";
import Address from "./UserAccount/Address";
import OrdersHistory from "./UserAccount/OrdersHistory";
import Wishlist from "./UserAccount/Wishlist";

const UserAccount = () => {
  const userAccount = {
    name: "Jatin Patel",
    userImage: "https://via.placeholder.com/80x80",
  };
  const [menu, setMenu] = useState("Detail");
  return (
    <div className="w-screen h-fit px-8 lg:px-40 pb-20 bg-white flex-col justify-start items-center inline-flex">
      <div className="py-20 flex-col justify-start items-center gap-10 flex">
        <h2 className="text-black text-[54px] font-medium font-['Poppins'] leading-[58px]">
          My Account
        </h2>
      </div>
      {/* Account section */}
      <div className="w-full justify-start items-start md:gap-4 lg:gap-16 md:flex">
        {/* user profile & MENU */}
        <div className="w-full px-4 py-10 bg-gray-100 rounded-lg flex-col justify-start items-center gap-10 inline-flex">
          {/* user image & user name */}
          <div className="flex-col justify-start items-center gap-1.5 flex">
            <div className="w-[82px] h-[82px] relative">
              {/* user image */}
              <div className="w-20 h-20 left-0 top-0 absolute rounded-[58px]">
                <img
                  className="w-20 h-20 left-0 top-0 absolute rounded-[82px]"
                  src={userAccount.userImage}
                  alt="user_photo"
                />
              </div>
              {/* Change user image */}
              <div className="p-[7px] left-[50px] top-[52px] absolute bg-neutral-900 rounded-[125px] border border-white justify-start items-start gap-2.5 inline-flex">
                <img
                  className="w-4 h-4 relative"
                  src={camera_icon}
                  alt="upload user_image"
                />
              </div>
            </div>
            {/* user name */}
            <h3 className="text-black text-xl font-semibold font-['Inter'] leading-loose">
              {userAccount.name}
            </h3>
          </div>
          {/* menu */}
          <div className="flex-col justify-start items-start gap-3 flex">
            {/* Detail */}
            <div
              className={`h-[42px] py-2 border-b ${
                menu === "Detail" ? "border-neutral-900" : "border-white"
              } flex-col justify-start items-start gap-2.5 flex `}
            >
              <h4
                onClick={() => {
                  setMenu("Detail");
                }}
                className="self-stretch text-neutral-900 text-base font-semibold font-['Inter'] leading-relaxed active:font-bold"
              >
                Account
              </h4>
            </div>
            {/* Address */}
            <div
              className={`h-[42px] py-2 border-b ${
                menu === "Address" ? "border-neutral-900" : "border-white"
              } flex-col justify-start items-start gap-2.5 flex `}
            >
              <h4
                onClick={() => {
                  setMenu("Address");
                }}
                className="self-stretch text-zinc-500 text-base font-semibold font-['Inter'] leading-relaxed"
              >
                Address
              </h4>
            </div>
            {/* Orders */}
            <div
              className={`h-[42px] py-2 border-b ${
                menu === "Orders" ? "border-neutral-900" : "border-white"
              } flex-col justify-start items-start gap-2.5 flex `}
            >
              <h4
                onClick={() => {
                  setMenu("OrdersHistory");
                }}
                className="self-stretch text-zinc-500 text-base font-semibold font-['Inter'] leading-relaxed"
              >
                Orders
              </h4>
            </div>
            {/* Wishlist */}
            <div
              className={`h-[42px] py-2 border-b ${
                menu === "Wishlist" ? "border-neutral-900" : "border-white"
              } flex-col justify-start items-start gap-2.5 flex `}
            >
              <h4
                onClick={() => {
                  setMenu("Wishlist");
                }}
                className="self-stretch text-zinc-500 text-base font-semibold font-['Inter'] leading-relaxed"
              >
                Wishlist
              </h4>
            </div>

            <div className="h-[42px] py-2 border-b border-white flex-col justify-start items-start gap-2.5 flex">
              <h4 className="self-stretch text-zinc-500 text-base font-semibold font-['Inter'] leading-relaxed">
                Log Out
              </h4>
            </div>
          </div>
        </div>
        {/* Detail */}
        {menu === "Detail" ? <UserDetail /> : <></>}
        {/* Address */}
        {menu === "Address" ? <Address /> : <></>}
        {/* Orders History */}
        {menu === "OrdersHistory" ? <OrdersHistory /> : <></>}
        {/* Wishlist */}
        {menu === "Wishlist" ? <Wishlist /> : <></>}
      </div>
    </div>
  );
};

export default UserAccount;
