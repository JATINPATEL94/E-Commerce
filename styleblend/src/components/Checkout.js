import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import close_icon from "../images/Icons/close.svg";
import Add_icon from "../images/Icons/Add.png";
import Minus_icon from "../images/Icons/Minus.png";
import ProductContext from "../context/ProductContext";

const Checkout = () => {
  const context = useContext(ProductContext);
  const {
    cart,
    userAccount,
    orderState,
    setOrderState,
    updateCartQuantity,
    removeCartProduct,
    razorpayPayment,
    paymentId,
  } = context;

  // Default State
  const [shippingCharges, setShippingCharges] = useState(0);
  const navigate = useNavigate();

  // Handler
  const handleUpdateQuantity = async (data) => {
    await updateCartQuantity(data);
  };

  const handleRemoveCartProduct = async (data) => {
    await removeCartProduct(data);
  };

  return (
    <div className="w-screen min-h-screen px-8 lg:px-40">
      {/* Heading & Menus */}
      <div className="w-full py-20 text-center">
        <h2 className="text-black text-[54px] font-medium font-['Poppins'] leading-[58px]">
          {orderState}
        </h2>
        <div className="pt-10 flex flex-wrap align-middle items-center justify-center gap-8">
          {/* Cart */}
          <div
            className={`w-52 flex text-center items-center gap-6 border-b-2 pb-6 ${
              orderState === "Cart" || "Check Out" ? "border-black" : ""
            }`}
          >
            <div
              className={`w-10 h-10 text-gray-50  flex justify-center text-center items-center rounded-full ${
                orderState === "Cart"
                  ? "bg-neutral-900"
                  : orderState === "Check Out" || "Payment"
                  ? "bg-green-400"
                  : "bg-neutral-400"
              }`}
            >
              1
            </div>
            <h4
              className={`text-base font-semibold font-['Inter'] leading-relaxed ${
                orderState === "Cart" || "Check Out"
                  ? "text-zinc-800"
                  : "text-zinc-300"
              } `}
            >
              Shopping Cart
            </h4>
          </div>
          {/* Check Out */}
          <div
            className={`w-52 flex text-center items-center gap-6 border-b-2 pb-6 ${
              orderState === "Check Out" || "payment" ? "border-black" : ""
            }`}
          >
            <div
              className={`w-10 h-10 text-gray-50  flex justify-center text-center items-center rounded-full ${
                orderState === "Check Out"
                  ? "bg-neutral-900"
                  : orderState === "Payment"
                  ? "bg-green-400"
                  : "bg-neutral-400"
              }`}
            >
              2
            </div>
            <h4
              className={`text-base font-semibold font-['Inter'] leading-relaxed ${
                orderState === "Check Out" || "Payment"
                  ? "text-zinc-800"
                  : "text-zinc-300"
              } `}
            >
              Checkout Details
            </h4>
          </div>
          {/* Payment */}
          <div
            className={`w-52 flex text-center items-center gap-6 border-b-2 pb-6 ${
              orderState === "Payment" ? "border-black" : ""
            }`}
          >
            <div
              className={`w-10 h-10 text-gray-50  flex justify-center text-center items-center rounded-full ${
                paymentId
                  ? "bg-green-400"
                  : orderState === "Payment"
                  ? "bg-neutral-900"
                  : "bg-neutral-400"
              } `}
            >
              3
            </div>
            <h4
              className={`text-base font-semibold font-['Inter'] leading-relaxed ${
                orderState === "Payment" ? "text-zinc-800" : "text-zinc-300"
              } `}
            >
              Payment
            </h4>
          </div>
        </div>
      </div>
      {orderState === "Cart" ? (
        // Cart
        <div className="flex-col justify-start items-start gap-4 flex">
          <table className="w-full h-full bg-neutral-100 border-2 border-black">
            <thead>
              <tr className="border-b-2 text-left border-black">
                <td className="py-2 pl-6 border-2 border-black font-medium">
                  Product
                </td>
                <td className="py-2 px-4 text-center border-2 border-black font-medium">
                  Quantity
                </td>
                <td className="py-2 px-4  text-center border-2 border-black font-medium">
                  Price
                </td>
                <td className="py-2 px-4 text-center border-2 border-black font-medium">
                  Total
                </td>
              </tr>
            </thead>
            <tbody className="border-2 border-black">
              {cart.items.length === 0 ? (
                <tr>
                  <td
                    className="text-center py-28 border border-black"
                    colSpan={4}
                  >
                    No Products In The Cart.
                  </td>
                </tr>
              ) : (
                cart.items.map((product) => {
                  return (
                    <tr
                      key={`${product.id}__ ${product.sizes}__${product.colors}`}
                    >
                      <td className="flex flex-col md:flex-row  h-fit items-center md:h-24 gap-4 overflow-hidden border-b border-black">
                        <img
                          className="w-20 h-24 object-cover"
                          src={product.productImage}
                          alt={product.name}
                        />
                        <div className="h-full w-fit  max-w-xs overflow-hidden items-center md:items-start text-center md:text-left justify-around flex flex-col">
                          <h3 className="w-full text-neutral-900  text-xs md:text-sm font-semibold font-['Inter'] leading-snug">
                            {product.name}
                          </h3>
                          <div className="flex flex-col md:flex-row  gap-2 md:gap-10">
                            <h4 className="text-zinc-500 text-xs font-normal font-['Inter'] leading-tight">
                              <b className="pr-2">Color :</b>
                              {product.colors}
                            </h4>
                            <h4 className="text-zinc-500 text-xs font-normal font-['Inter'] leading-tight">
                              <b className="pr-2">Size :</b>
                              {product.sizes}
                            </h4>
                          </div>
                          <button
                            className="w-fit flex text-center"
                            onClick={() => {
                              handleRemoveCartProduct({
                                productId: product.id,
                                quantity: product.quantity,
                                colors: product.colors,
                                sizes: product.sizes,
                              });
                            }}
                          >
                            <img
                              className="w-6 h-6 relative"
                              src={close_icon}
                              alt="close"
                            />{" "}
                            Remove
                          </button>
                        </div>
                      </td>
                      <td className="w-fit border border-black">
                        <div className="w-full align-middle justify-center flex">
                          <img
                            onClick={() => {
                              handleUpdateQuantity({
                                productId: product.id,
                                quantity: product.quantity,
                                newQuantity: product.quantity - 1,
                                colors: product.colors,
                                sizes: product.sizes,
                              });
                            }}
                            className="w-5 h-5 "
                            src={Minus_icon}
                            alt="Minus"
                          />
                          <input
                            type="number"
                            value={product.quantity}
                            readOnly
                            className="w-10 text-center pl-4 bg-neutral-100 text-neutral-900 text-sm md:text-base font-semibold font-['Inter'] leading-relaxed"
                          ></input>
                          <img
                            onClick={() => {
                              handleUpdateQuantity({
                                productId: product.id,
                                quantity: product.quantity,
                                newQuantity: product.quantity + 1,
                                colors: product.colors,
                                sizes: product.sizes,
                              });
                            }}
                            className="w-5 h-5"
                            src={Add_icon}
                            alt="Add"
                          />
                        </div>
                      </td>
                      <td className="text-center border border-black">
                        <h4 className="line-through font-semibold">
                          {product.totalMRP / product.quantity}
                        </h4>
                        <h4>{product.total / product.quantity}</h4>
                      </td>
                      <td className="text-center border border-black">
                        <h4>{product.total}</h4>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td className="text-center font-semibold pr-4 border-2 border-black">
                  Totel Price
                </td>
                <td className="text-center font-semibold border-2 border-black line-through">
                  {cart.subTotalMRP}
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td className="text-center font-semibold pr-4 border-2 border-black">
                  Discount
                </td>
                <td className="text-center font-semibold border-2 border-black pr-3">
                  - {cart.subTotalMRP - cart.subTotal}
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td className="text-center font-semibold pr-4 border-2 border-black">
                  Sub Totel
                </td>
                <td className="text-center font-semibold border-2 border-black">
                  {cart.subTotal}
                </td>
              </tr>
            </tfoot>
          </table>
          <button
            onClick={() => {
              setOrderState("Check Out");
            }}
            className="bg-black w-full py-2 rounded-md mt-4 text-white text-base font-medium font-['Inter'] leading-7"
          >
            Make Order
          </button>
        </div>
      ) : orderState === "Check Out" ? (
        // Check Out
        <div className="justify-center items-center md:items-start gap-8 flex flex-col md:flex-row">
          {/*Contact & Address */}
          <div>
            {/* Contact Info */}
            <div className="border border-black w-full py-10 px-6">
              <h3 className="text-black text-xl font-medium font-['Poppins'] leading-7 pb-6">
                CONTACT INFO
              </h3>
              <h5>
                <span>Name : </span>
                {userAccount.username}
              </h5>
              <h5>
                <span>Email : </span>
                {userAccount.email}
              </h5>
              <h5>
                <span>Phone : </span>
                {userAccount.mobileNumber}
              </h5>
            </div>
            {/* Shipping Info */}
            <div className="border border-black w-full py-10 px-6">
              <h3 className="text-black text-xl font-medium font-['Poppins'] leading-7 pb-6">
                SHIPPING INFO
              </h3>
              <form action="" className="px-6 flex flex-col gap-4">
                {/* name */}
                <label
                  className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3"
                  htmlFor="fullname"
                >
                  Name
                </label>
                <input
                  className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
                  type="text"
                  name="fullname"
                  value={userAccount.fullName}
                  readOnly
                ></input>
                {/* email */}
                <label
                  className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="h-10 px-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
                  type="text"
                  name="email"
                  value={userAccount.email}
                  readOnly
                ></input>
                {/* address */}
                <label
                  className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3"
                  htmlFor="address"
                >
                  Address
                </label>
                <textarea
                  rows={4}
                  className="h-fit p-4 w-full bg-white rounded-md border border-stone-300 text-zinc-500 text-base font-normal font-['Inter'] leading-relaxed"
                  name="address"
                  value={` ${userAccount.building}, ${userAccount.street}, ${userAccount.city}, ${userAccount.state}, ${userAccount.country}, ${userAccount.pinCode}`}
                  readOnly
                ></textarea>
              </form>
            </div>
            <button
              onClick={() => {
                navigate("/useraccount");
              }}
              className="bg-black w-full py-2 rounded-md mt-4 text-white text-base font-medium font-['Inter'] leading-7"
            >
              Chanage Address
            </button>
          </div>
          {/* Payment Method */}
          <div className="border-black border w-fit py-10 px-6">
            <h3 className="text-black text-xl font-medium font-['Poppins'] leading-7 pb-6">
              Choose a Delivery Options
            </h3>
            {/* Options */}
            <div>
              {/* Free shipping */}
              <div className="border border-black p-3 flex justify-between">
                <div className="flex gap-3 text-left">
                  <input
                    className="h-6 w-6"
                    type="radio"
                    name="shipping"
                    id="free"
                    value={0}
                    onChange={(e) => {
                      setShippingCharges(Number(e.target.value));
                    }}
                    defaultChecked
                  />
                  <label
                    htmlFor="free"
                    className="pr-3 text-neutral-900 text-base font-normal font-['Inter'] leading-relaxed"
                  >
                    Free shipping
                  </label>
                </div>
                <p className="text-neutral-900 text-base font-normal font-['Inter'] leading-relaxed">
                  0.00 ₹
                </p>
              </div>
              {/* Express shipping */}
              <div className="border border-black p-3 flex justify-between">
                <div className="flex gap-3 text-left">
                  <input
                    className="h-6 w-6"
                    type="radio"
                    name="shipping"
                    id="Express"
                    value={120}
                    onChange={(e) => {
                      setShippingCharges(Number(e.target.value));
                    }}
                  />
                  <label
                    htmlFor="Express"
                    className="pr-3 text-neutral-900 text-base font-normal font-['Inter'] leading-relaxed"
                  >
                    Express shipping
                  </label>
                </div>
                <p className="min-w-fit text-neutral-900 text-base font-normal font-['Inter'] leading-relaxed">
                  + 120.00 ₹
                </p>
              </div>
              {/* Standard shipping */}
              <div className="border border-black p-3 flex justify-between">
                <div className="flex gap-3 text-left">
                  <input
                    className="h-6 w-6"
                    type="radio"
                    name="shipping"
                    id="Standard"
                    value={199}
                    onChange={(e) => {
                      setShippingCharges(Number(e.target.value));
                    }}
                  />
                  <label
                    htmlFor="Standard"
                    className="pr-3 text-neutral-900 text-base font-normal font-['Inter'] leading-relaxed"
                  >
                    Standard shipping
                  </label>
                </div>
                <p className="min-w-fit text-neutral-900 text-base font-normal font-['Inter'] leading-relaxed">
                  + 199.00 ₹
                </p>
              </div>
            </div>
            {/* Order Total */}
            <div className="mt-4">
              <div className="border border-black p-3 flex justify-between">
                <h4 className="pr-3 text-neutral-900 text-base font-semibold font-['Inter'] leading-relaxed">
                  Subtotal
                </h4>
                <p className="text-neutral-900 text-base font-semibold font-['Inter'] leading-relaxed">
                  {cart.subTotal} ₹
                </p>
              </div>
              <div className="border border-black p-3 flex justify-between">
                <h4 className="pr-3 text-neutral-900 text-base font-normal font-['Inter'] leading-relaxed">
                  Shipping
                </h4>
                <p className="text-neutral-900 text-base font-normal font-['Inter'] leading-relaxed">
                  + {shippingCharges} ₹
                </p>
              </div>
              <div className="border border-black p-3 flex justify-between">
                <h4 className="pr-3 text-neutral-900 text-base font-semibold font-['Inter'] leading-relaxed">
                  Order Total
                </h4>
                <p className="text-neutral-900 text-base font-semibold font-['Inter'] leading-relaxed">
                  {cart.subTotal + shippingCharges} ₹
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setOrderState("Payment");
              }}
              className="bg-black w-full py-2 rounded-md mt-4 text-white text-base font-medium font-['Inter'] leading-7"
            >
              Make Payment
            </button>
          </div>
        </div>
      ) : (
        // Payment
        <div className="justify-center items-start gap-10 flex">
          <div className="border-black border w-fit py-10 px-6">
            <h3 className="text-black text-xl font-medium font-['Poppins'] leading-7 pb-6">
              {paymentId ? (
                <div className="text-center p-4">
                  <b className="text-zinc-500 text-[28px] font-medium font-['Poppins'] leading-[34px]">
                    Thank you!
                  </b>
                  <p className="my-4 text-zinc-800 text-[30px] font-medium font-['Poppins'] leading-[44px]">
                    Your Order Has Been Received
                  </p>
                  <h4 className="text-neutral-900 text-sm font-semibold font-['Inter'] leading-snug">
                    Your Pament ID : {paymentId}
                  </h4>
                </div>
              ) : (
                "Select a payment method and Pay"
              )}
            </h3>
            <button
              onClick={() => {
                if (!paymentId) {
                  razorpayPayment({
                    amount: cart.subTotal + shippingCharges,
                  });
                }
              }}
              className="bg-black w-full py-2 rounded-md mt-4 text-white text-base font-medium font-['Inter'] leading-7"
            >
              {paymentId ? (
                <a href="/shop">continue shopping</a>
              ) : (
                <>
                  Make Payment{" "}
                  <b className="pl-2">{cart.subTotal + shippingCharges} ₹</b>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
