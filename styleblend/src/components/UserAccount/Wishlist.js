import React, { useContext } from "react";
import Close_icone from "../../images/Icons/close.svg";
import ProductContext from "../../context/ProductContext";
const Wishlist = () => {
  const context = useContext(ProductContext);
  const { like, addToLikeProducts, addToCartProducts } = context;

  return (
    <div className="w-full  flex-col justify-start items-start gap-10 inline-flex">
      <div className="w-full flex-col justify-start items-start gap-6 flex">
        <h3 className="text-black text-xl font-semibold font-['Inter'] leading-loose">
          Wishlist
        </h3>
      </div>
      <div className="w-full">
        <div className="w-full flex justify-between pb-8">
          <h3 className="text-zinc-500 text-sm font-bold font-['Inter'] leading-snug">
            Your Wishlist Products :
          </h3>
        </div>
        {/* Wishlist products */}
        {like.length ? (
          like.map((product) => {
            return (
              <div key={product.productId} className="w-full">
                <div className=" h-full py-4 border-b border-gray-200 flex align-middle justify-center items-center gap-2">
                  <div className="w-full h-fit justify-start items-center flex">
                    {/* delete button */}
                    <img
                      className="w-6 h-6 pr-1 justify-center items-center flex"
                      src={Close_icone}
                      alt="colse button"
                      onClick={() => {
                        addToLikeProducts({ productId: product.productId });
                      }}
                    />
                    {/* product */}
                    <div className="w-full h-fit justify-start items-center gap-2 flex">
                      {/* image */}
                      <div className="w-[70px] h-[72px] flex-col justify-center items-center inline-flex">
                        <img
                          className="w-[60px] h-[72px]"
                          src={product.productImage}
                          alt={product.name}
                        />
                      </div>
                      {/* product details */}
                      <div className="w-full self-stretch justify-start items-center gap-4 flex">
                        <div className="w-fit flex-col justify-center items-start gap-2 inline-flex">
                          <div className="w-fit  text-neutral-900 text-sm font-semibold font-['Inter'] leading-snug">
                            {product.name}
                          </div>
                          <div className="w-fit text-zinc-500 text-xs font-normal font-['Inter'] leading-tight">
                            Color: {product.colors}
                          </div>
                          <div className="w-fit text-zinc-500 text-xs font-normal font-['Inter'] leading-tight">
                            Size : {product.sizes}
                          </div>
                          {/* Price And MRP */}
                          <div className="flex gap-2">
                            <div className="line-through w-fit max-w-[117px] text-neutral-900 text-sm font-normal font-['Inter'] leading-snug">
                              ₹ {product.mrp}
                            </div>
                            <div className="w-fit max-w-[117px] text-neutral-900 text-sm font-normal font-['Inter'] leading-snug">
                              ₹ {product.price}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* add to cart */}
                  <div className="w-1/3 h-fit py-1.5 bg-neutral-900 rounded-lg justify-center items-center flex">
                    <button
                      onClick={() => {
                        addToCartProducts({
                          productId: product.productId,
                          quantity: 1,
                          colors: product.colors,
                          sizes: product.sizes,
                        });
                      }}
                      className="w-full text-center px-1 text-white text-xs font-medium font-['Inter'] leading-7"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h2 className="w-full py-20 text-center">No Product In Wishlist</h2>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
