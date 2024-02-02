import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToast = (message, options = {}) => {
  const defaultOptions = {
    position: "top-center",
    theme: "light",
    limit: 2,
    autoClose: 1000,
    hideProgressBar: true,
    newestOnTop: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };
  toast(message, { ...defaultOptions, ...options });
};
