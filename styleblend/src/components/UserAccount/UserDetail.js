import React, { useContext, useState } from "react";
import ProductContext from "../../context/ProductContext";
import { showToast } from "../../utils/toastHandler.js";

const UserDetail = () => {
  const context = useContext(ProductContext);
  const {
    LoadingAnimation,
    userAccount,
    setUserAccount,
    updateAccountDetails,
    changePassword,
  } = context;

  // default State
  const [password, setPassword] = useState({
    //> Chanage password <//
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  // Handlers
  const handleChange = ({ target: { name, value } }) => {
    setUserAccount((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangePassword = ({ target: { name, value } }) => {
    setPassword((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitAccountDetails = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await updateAccountDetails(userAccount);
    } catch (error) {
      showToast(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitChangePassword = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await changePassword(password);
      setPassword({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      showToast(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-4 lg:px-16 flex-col justify-start items-start gap-10 inline-flex">
      <form onSubmit={handleSubmitAccountDetails} className="w-full">
        {/* Account Details */}
        <div className="w-full flex-col justify-start items-start gap-6 flex">
          <h3 className="text-black text-xl font-semibold font-['Inter'] leading-loose">
            Account Details
          </h3>
          {/* First Name */}
          <div className="h-16 w-full flex-col justify-start items-start gap-3 flex">
            <label
              htmlFor="username"
              className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3"
            >
              First Name
            </label>
            <input
              type="text"
              name="username"
              id="username"
              minLength={3}
              className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
              placeholder="Name"
              value={userAccount.username}
              onChange={handleChange}
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
              type="email"
              name="email"
              id="email"
              minLength={3}
              className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
              placeholder="Email"
              value={userAccount.email}
              onChange={handleChange}
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
      <form onSubmit={handleSubmitChangePassword} className="w-full">
        {/* Password */}
        <div className="w-full flex-col justify-start items-start gap-6 flex">
          <h3 className="text-black text-xl font-semibold font-['Inter'] leading-loose">
            Update Password
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
              name="oldPassword"
              id="oldPassword"
              minLength={3}
              autoComplete="true"
              className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
              placeholder="Old Password"
              onChange={handleChangePassword}
              value={password.oldPassword}
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
              name="newPassword"
              id="newPassword"
              minLength={3}
              autoComplete="true"
              className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
              placeholder="New Password"
              onChange={handleChangePassword}
              value={password.newPassword}
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
              name="confirmPassword"
              id="confirmPassword"
              minLength={3}
              autoComplete="true"
              className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
              placeholder="Repeat New Password"
              onChange={handleChangePassword}
              value={password.confirmPassword}
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
    </div>
  );
};

export default UserDetail;
