import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductContext from "../context/ProductContext";
import { showToast } from "../utils/toastHandler";

const Signup = () => {
  const context = useContext(ProductContext);
  const { LoadingAnimation, setIsLogin, signUpUser } = context;
  const navigate = useNavigate();

  // Default States
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    avatar: null,
  });
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // handlers
  const handleChange = ({ target: { name, value } }) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = ({ target: { name, files } }) => {
    setData((prevData) => ({
      ...prevData,
      [name]: files.length > 0 ? files[0] : null,
    }));
    setAvatarPreview(files.length > 0 ? URL.createObjectURL(files[0]) : null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signUpUser(data);
      navigate("/");
      setIsLogin(true);
    } catch (error) {
      console.error("Error during signup:", error);
      showToast(error.message);
      setIsLogin(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen px-8 lg:px-40 py-12 bg-white">
      <h3 className="text-center font-semibold text-neutral-900 text-[40px] font-['Poppins'] leading-[44px] ">
        Sign Up
      </h3>
      <p className="text-center py-4">
        Already have an account? <Link to="/login">Login</Link>
      </p>
      <form
        className="p-8  align-middle justify-center flex flex-col gap-4"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div>
          <label htmlFor="username" className="text-zinc-400">
            Name
          </label>
          <input
            className="w-full outline-none text-zinc-700 text-lg font-medium font-['Inter'] leading-relaxed border-b-2"
            type="text"
            id="username"
            name="username"
            value={data.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            className="w-full outline-none text-zinc-700 text-lg font-medium font-['Inter'] leading-relaxed border-b-2"
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            className="w-full outline-none text-zinc-700 text-lg font-medium font-['Inter'] leading-relaxed border-b-2"
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            autoComplete="true"
            required
          />
        </div>
        <div className="flex items-center">
          <div className="w-full h-fit relative">
            <label htmlFor="avatar">Avatar:</label>
            <div>
              <input
                className="w-full p-1 file:bg-white file:w-full file:h-32  outline-none border-b-2 file:text-transparent"
                type="file"
                id="avatar"
                name="avatar"
                accept="image/*"
                onChange={handleFileChange}
                required
              />
            </div>
            <div className="absolute top-0 right-0  w-full h-full flex items-center pl-3 pointer-events-none">
              <span className="w-full text-center  text-zinc-700 text-lg font-medium font-['Inter'] leading-relaxed">
                Choose File Or Drop File Hear
              </span>
            </div>
          </div>
          <div className="min-w-[80px] h-20 rounded-full overflow-hidden border-8">
            {avatarPreview && (
              <img
                src={avatarPreview}
                alt="Avatar Preview"
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>
        <div className="w-full align-middle flex justify-center pt-4">
          <button
            className="w-1/2 bg-black text-zinc-50 py-2 px-8 rounded-lg"
            type="submit"
          >
            {loading ? <LoadingAnimation /> : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
