import React, { useContext, useState } from "react";
import ProductContext from "../../context/ProductContext";
import { showToast } from "../../utils/toastHandler";

const Address = () => {
  const context = useContext(ProductContext);
  const { LoadingAnimation, userAccount, setUserAccount, updateUserAddress } =
    context;

  const [loading, setLoading] = useState(false);
  // Handlers
  const handleChange = ({ target: { name, value } }) => {
    setUserAccount((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await updateUserAddress(userAccount);
    } catch (error) {
      showToast(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full px-4 lg:px-16 flex-col justify-start items-start gap-10 inline-flex"
    >
      {/* New Address */}
      <div className="w-full flex-col justify-start items-start gap-6 flex">
        <h3 className="text-black text-xl font-semibold font-['Inter'] leading-loose">
          Add Address
        </h3>
        {/* Full Name */}
        <div className="h-16 w-full flex-col justify-start items-start gap-3 flex">
          <label
            htmlFor="fullName"
            className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3"
          >
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            minLength={3}
            className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
            placeholder="Full Name"
            onChange={handleChange}
            value={userAccount.fullName}
          />
        </div>
        {/* Mobile number */}
        <div className="h-16 w-full flex-col justify-start items-start gap-3 flex">
          <label
            htmlFor="mobileNumber"
            className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3"
          >
            Mobile number
          </label>
          <input
            type="number"
            name="mobileNumber"
            id="mobileNumber"
            minLength={10}
            className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
            placeholder="Mobile Number"
            onChange={handleChange}
            value={userAccount.mobileNumber}
          />
        </div>
        {/* Email */}
        <div className="h-16 w-full flex-col justify-start items-start gap-3 flex">
          <label
            htmlFor="email"
            className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3"
          >
            Email
          </label>
          <input
            type="Email"
            name="email"
            id="email"
            minLength={3}
            className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
            placeholder="Email"
            onChange={handleChange}
            value={userAccount.email}
          />
        </div>
        {/* building  */}
        <div className="h-16 w-full flex-col justify-start items-start gap-3 flex">
          <label
            htmlFor="building"
            className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3"
          >
            Flat, House no., Building, Company, Apartment
          </label>
          <input
            type="text"
            name="building"
            id="building"
            minLength={1}
            autoComplete="true"
            className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
            placeholder="House No."
            onChange={handleChange}
            value={userAccount.building}
          />
        </div>
        {/* street */}
        <div className="h-16 w-full flex-col justify-start items-start gap-3 flex">
          <label
            htmlFor="street"
            className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3"
          >
            Area, Street, Sector, Village
          </label>
          <input
            type="text"
            name="street"
            id="street"
            minLength={3}
            autoComplete="true"
            className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
            placeholder="Area"
            onChange={handleChange}
            value={userAccount.street}
          />
        </div>
        {/* City */}
        <div className="h-16 w-full flex-col justify-start items-start gap-3 flex">
          <label
            htmlFor="city"
            className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3"
          >
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            minLength={3}
            autoComplete="true"
            className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
            placeholder="City"
            onChange={handleChange}
            value={userAccount.city}
          />
        </div>
        {/* State */}
        <div className="h-16 w-full flex-col justify-start items-start gap-3 flex">
          <label
            htmlFor="state"
            className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3"
          >
            State
          </label>
          <input
            type="text"
            name="state"
            id="state"
            minLength={3}
            autoComplete="true"
            className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
            placeholder="State"
            onChange={handleChange}
            value={userAccount.state}
          />
        </div>
        {/* Pin Coad */}
        <div className="h-16 w-full flex-col justify-start items-start gap-3 flex">
          <label
            htmlFor="pinCode"
            className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3"
          >
            Pin Coad
          </label>
          <input
            type="number"
            name="pinCode"
            id="pinCode"
            minLength={3}
            autoComplete="true"
            className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
            placeholder="PIN Coad"
            onChange={handleChange}
            value={userAccount.pinCode}
          />
        </div>
        {/* save */}
        <div className="w-full align-middle flex justify-center pt-4">
          <button
            className="w-full bg-black text-zinc-50 py-2 px-8 rounded-lg"
            type="submit"
          >
            {loading ? <LoadingAnimation /> : "Save Changes"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Address;
