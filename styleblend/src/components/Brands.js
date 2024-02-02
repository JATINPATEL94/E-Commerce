import React from "react";

const Brands = () => {
  return (
    <div className="w-full md:pt-10 flex-col items-center gap-4 inline-flex overflow-hidden px-8 lg:px-40">
      <div className="text-neutral-900 text-xl font-semibold font-['Inter'] leading-loose text-target">
        Trending Brands
      </div>
      <div className="px-2 py-4 w-full justify-between items-start gap-5 flex overflow-x-scroll ">
        <img
          className="w-[167px] h-16 object-cover border"
          src="https://mojomox.com/assets/images/articles/logo-ideas/beauty-logos.png"
          alt="brand01"
        />
        <img
          className="w-[167px] h-16 object-cover border"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS56Kn404y7u2N0NFqC2f0I_nEI4EJmGxNEVg&usqp=CAU"
          alt="brand01"
        />
        <img
          className="w-[167px] h-16 object-cover border"
          src="https://images-platform.99static.com//5i2EUqgXcdgmBdSTH8d_UXfdMg0=/0x0:2000x2000/fit-in/500x500/99designs-contests-attachments/108/108853/attachment_108853463"
          alt="brand01"
        />
        <img
          className="w-[167px] h-16 object-cover border"
          src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30143356/127.png"
          alt="brand01"
        />
        <img
          className="w-[167px] h-16 object-cover border"
          src="https://designshifu.com/wp-content/uploads/2022/12/DS_Blog_Image_Best_Clothing_Brand_Logos_of_all_Time_19-1024x536.jpg"
          alt="brand01"
        />
        <img
          className="w-[167px] h-16 object-cover border"
          src="https://t4.ftcdn.net/jpg/03/97/36/75/360_F_397367515_GYSuQtv6HDhvbkodzHXko2Of7Wb6mRes.jpg"
          alt="brand01"
        />
      </div>
    </div>
  );
};

export default Brands;
