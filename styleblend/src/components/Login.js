import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductContext from "../context/ProductContext";
import { showToast } from "../utils/toastHandler.js";

const Login = () => {
  const context = useContext(ProductContext);
  const { setIsLogin, loginUser } = context;
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(data);
      navigate("/");
      setIsLogin(true);
    } catch (error) {
      showToast(error.message);
      setIsLogin(false);
    }
  };

  return (
    <div className="w-screen px-8 lg:px-40 py-12 bg-white">
      <h3 className="text-center font-semibold text-neutral-900 text-[40px] font-['Poppins'] leading-[44px] ">
        Login
      </h3>
      <p className="text-center py-4">
        Do Not have an account? <Link to="/signup">Sign up</Link>
      </p>
      <form
        className="p-8  align-middle justify-center flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            className="w-full outline-none text-zinc-700 text-lg font-medium font-['Inter'] leading-relaxed border-b-2"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            autoComplete="true"
            className="w-full outline-none text-zinc-700 text-lg font-medium font-['Inter'] leading-relaxed border-b-2"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="w-full align-middle flex justify-center pt-4">
          <button
            type="submit"
            className="w-1/2 bg-black text-zinc-50 py-2 px-8 rounded-lg"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
