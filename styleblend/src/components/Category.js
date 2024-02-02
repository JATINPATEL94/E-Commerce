import React from "react";

const Category = () => {
  const CategoryItems = [
    {
      Image:
        "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Shirts",
    },
    {
      Image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Jeans",
    },
    {
      Image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Jackets",
    },
    {
      Image:
        "https://images.unsplash.com/photo-1619183036291-4dbe7854a859?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Hoody",
    },
    {
      Image:
        "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "T-Shirts",
    },
    {
      Image:
        "https://images.unsplash.com/flagged/photo-1585052201332-b8c0ce30972f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Dresses",
    },
  ];
  return (
    <div className="w-full h-full px-8 lg:px-40 py-12 bg-white flex-col justify-center items-center gap-12 inline-flex">
      {/* Title of Categoty */}
      <div className="w-full justify-center items-center gap-12 inline-flex">
        <div className="text-zinc-800 text-[40px] font-medium font-['Poppins'] leading-[44px] text-target">
          Top Categories
        </div>
      </div>
      {/* Categorys */}
      <div className="justify-start items-start gap-6 grid grid-cols-3  md:grid-cols-6">
        {CategoryItems.map((Cat_item) => (
          <div
            className="flex-col justify-start items-start gap-3 inline-flex"
            key={Cat_item.title}
          >
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full justify-center items-center inline-flex overflow-hidden  border border-black">
              <img
                className="w-28 h-28 object-cover"
                src={Cat_item.Image}
                alt=""
              />
            </div>
            <div className="self-stretch h-[22px] flex-col justify-start items-center gap-1 flex">
              <div className="self-stretch text-center text-neutral-900 text-sm font-semibold font-['Inter'] leading-snug">
                {Cat_item.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
