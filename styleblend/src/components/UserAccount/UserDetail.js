import React from "react";

const UserDetail = () => {
  return (
    <form className="w-full px-4 lg:px-16 flex-col justify-start items-start gap-10 inline-flex">
      {/* Account Details */}
      <div className="w-full flex-col justify-start items-start gap-6 flex">
        <h3 className="text-black text-xl font-semibold font-['Inter'] leading-loose">
          Account Details
        </h3>
        {/* First Name */}
        <div className="h-16 w-full flex-col justify-start items-start gap-3 flex">
          <label
            htmlFor="First_Name"
            className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3"
          >
            First Name
          </label>
          <input
            type="text"
            name="First_Name"
            id="First_Name"
            minLength={3}
            className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
            placeholder="First Name"
          />
        </div>
        {/* Last Name */}
        <div className="h-16 w-full flex-col justify-start items-start gap-3 flex">
          <label
            htmlFor="Last_Name"
            className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3"
          >
            Last Name
          </label>
          <input
            type="text"
            name="Last_Name"
            id="Last_Name"
            minLength={3}
            className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
            placeholder="Last Name"
          />
        </div>
        {/* Display Name */}
        <div className="h-16 w-full flex-col justify-start items-start gap-3 flex">
          <label
            htmlFor="Display_Name"
            className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3"
          >
            Display Name
          </label>
          <input
            type="text"
            name="Display_Name"
            id="Display_Name"
            minLength={3}
            className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
            placeholder="Display Name"
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
      </div>
      {/* Password */}
      <div className="w-full flex-col justify-start items-start gap-6 flex">
        <h3 className="text-black text-xl font-semibold font-['Inter'] leading-loose">
          Password
        </h3>
        {/* old password */}
        <div className="h-16 w-full flex-col justify-start items-start gap-3 flex">
          <label
            htmlFor="old_password"
            className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3"
          >
            Old password
          </label>
          <input
            type="password"
            name="old_password"
            id="old_password"
            minLength={3}
            autoComplete="true"
            className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
            placeholder="Old Password"
          />
        </div>
        {/* New password */}
        <div className="h-16 w-full flex-col justify-start items-start gap-3 flex">
          <label
            htmlFor="New_password"
            className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3"
          >
            New password
          </label>
          <input
            type="password"
            name="New_password"
            id="New_password"
            minLength={3}
            autoComplete="true"
            className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
            placeholder="New Password"
          />
        </div>
        {/* REPEAT NEW PASSWORD */}
        <div className="h-16 w-full flex-col justify-start items-start gap-3 flex">
          <label
            htmlFor="Repeat_New_password"
            className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3"
          >
            Repeat New password
          </label>
          <input
            type="password"
            name="Repeat_New_password"
            id="Repeat_New_password"
            minLength={3}
            autoComplete="true"
            className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
            placeholder="Repeat New Password"
          />
        </div>
        {/* save */}
        <div className="px-10 py-3 bg-neutral-900 rounded-lg justify-center items-center gap-2 inline-flex">
          <div className="text-center text-white text-base font-medium font-['Inter'] leading-7">
            Save changes
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserDetail;
