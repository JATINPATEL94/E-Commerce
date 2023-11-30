import React from "react";
import store02_icon from "../images/Icons/Contact_icons/store 02.png";
import call_icon from "../images/Icons/Contact_icons/call.png";
import mail_icon from "../images/Icons/Contact_icons/mail.png";
import store01_icon from "../images/Icons/Contact_icons/store 01.png";
import Subtract_icon from "../images/Icons/Contact_icons/Subtract.png";
import map from "../images/Icons/Contact_icons/map.png";

const Contact = () => {
  return (
    <div className="w-full h-full px-8 lg:px-40 flex-col justify-start items-start gap-10 inline-flex">
      <div className="self-stretch text-center text-neutral-900 text-[40px] font-medium font-['Poppins'] leading-[44px]">
        Contact Us
      </div>
      {/* top part */}
      <div className="w-full h-full bg-white justify-start items-start gap-6 grid-rows-3 md:grid md:grid-rows-1 md:grid-cols-3">
        {/* Address */}
        <div className="h-full w-full px-8 py-4 bg-gray-100 flex-col justify-center items-center gap-4 inline-flex">
          <img
            className="w-8 h-8 relative"
            src={store02_icon}
            alt="Store Icon"
          />
          <div className="flex-col justify-start items-center gap-2 flex">
            <div className="text-zinc-500 text-base font-bold font-['Inter'] uppercase leading-none">
              Address
            </div>
            <div className="text-center text-neutral-900 text-base font-semibold font-['Inter'] leading-relaxed">
              2-sudarshan complex, Near WhiteHouse Flats, <br />
              Gujarat
            </div>
          </div>
        </div>
        {/* Contact Us */}
        <div className="h-full w-full px-8 py-4 bg-gray-100 flex-col justify-center items-center gap-4 inline-flex">
          <img className="w-8 h-8 relative" src={call_icon} alt="call Icon" />
          <div className="flex-col justify-start items-center gap-2 flex">
            <div className=" text-center text-zinc-500 text-base font-bold font-['Inter'] uppercase leading-none">
              Contact Us
            </div>
            <div className="text-center text-neutral-900 text-base font-semibold font-['Inter'] leading-relaxed">
              +91 9316769150
              <br />
            </div>
          </div>
        </div>
        {/* Email */}
        <div className="h-full w-full px-8 py-4 bg-gray-100 flex-col justify-center items-center gap-4 inline-flex">
          <img className="w-8 h-8 relative" src={mail_icon} alt="mail Icon" />
          <div className="flex-col justify-start items-center gap-2 flex">
            <div className="text-center text-zinc-500 text-base font-bold font-['Inter'] uppercase leading-none">
              Email
            </div>
            <div className="text-center text-neutral-900 text-base font-semibold font-['Inter'] leading-relaxed">
              jatin.patel1355@gmail.com
              <br />
            </div>
          </div>
        </div>
      </div>
      {/* bottom part */}
      <div className="w-full h-full justify-between grid grid-cols-1 md:grid-cols-2">
        {/* Contact form */}
        <form className="w-full h-full py-8 px-4 flex-col justify-center items-center align-middle gap-6 inline-flex">
          {/* Full Name */}
          <div className="h-16 w-full flex-col justify-start items-start gap-3 flex">
            <label
              htmlFor="Full_Name"
              className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3"
            >
              Full Name
            </label>
            <input
              type="text"
              name="Full_Name"
              id="Full_Name"
              minLength={3}
              className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
              placeholder="Full Name"
            />
          </div>
          {/* email */}
          <div className="h-16 w-full flex-col justify-start items-start gap-3 flex">
            <label
              htmlFor="Email"
              className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3"
            >
              Email
            </label>
            <input
              type="Email"
              name="Email"
              id="Email"
              minLength={3}
              className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
              placeholder="Email"
            />
          </div>
          {/* Message */}
          <div className="h-16 w-full flex-col justify-start items-start gap-3 flex">
            <label
              htmlFor="Message"
              className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3"
            >
              Message
            </label>
            <textarea
              rows="4"
              name="Message"
              id="Message"
              minLength={3}
              className="px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
              placeholder="Message"
            />
          </div>
          {/* Save button */}
          <button className="w-fit h-10 px-10 py-1.5 bg-neutral-900 rounded-lg justify-center items-center gap-2 inline-flex">
            <h4 className="text-center text-white text-base font-medium font-['Inter'] leading-7">
              Send Message
            </h4>
          </button>
        </form>
        {/* map */}
        <div src="" className="h-80 md:w-full md:h-full  relative ">
          <div className="w-full h-full absolute justify-center items-center inline-flex">
            <img
              className="w-full h-full object-cover"
              src={map}
              alt="Location"
            />
          </div>
          <div className="w-16 h-16 top-[40%] left-[40%] absolute">
            <div className="w-10 h-10 left-[12px] top-[9.65px] absolute">
              <img
                src={Subtract_icon}
                alt="Subtract icon"
                className="w-10 h-11 left-0 top-0 absolute "
              />
              <img
                src={store01_icon}
                alt="store01 icon"
                className="w-5 h-5 left-[10px] top-2 bg-black absolute"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
