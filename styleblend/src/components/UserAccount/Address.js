import React from "react";

const Address = () => {
  return (
    <form className="w-full px-4 lg:px-16 flex-col justify-start items-start gap-10 inline-flex">
      {/* New Address */}
      <div className="w-full flex-col justify-start items-start gap-6 flex">
        <h3 className="text-black text-xl font-semibold font-['Inter'] leading-loose">
          Add Address
        </h3>
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
        {/* Mobile number */}
        <div className="h-16 w-full flex-col justify-start items-start gap-3 flex">
          <label
            htmlFor="Mobile_Number"
            className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3"
          >
            Mobile number
          </label>
          <input
            type="number"
            name="Mobile_Number"
            id="Mobile_Number"
            minLength={10}
            className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
            placeholder="Mobile Number"
          />
        </div>
        {/* Email */}
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
        {/* House No. */}
        <div className="h-16 w-full flex-col justify-start items-start gap-3 flex">
          <label
            htmlFor="House_No"
            className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3"
          >
            Flat, House no., Building, Company, Apartment
          </label>
          <input
            type="text"
            name="House_No"
            id="House_No"
            minLength={1}
            autoComplete="true"
            className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
            placeholder="House No."
          />
        </div>
        {/* Area */}
        <div className="h-16 w-full flex-col justify-start items-start gap-3 flex">
          <label
            htmlFor="Area"
            className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3"
          >
            Area, Street, Sector, Village
          </label>
          <input
            type="text"
            name="Area"
            id="Area"
            minLength={3}
            autoComplete="true"
            className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
            placeholder="Area"
          />
        </div>
        {/* City */}
        <div className="h-16 w-full flex-col justify-start items-start gap-3 flex">
          <label
            htmlFor="City"
            className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3"
          >
            City
          </label>
          <input
            type="text"
            name="City"
            id="City"
            minLength={3}
            autoComplete="true"
            className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
            placeholder="City"
          />
        </div>
        {/* State */}
        <div className="h-16 w-full flex-col justify-start items-start gap-3 flex">
          <label
            htmlFor="State"
            className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3"
          >
            State
          </label>
          <input
            type="text"
            name="State"
            id="State"
            minLength={3}
            autoComplete="true"
            className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
            placeholder="State"
          />
        </div>
        {/* Pin Coad */}
        <div className="h-16 w-full flex-col justify-start items-start gap-3 flex">
          <label
            htmlFor="Pin_Coad"
            className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3"
          >
            Pin Coad
          </label>
          <input
            type="number"
            name="Pin_Coad"
            id="Pin_Coad"
            minLength={3}
            autoComplete="true"
            className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
            placeholder="PIN Coad"
          />
        </div>
        {/* save */}
        <div className="px-10 py-3 bg-neutral-900 rounded-lg justify-center items-center gap-2 inline-flex">
          <button className="text-center text-white text-base font-medium font-['Inter'] leading-7">
            Save changes
          </button>
        </div>
      </div>
    </form>
  );
};

export default Address;
