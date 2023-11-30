import React from "react";
import Close_icone from "../../images/Icons/close.svg";
const Wishlist = () => {
  const wishlistProducts = [
    {
      Image: "https://via.placeholder.com/60x72",
      Name: "Bamboo basket",
      Color: "beige",
      Price: "1200",
    },
    {
      Image: "https://via.placeholder.com/60x72",
      Name: "Bamboo basket",
      Color: "beige",
      Price: "1200",
    },
    {
      Image: "https://via.placeholder.com/60x72",
      Name: "Bamboo basket",
      Color: "beige",
      Price: "1200",
    },
  ];

  return (
    <div className="w-full  flex-col justify-start items-start gap-10 inline-flex">
      <div className="w-full flex-col justify-start items-start gap-6 flex">
        <h3 className="text-black text-xl font-semibold font-['Inter'] leading-loose">
          Wishlist
        </h3>
      </div>
      <div className="w-full">
        <div className="w-full flex justify-between pl-8">
          <h3 className="text-zinc-500 text-sm font-normal font-['Inter'] leading-snug">
            Product
          </h3>
        </div>
        {/* Wishlist products */}
        {wishlistProducts.map((product, index) => {
          return (
            <div key={index} className="w-full">
              <div className=" h-full py-4 border-b border-gray-200 flex align-middle justify-center items-center gap-2">
                <div className="w-full h-20 justify-start items-center flex">
                  {/* delete button */}
                  <img
                    className="w-6 h-6 pr-1 justify-center items-center flex"
                    src={Close_icone}
                    alt="colse button"
                  />
                  {/* product */}
                  <div className="w-full h-20 justify-start items-center gap-2 flex">
                    {/* image */}
                    <div className="w-[70px] h-[72px] flex-col justify-center items-center inline-flex">
                      <img
                        className="w-[60px] h-[72px]"
                        src={product.Image}
                        alt={product.Name}
                      />
                    </div>
                    {/* product details */}
                    <div className="w-full self-stretch justify-start items-center gap-4 flex">
                      <div className="w-fit flex-col justify-center items-start gap-2 inline-flex">
                        <div className="w-fit  text-neutral-900 text-sm font-semibold font-['Inter'] leading-snug">
                          {product.Name}
                        </div>
                        <div className="w-fit text-zinc-500 text-xs font-normal font-['Inter'] leading-tight">
                          Color: {product.Color}
                        </div>
                        <div className="w-fit max-w-[117px] text-neutral-900 text-sm font-normal font-['Inter'] leading-snug">
                          ₹ {product.Price}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* add to cart */}
                <div className="w-full h-fit py-1.5 bg-neutral-900 rounded-lg justify-center items-center flex">
                  <h3 className="text-center px-1 text-white text-xs font-medium font-['Inter'] leading-7">
                    Add to cart
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
