import React, { useContext } from "react";
import { Link } from "react-router-dom";
import close_icon from "../images/Icons/close.svg";
import Add_icon from "../images/Icons/Add.png";
import Minus_icon from "../images/Icons/Minus.png";
import ProductContext from "../context/ProductContext";

const OrderSummary = ({ openCloseOderSummary }) => {
  const context = useContext(ProductContext);
  const { setOrderState, cart, updateCartQuantity, removeCartProduct } =
    context;

  // Handler
  const handleUpdateQuantity = async (data) => {
    await updateCartQuantity(data);
  };

  const handleRemoveCartProduct = async (data) => {
    await removeCartProduct(data);
  };

  return (
    <div className="w-screen overflow-y-scroll max-w-sm h-screen px-6 py-10 top-0 right-0 bg-white flex-col justify-between items-center inline-flex absolute z-50">
      {/* cart */}
      <div className="h-full w-full flex-col justify-start items-start gap-4 flex">
        {/* close button */}
        <div className="h-fit self-stretch justify-start items-center gap-4 inline-flex">
          <h2 className="grow shrink basis-0 text-neutral-900 text-[28px] font-medium font-['Poppins'] leading-[34px]">
            Cart
          </h2>
          <img
            onClick={openCloseOderSummary}
            className="w-6 h-6 relative"
            src={close_icon}
            alt="colse"
          />
        </div>
        {/* cart items */}
        <div className="w-full flex flex-col">
          {cart.items.length > 0 ? (
            cart.items.map((product) => {
              return (
                <div
                  key={`${product.id}__ ${product.sizes}__${product.colors}`}
                  className="w-full h-full  py-6 border-b border-gray-200 justify-start items-center gap-4 inline-flex"
                >
                  {/* image */}
                  <div className="w-20 h-24 flex-col justify-center items-center inline-flex">
                    <img
                      className="w-20 h-24 object-cover"
                      src={product.productImage}
                      alt=""
                    />
                  </div>
                  {/* product details */}
                  <div className="w-full self-stretch justify-between items-start flex">
                    {/* left section */}
                    <div className="w-full flex-col justify-center items-start gap-2 inline-flex">
                      {/* title */}
                      <div className="w-full h-[22px] text-neutral-900 text-sm font-semibold font-['Inter'] leading-snug overflow-hidden">
                        {product.name}
                      </div>
                      {/* color */}
                      <div className="text-zinc-500 text-xs font-normal font-['Inter'] leading-tight">
                        <b>Color :</b> {product.colors}
                      </div>
                      <div className="text-zinc-500 text-xs font-normal font-['Inter'] leading-tight">
                        <b>Size :</b> {product.sizes}
                      </div>
                      {/* Quantity */}
                      <div className="w-20 h-8 rounded border border-zinc-500  justify-center items-center flex">
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
                          className="w-5 h-5 relative flex-col justify-start items-start flex cursor-pointer"
                          src={Minus_icon}
                          alt="Minus"
                        />
                        <input
                          type="number"
                          value={product.quantity}
                          readOnly
                          className="w-10 text-center pl-2 bg-neutral-100 text-neutral-900 text-sm md:text-base font-semibold font-['Inter'] leading-relaxed"
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
                          className="w-5 h-5 relative flex-col justify-start items-start flex cursor-pointer"
                          src={Add_icon}
                          alt="Add"
                        />
                      </div>
                    </div>
                    {/* right part */}
                    <div className="flex-col justify-center items-end gap-2 inline-flex">
                      <div className="min-w-fit text-right text-neutral-900 text-sm font-semibold font-['Inter'] leading-snug">
                        ₹ {product.totalMRP}
                      </div>
                      <div className="min-w-fit text-right text-neutral-900 text-sm font-semibold font-['Inter'] leading-snug">
                        ₹ {product.total}
                      </div>
                      <img
                        onClick={() => {
                          handleRemoveCartProduct({
                            productId: product.id,
                            quantity: product.quantity,
                            colors: product.colors,
                            sizes: product.sizes,
                          });
                        }}
                        className="w-6 h-6 relative"
                        src={close_icon}
                        alt="close"
                      />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1 className="w-full py-20 text-center">
              No Product In Your Cart !
            </h1>
          )}
        </div>
      </div>
      {/* subtotel & Chekout */}
      <div className="w-full h-fit bg-white px-6 flex-col justify-between items-center flex">
        {/* suntotal & totle */}
        <div className="w-full self-stretch h-fit flex-col justify-start items-start flex">
          {/* totle */}
          <div className="w-full h-[52px] py-[13px]  border-b border-gray-200 justify-between items-start  flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className=" text-neutral-900 text-base font-normal font-['Inter'] leading-relaxed">
                Total
              </div>
            </div>
            <div className="line-through text-right text-neutral-900 text-base font-semibold font-['Inter'] leading-relaxed">
              {cart.subTotalMRP}
            </div>
          </div>
          {/* Discount */}
          <div className="w-full h-[52px] py-[13px]  border-b border-gray-200 justify-between items-start  flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className=" text-neutral-900 text-base font-normal font-['Inter'] leading-relaxed">
                Discount
              </div>
            </div>
            <div className="text-right text-neutral-900 text-base font-semibold font-['Inter'] leading-relaxed">
              {cart.subTotalMRP - cart.subTotal}
            </div>
          </div>
          {/* subtotal */}
          <div className="w-full h-[52px] py-[13px] justify-between items-start flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex text-neutral-900 text-xl font-medium font-['Poppins'] leading-7">
              Subtotal
            </div>
            <div className="text-right text-neutral-900 text-xl font-medium font-['Poppins'] leading-7">
              {cart.subTotal}
            </div>
          </div>
        </div>
        {/* chekout */}
        <div className="self-stretch h-[90px] flex-col justify-start items-center gap-4 flex">
          <div className="self-stretch px-[26px] py-2.5 bg-neutral-900 rounded-md justify-center items-center gap-1 inline-flex">
            <Link
              onClick={() => {
                setOrderState("Check Out");
                openCloseOderSummary();
              }}
              to="/checkout"
              className="text-center text-white text-lg font-medium font-['Inter'] leading-loose"
            >
              Checkout
            </Link>
          </div>
          <div className="border-b border-neutral-900 text-neutral-900 text-sm font-semibold font-['Inter'] leading-snug">
            <Link
              onClick={() => {
                setOrderState("Cart");
                openCloseOderSummary();
              }}
              to="/checkout"
            >
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
