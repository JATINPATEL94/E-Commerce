import React from "react";
import fast_delivery_icon from "../images/Icons/Values_icons/fast delivery.svg";
import money_icon from "../images/Icons/Values_icons/money.svg";
import lock_icon from "../images/Icons/Values_icons/lock 01.svg";
import call_icon from "../images/Icons/Values_icons/call.svg";

const Values = () => {
  return (
    <div className=" h-full px-8 lg:px-32 py-8 lg:py-12 gap-6 justify-between items-center align-middle lg:flex">
      <div className="w-full h-full flex align-middle justify-center gap-6">
        <div className="bg-gray-100 w-1/2 px-4 lg:px-8 py-8 lg:py-12 text-target">
          <div className="mb-4">
            <img src={fast_delivery_icon} alt="Free Shipping" />
          </div>
          <div>
            <h5 className="text-neutral-900 text-sm lg:text-xl font-semibold lg:font-medium font-['Inter'] lg:font-['Poppins'] leading-snug lg:leading-7 lg:mr-10">
              Free Shipping
            </h5>
            <h6 className="w-[110px] text-zinc-500 text-sm font-normal font-['Inter'] lg:font-['Poppins'] leading-snug lg:leading-normal">
              Order above 1200
            </h6>
          </div>
        </div>
        <div className="bg-gray-100 w-1/2 px-4 lg:px-8 py-8 lg:py-12 text-target">
          <div className="mb-4">
            <img src={money_icon} alt="Money-back" />
          </div>
          <div>
            <h5 className="text-neutral-900 text-sm lg:text-xl font-semibold lg:font-medium font-['Inter'] lg:font-['Poppins'] leading-snug lg:leading-7">
              Money-back
            </h5>
            <h6 className="w-[120px] text-zinc-500 text-sm font-normal font-['Inter'] lg:font-['Poppins'] leading-snug lg:leading-normal">
              30 days guarantee
            </h6>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex align-middle justify-center gap-6 mt-6 lg:mt-0">
        <div className="bg-gray-100 w-1/2 px-4 lg:px-8 py-8 lg:py-12 text-target">
          <div className="mb-4">
            <img src={lock_icon} alt="Secure Payments" />
          </div>
          <div>
            <h5 className="text-neutral-900 text-sm lg:text-xl font-semibold lg:font-medium font-['Inter'] lg:font-['Poppins'] leading-snug lg:leading-7">
              Secure Payments
            </h5>
            <h6 className="w-[120px] text-zinc-500 text-sm font-normal font-['Inter'] lg:font-['Poppins'] leading-snug lg:leading-normal">
              Secured by Stripe
            </h6>
          </div>
        </div>
        <div className="bg-gray-100 w-1/2 px-4 lg:px-8 py-8 lg:py-12 text-target">
          <div className="mb-4">
            <img src={call_icon} alt="24/7 Support" />
          </div>
          <div>
            <h5 className="text-neutral-900 text-sm lg:text-xl font-semibold lg:font-medium font-['Inter'] lg:font-['Poppins'] leading-snug lg:leading-7">
              24/7 Support
            </h5>
            <h6 className="w-[120px] text-zinc-500 text-sm font-normal font-['Inter'] lg:font-['Poppins'] leading-snug lg:leading-normal">
              Phone and Email support
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
