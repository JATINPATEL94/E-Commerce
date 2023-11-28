import React, { useState } from "react";
import close_icon from "../images/Icons/close.svg";
import Add_icon from "../images/Icons/Add.png";
import Minus_icon from "../images/Icons/Minus.png";

const OrderSummary = ({ openCloseOderSummary }) => {
  const [count, setCount] = useState(1);
  const products = [
    {
      name: "Men's Diamond Quilted Bomber Hoody",
      Image:
        "https://s3-alpha-sig.figma.com/img/2ddc/7d53/9e5042079dc654e8acaaf3c1132b5d2d?Expires=1701043200&Signature=btumOABlMFfGyhWXoo35SgsWZUDf2K4~CTLywRhOMq-4KI3Wp~Sv~E98HjT5g9d0HeXUVMnZrKia88viJk2lYpXKfdt8UqWqRx877RXddCx0Drgl6LU6RJvsTQkBovT~OzbmE-u1T603-YiCRIOg0Vd~0Q94QEfusp1Vb~gJjE7B5brL50BICDi46w9yGBqaHG4LwF9mHXhp-uoyvU09ba9dBdy3w39fPtrIPzG8K5rvIebnWYHnLJIEHdNHUkVuBxFe3hvpCIlPgaBbWZ4Rs12ZtFdOg-XsrD4jykayeoR9H7lkH3AF1kki3p9O1XbupOplht8tc4t8Q~M1uSSy6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      price: 800,
      disPrice: 600,
      selectedColor: "Red",
      quantity: 1,
    },
    {
      name: "Men's Diamond Quilted Bomber Hoody",
      Image:
        "https://s3-alpha-sig.figma.com/img/2ddc/7d53/9e5042079dc654e8acaaf3c1132b5d2d?Expires=1701043200&Signature=btumOABlMFfGyhWXoo35SgsWZUDf2K4~CTLywRhOMq-4KI3Wp~Sv~E98HjT5g9d0HeXUVMnZrKia88viJk2lYpXKfdt8UqWqRx877RXddCx0Drgl6LU6RJvsTQkBovT~OzbmE-u1T603-YiCRIOg0Vd~0Q94QEfusp1Vb~gJjE7B5brL50BICDi46w9yGBqaHG4LwF9mHXhp-uoyvU09ba9dBdy3w39fPtrIPzG8K5rvIebnWYHnLJIEHdNHUkVuBxFe3hvpCIlPgaBbWZ4Rs12ZtFdOg-XsrD4jykayeoR9H7lkH3AF1kki3p9O1XbupOplht8tc4t8Q~M1uSSy6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      price: 800,
      disPrice: 600,
      selectedColor: "Red",
      quantity: 1,
    },
    {
      name: "Men's Diamond Quilted Bomber Hoody",
      Image:
        "https://s3-alpha-sig.figma.com/img/2ddc/7d53/9e5042079dc654e8acaaf3c1132b5d2d?Expires=1701043200&Signature=btumOABlMFfGyhWXoo35SgsWZUDf2K4~CTLywRhOMq-4KI3Wp~Sv~E98HjT5g9d0HeXUVMnZrKia88viJk2lYpXKfdt8UqWqRx877RXddCx0Drgl6LU6RJvsTQkBovT~OzbmE-u1T603-YiCRIOg0Vd~0Q94QEfusp1Vb~gJjE7B5brL50BICDi46w9yGBqaHG4LwF9mHXhp-uoyvU09ba9dBdy3w39fPtrIPzG8K5rvIebnWYHnLJIEHdNHUkVuBxFe3hvpCIlPgaBbWZ4Rs12ZtFdOg-XsrD4jykayeoR9H7lkH3AF1kki3p9O1XbupOplht8tc4t8Q~M1uSSy6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      price: 800,
      disPrice: 600,
      selectedColor: "Red",
      quantity: 1,
    },
  ];
  return (
    <div className="w-screen overflow-y-scroll max-w-sm h-screen px-6 py-10 top-0 right-0 bg-white flex-col justify-between items-center inline-flex absolute z-50">
      {/* cart */}
      <div className="h-full flex-col justify-start items-start gap-4 flex">
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
        <div className="f-full flex flex-col">
          {products.map((product) => {
            return (
              <div className="w-full h-full  py-6 border-b border-gray-200 justify-start items-center gap-4 inline-flex">
                {/* image */}
                <div className="w-20 h-24 flex-col justify-center items-center inline-flex">
                  <img
                    className="w-20 h-24 object-cover"
                    src={product.Image}
                    alt=""
                  />
                </div>
                {/* product details */}
                <div className="w-full self-stretch justify-between items-start flex">
                  {/* left section */}
                  <div className="w-full flex-col justify-center items-start gap-2 inline-flex">
                    <div className="w-full h-[22px] text-neutral-900 text-sm font-semibold font-['Inter'] leading-snug overflow-hidden">
                      {product.name}
                    </div>
                    {/* title */}
                    <div className="text-zinc-500 text-xs font-normal font-['Inter'] leading-tight">
                      {product.selectedColor}
                    </div>
                    {/* Quantity */}
                    <div className="w-20 h-8 rounded border border-zinc-500  justify-center items-center flex">
                      <img
                        onClick={() => setCount(count > 0 ? count - 1 : count)}
                        className="w-5 h-5 relative flex-col justify-start items-start flex cursor-pointer"
                        src={Minus_icon}
                        alt="Minus"
                      />
                      <input
                        type="number"
                        value={count}
                        readOnly
                        className="w-10 text-center pl-2 bg-neutral-100 text-neutral-900 text-sm md:text-base font-semibold font-['Inter'] leading-relaxed"
                      ></input>
                      <img
                        onClick={() => setCount(count + 1)}
                        className="w-5 h-5 relative flex-col justify-start items-start flex cursor-pointer"
                        src={Add_icon}
                        alt="Add"
                      />
                    </div>
                  </div>
                  {/* right part */}
                  <div className="flex-col justify-center items-end gap-2 inline-flex">
                    <div className="text-right text-neutral-900 text-sm font-semibold font-['Inter'] leading-snug">
                      {product.disPrice} ₹
                    </div>
                    <img
                      className="w-6 h-6 relative"
                      src={close_icon}
                      alt="close"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* subtotel & Chekout */}
      <div className="w-full h-fit bg-white px-6 flex-col justify-between items-center flex">
        {/* suntotal & totle */}
        <div className="w-full self-stretch h-[104px] flex-col justify-start items-start flex">
          {/* subtotal */}
          <div className="w-full h-[52px] py-[13px]  border-b border-gray-200 justify-between items-start  flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className=" text-neutral-900 text-base font-normal font-['Inter'] leading-relaxed">
                Subtotal
              </div>
            </div>
            <div className="text-right text-neutral-900 text-base font-semibold font-['Inter'] leading-relaxed">
              $99.00
            </div>
          </div>
          {/* totle */}
          <div className="w-full h-[52px] py-[13px] justify-between items-start flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex text-neutral-900 text-xl font-medium font-['Poppins'] leading-7">
              Total
            </div>
            <div className="text-right text-neutral-900 text-xl font-medium font-['Poppins'] leading-7">
              $234.00
            </div>
          </div>
        </div>
        {/* chekout */}
        <div className="self-stretch h-[90px] flex-col justify-start items-center gap-4 flex">
          <div className="self-stretch px-[26px] py-2.5 bg-neutral-900 rounded-md justify-center items-center gap-1 inline-flex">
            <h4 className="text-center text-white text-lg font-medium font-['Inter'] leading-loose">
              Checkout
            </h4>
          </div>
          <div className="border-b border-neutral-900 text-neutral-900 text-sm font-semibold font-['Inter'] leading-snug">
            View Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
