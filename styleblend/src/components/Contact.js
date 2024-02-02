import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import store02_icon from "../images/Icons/Contact_icons/store 02.png";
import call_icon from "../images/Icons/Contact_icons/call.png";
import mail_icon from "../images/Icons/Contact_icons/mail.png";

const Contact = () => {
  const [stateEmail, handleSubmitEmail] = useForm("myyrkzwg");

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
      <div className="w-full h-full gap-4 justify-between grid grid-cols-1 md:grid-cols-2">
        {/* Contact form */}
        {stateEmail.succeeded ? (
          <p className="w-full h-80 text-center py-32 font-semibold border">
            Thanks for joining!
          </p>
        ) : (
          <form
            onSubmit={handleSubmitEmail}
            className="w-full h-full py-8 px-4 flex-col justify-center items-center align-middle gap-6 inline-flex"
          >
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
              <ValidationError
                prefix="Full_Name"
                field="Full_Name"
                errors={stateEmail.errors}
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
              <ValidationError
                prefix="Email"
                field="Email"
                errors={stateEmail.errors}
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
              <ValidationError
                prefix="Message"
                field="Message"
                errors={stateEmail.errors}
              />
            </div>
            {/* Save button */}
            <button
              className="w-fit h-10 px-10 py-1.5 bg-neutral-900 rounded-lg justify-center items-center gap-2 inline-flex text-center text-white text-base font-medium font-['Inter'] leading-7"
              type="submit"
              disabled={stateEmail.submitting}
            >
              Send Email
            </button>
          </form>
        )}
        {/* map */}
        <div src="" className="h-80 md:w-full md:h-full  relative ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916.5117726185117!2d72.48684891824244!3d23.241373409675788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c25d9e6595ae7%3A0xfc09ee49c810df0!2sWhite%20House!5e0!3m2!1sen!2sin!4v1705992948038!5m2!1sen!2sin"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
            width={"100%"}
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
