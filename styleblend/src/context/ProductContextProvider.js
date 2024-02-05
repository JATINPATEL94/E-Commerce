import React, { useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import ProductContext from "./ProductContext.js";
import { ApiError, ApiHandler } from "../utils/ApiHandler";
import { showToast } from "../utils/toastHandler.js";

const ProductContextProvider = ({ children }) => {
  // Default Stats
  const [isLogin, setIsLogin] = useState(false);
  const [orderState, setOrderState] = useState("");
  const [userAccount, setUserAccount] = useState({
    //> Account Details <//
    username: "",
    email: "",
    //> avatar <//
    avatar:
      "https://res.cloudinary.com/jatin-patel/image/upload/v1705324326/StyleBlend/icons/tvd7r7vnl0nwnmx0eqg0.jpg",
    //> address <//
    fullName: "",
    mobileNumber: "",
    building: "",
    street: "",
    city: "",
    state: "",
    pinCode: "",
    country: "",
  });
  const [products, setProducts] = useState([
    {
      _id: "",
      name: "Men's Diamond Quilted Bomber Hoody",
      description:
        "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
      productImage:
        "https://res.cloudinary.com/jatin-patel/image/upload/v1705304070/StyleBlend/Products/ekeikwluqytiphhjj5gc.jpg",
      mrp: 800,
      price: 600,
      colors: ["Red", "Black", "Green", "Yellow", "Gray"],
      sizes: ["Small", "Medium", "Large"],
      stock: 10,
      rating: 5,
      category: "Hoody",
      new: true,
    },
  ]);
  const [viewProducts, setViewProducts] = useState({
    _id: "65a100edc080168381941efd",
    name: "Men's Diamond Quilted Bomber Hoody",
    description:
      "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
    productImage:
      "https://res.cloudinary.com/jatin-patel/image/upload/v1705304070/StyleBlend/Products/ekeikwluqytiphhjj5gc.jpg",
    mrp: 800,
    price: 600,
    colors: ["Red", "Black", "Green", "Yellow", "Gray"],
    sizes: ["Small", "Medium", "Large"],
    quantity: 1,
    category: "Hoody",
    rating: 5,
    new: true,
  });
  const [cart, setCart] = useState({
    items: [],
    subTotalMRP: 0,
    subTotal: 0,
  });
  const [like, setLike] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([
    {
      _id: "23e3",
      name: "Men's Diamond Quilted Bomber Hoody",
      description:
        "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
      productImage:
        "https://res.cloudinary.com/jatin-patel/image/upload/v1705304070/StyleBlend/Products/ekeikwluqytiphhjj5gc.jpg",
      mrp: 800,
      price: 600,
      colors: ["Red", "Black", "Green", "Yellow", "Gray"],
      sizes: ["Small", "Medium", "Large"],
      stock: 10,
      rating: 5,
      category: "Hoody",
      new: true,
    },
  ]);
  const [paymentId, setPaymentId] = useState("");
  const [orders, setOrders] = useState([]);
  const LoadingAnimation = () => {
    return (
      <div className="flex items-center justify-center">
        <svg
          className="animate-spin h-5 w-5 mr-3 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 016 12H2c0 3.042 1.135 5.824 3 7.938l1-1.647zm8.91-2.584a7.965 7.965 0 01-1.838 2.21A6.003 6.003 0 006 20h2c2.125 0 4.059-.88 5.447-2.295l-1.637-1.638z"></path>
        </svg>
        Loading...
      </div>
    );
  };
  // </> user </> //

  const refreshToken = async (data) => {
    try {
      const response = await ApiHandler(
        "/users/refreshtoken",
        "POST",
        data,
        true
      );

      if (response) {
        const { newAccessToken, refreshToken } = response.data;
        document.cookie = `accessToken=${newAccessToken}; path=/; secure=false;`;
        document.cookie = `refreshToken=${refreshToken}; path=/; secure=false;`;
        return newAccessToken;
      } else {
        throw new ApiError(
          response.status,
          "Token refresh failed. Please Login"
        );
      }
    } catch (error) {
      console.error("Error refreshing access token:", error.message);
      throw error;
    }
  };

  const userStatus = async () => {
    try {
      const accessToken = Cookies.get("accessToken");
      if (accessToken) {
        // Checking accessToken expiration Time
        const decodedToken = jwtDecode(accessToken);
        const expirationTime = decodedToken?.exp ? decodedToken.exp * 1000 : 0;

        // If accessToken expired, generate new Token
        if (expirationTime && new Date(expirationTime) < new Date()) {
          const newAccessToken = await refreshToken(accessToken);

          if (newAccessToken) {
            Cookies.set("accessToken", newAccessToken);
            showToast("Welcome Back");
            setIsLogin(true);
            await getFullUserDetails();
            await getAllCartProducts();
            await getAllLikeProducts();
            await getAllOrder();
          } else {
            showToast("Token refresh failed. Please Login");
          }
        } else {
          // If accessToken not expired
          setIsLogin(true);
          await getFullUserDetails();
          await getAllCartProducts();
          await getAllLikeProducts();
          await getAllOrder();
        }
      } else {
        setIsLogin(false);
      }
    } catch (error) {
      showToast("Error decoding or refreshing token. Please Login");
      setIsLogin(false);
    }
  };

  const loginUser = async (data) => {
    try {
      const response = await ApiHandler("/users/login", "POST", data, false);
      const { accessToken, refreshToken } = response.data;
      document.cookie = `accessToken=${accessToken}; path=/; secure=false;`;
      document.cookie = `refreshToken=${refreshToken}; path=/; secure=false;`;
      await getFullUserDetails();
      await getAllCartProducts();
      await getAllLikeProducts();
      showToast(response.message);
    } catch (error) {
      throw new ApiError(500, error.message);
    }
  }; // Non-Auth

  const signUpUser = async (data) => {
    try {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      const response = await ApiHandler(
        "/users/register",
        "POST",
        formData,
        false
      );
      const { accessToken, refreshToken } = response.data;
      document.cookie = `accessToken=${accessToken}; path=/; secure=false;`;
      document.cookie = `refreshToken=${refreshToken}; path=/; secure=false;`;
      showToast(response.message);
    } catch (error) {
      throw new ApiError(500, error.message);
    }
  }; // Non-Auth

  const updateUserAvatar = async (data) => {
    try {
      const formData = new FormData();
      formData.append("avatar", data);
      const response = await ApiHandler(
        "/users/updateUserAvatar",
        "PATCH",
        formData,
        true
      );
      if (response) {
        setUserAccount({ avatar: response.data.avatar });
        showToast(response.message);
      }
    } catch (error) {
      throw new ApiError(400, error.message);
    }
  };

  const updateAccountDetails = async (data) => {
    try {
      const response = await ApiHandler(
        "/users/updateAccountDetails",
        "PATCH",
        data,
        true
      );
      if (response) {
        showToast(response.message);
      }
    } catch (error) {
      throw new ApiError(error.statusCode, error.message);
    }
  };

  const changePassword = async (password) => {
    try {
      const response = await ApiHandler(
        "/users/changePassword",
        "POST",
        password,
        true
      );
      showToast(response.message);
    } catch (error) {
      throw new ApiError(error.statusCode, error.message);
    }
  };

  const logoutUser = async () => {
    try {
      const response = await ApiHandler("/users/logout", "POST", null, true);
      if (response) {
        showToast(response.message);
      }
    } catch (error) {
      throw new ApiError(400, error.message);
    }
  };

  const getFullUserDetails = async () => {
    try {
      const response = await ApiHandler(
        "/users/getFullUserDetails",
        "GET",
        null,
        true
      );
      const {
        avatar,
        building,
        city,
        country,
        email,
        fullName,
        mobileNumber,
        pinCode,
        state,
        street,
        username,
      } = response.data;
      setUserAccount({
        avatar,
        building,
        city,
        country,
        email,
        fullName,
        mobileNumber,
        pinCode,
        state,
        street,
        username,
      });
    } catch (error) {
      showToast(error.message);
    }
  };

  const updateUserAddress = async (data) => {
    try {
      const response = await ApiHandler(
        "/users/updateUserAddress",
        "PATCH",
        data,
        true
      );
      if (response) {
        showToast(response.message);
      }
    } catch (error) {
      throw new ApiError(error.statusCode, error.message);
    }
  };

  // </> Products </> //

  const fetchAllProduct = async () => {
    try {
      const apiResponse = await ApiHandler(
        "/product/getAllProducts",
        "GET",
        null,
        false
      );
      const fetchedProducts = apiResponse.data;
      if (fetchedProducts.length < 1) {
        throw new ApiError(404, "Products Not Found");
      }
      const updatedProducts = fetchedProducts.map((productData) => {
        const updatedAtDate = new Date(productData.updatedAt);
        const isProductNew =
          new Date() - updatedAtDate < 7 * 24 * 60 * 60 * 1000;
        return {
          _id: productData._id,
          name: productData.name,
          description: productData.description,
          productImage: productData.productImage,
          mrp: productData.mrp,
          price: productData.price,
          colors: productData.colors,
          sizes: productData.sizes,
          stock: productData.stock,
          rating: productData.rating,
          category: productData.category,
          new: isProductNew,
        };
      });

      setProducts(updatedProducts);
    } catch (error) {
      showToast(error.message);
    }
  }; // Non-Auth

  const serchProducts = async () => {
    try {
      const response = await ApiHandler(
        `/product/serchProducts?query=${searchQuery}`,
        "GET",
        null,
        false
      );
      const updatedProducts = response.data.map((productData) => {
        const updatedAtDate = new Date(productData.updatedAt);
        const isProductNew =
          new Date() - updatedAtDate < 7 * 24 * 60 * 60 * 1000;
        return {
          _id: productData._id,
          name: productData.name,
          description: productData.description,
          productImage: productData.productImage,
          mrp: productData.mrp,
          price: productData.price,
          colors: productData.colors,
          sizes: productData.sizes,
          stock: productData.stock,
          rating: productData.rating,
          category: productData.category,
          new: isProductNew,
        };
      });

      setSearchResults(updatedProducts);
    } catch (error) {
      showToast(error.message);
    }
  };

  const addToCartProducts = async (data) => {
    try {
      const response = await ApiHandler(
        "/product/addToCartProducts",
        "POST",
        data,
        true
      );
      if (response) {
        showToast(response.message);
        await getAllCartProducts();
      }
    } catch (error) {
      showToast(error.message);
    }
  };

  const getAllCartProducts = async () => {
    try {
      const response = await ApiHandler(
        "/product/getAllCartProducts",
        "GET",
        null,
        true
      );
      if (response) {
        const transformedItems = response.data[0].items.map((item) => ({
          id: item.productId._id,
          name: item.productId.name,
          productImage: item.productId.productImage,
          colors: item.colors,
          sizes: item.sizes,
          quantity: item.quantity,
          totalMRP: item.totalMRP,
          total: item.total,
        }));
        setCart({
          items: transformedItems,
          subTotalMRP: response.data[0].subTotalMRP,
          subTotal: response.data[0].subTotal,
        });
      }
    } catch (error) {
      showToast(error.message);
    }
  };

  const updateCartQuantity = async (data) => {
    try {
      const response = await ApiHandler(
        "/product/updateCartQuantity",
        "PATCH",
        data,
        true
      );
      if (response) {
        showToast(response.message);

        const { items, subTotalMRP, subTotal } = response.data;

        setCart((prevCart) => {
          const updatedItems = prevCart.items.map((product) => {
            const updatedProduct = items.find(
              (item) =>
                item.productId === product.id &&
                item.colors === product.colors &&
                item.sizes === product.sizes
            );
            return updatedProduct
              ? {
                  ...product,
                  quantity: updatedProduct.quantity,
                  totalMRP: updatedProduct.totalMRP,
                  total: updatedProduct.total,
                }
              : product;
          });

          // Update the state with the recalculated values
          return {
            ...prevCart,
            items: [...updatedItems],
            subTotalMRP,
            subTotal,
          };
        });
      }
    } catch (error) {
      showToast(error.message);
    }
  };

  const removeCartProduct = async (data) => {
    try {
      const response = await ApiHandler(
        "/product/removeCartProduct",
        "DELETE",
        data,
        true
      );
      if (response) {
        const { subTotalMRP, subTotal } = response.data;
        setCart((prevCart) => {
          const updatedItems = prevCart.items.filter(
            (product) =>
              product.id !== data.productId ||
              product.colors !== data.colors ||
              product.sizes !== data.sizes
          );
          return {
            ...prevCart,
            items: [...updatedItems],
            subTotalMRP,
            subTotal,
          };
        });
        showToast(response.message);
      }
    } catch (error) {
      showToast(error.message);
    }
  };

  const addToLikeProducts = async (data) => {
    try {
      const response = await ApiHandler(
        "/product/addToLikeProducts",
        "POST",
        data,
        true
      );
      if (response) {
        await getAllLikeProducts();
      }
    } catch (error) {
      showToast(error.message);
    }
  };

  const getAllLikeProducts = async () => {
    try {
      const response = await ApiHandler(
        "/product/getAllLikeProducts",
        "GET",
        null,
        true
      );
      const likedProductIds = response.data.map((product) => {
        const { _id, name, productImage, mrp, price } = product.productId;
        return {
          productId: _id,
          colors: product.colors,
          sizes: product.sizes,
          name,
          productImage,
          mrp,
          price,
        };
      });
      setLike(likedProductIds);
    } catch (error) {
      showToast(error.message);
    }
  };

  // </> Payment </> //
  const razorpayPayment = async (data) => {
    try {
      // Make payment API call
      const response = await ApiHandler(
        "/payment/makepayment",
        "POST",
        data,
        true
      );

      if (response) {
        // Get Razorpay key
        const getKey = await ApiHandler("/payment/getkey", "GET", null, true);
        const { id } = response.data;

        // Open Razorpay payment modal
        const options = {
          key: getKey.data.key,
          amount: data.amount,
          currency: "INR",
          name: "StyleBlend.",
          description: "Clothing And Fashion Wear Store",
          image:
            "https://res.cloudinary.com/jatin-patel/image/upload/v1706553415/StyleBlend/icons/l9eatystyklucrbalo6e.png",
          order_id: id,
          callback_url:
            "http://localhost:8000/api/v1/payment/paymentverification",
          prefill: {
            // user details
            name: userAccount.fullName,
            email: userAccount.email,
            contact: userAccount.mobileNumber,
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#141718",
          },
          handler: function (response) {
            const {
              razorpay_payment_id,
              razorpay_order_id,
              razorpay_signature,
            } = response;
            data = {
              razorpay_payment_id,
              razorpay_order_id,
              razorpay_signature,
              paymentMethod: "Debit Card",
              transactionId: razorpay_payment_id,
            };
            addNewOrder(data);
          },
          modal: {
            ondismiss: function () {
              showToast("Payment canceled");
            },
          },
        };

        const razor = new window.Razorpay(options);
        razor.open();
      }
    } catch (error) {
      showToast(error.message);
    }
  };

  // </> Orders </> //

  const addNewOrder = async (data) => {
    try {
      const response = await ApiHandler(
        "/payment/paymentverification",
        "POST",
        data,
        true
      );
      if (response) {
        setPaymentId(response.data);
        await ApiHandler("/order/addNewOrder", "POST", data, true);
        setCart({ items: [], subTotalMRP: 0, subTotal: 0 });
      }
    } catch (error) {
      showToast(error.message);
    }
  };

  const getAllOrder = async () => {
    try {
      const response = await ApiHandler(
        "/order/getAllOrder",
        "GET",
        null,
        true
      );
      const extractedOrders = response.data[0].order.map((order) => ({
        orderId: order._id,
        subTotal: order.subTotal,
        status: order.status,
        date: order.orderdDate,
        transactionIds: order.payment.transactionIds,
      }));
      setOrders(extractedOrders);
    } catch (error) {
      showToast(error.message);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        LoadingAnimation,
        // </> user </> //
        isLogin,
        setIsLogin,
        orderState,
        setOrderState,
        userAccount,
        setUserAccount,
        userStatus, //Api
        loginUser, //Api
        signUpUser, //Api
        updateUserAvatar, //Api
        updateAccountDetails, //Api
        changePassword, //Api
        logoutUser, //Api
        getFullUserDetails, //Api
        updateUserAddress, //Api
        // </> Product </> //
        products,
        setProducts,
        viewProducts,
        setViewProducts,
        cart,
        setCart,
        fetchAllProduct, //Api
        serchProducts, //Api
        addToCartProducts, //Api
        updateCartQuantity, //Api
        getAllCartProducts, //Api
        removeCartProduct, //Api
        like,
        setLike,
        addToLikeProducts, //Api
        getAllLikeProducts, //Api
        searchQuery,
        setSearchQuery,
        searchResults,
        setSearchResults,
        razorpayPayment, //Api
        paymentId,
        getAllOrder, //Api
        orders,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
