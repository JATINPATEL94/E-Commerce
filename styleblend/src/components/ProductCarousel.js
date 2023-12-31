import React from "react";
import right_arrow_icon from "../images/Icons/Slider_icons/Button-1.png";
import ProductCard from "./ProductCard";

const ProductCarousel = () => {
  const detailsView = true;
  const products = [
    {
      name: "Men's Diamond Quilted Bomber Hoody",
      Image:
        "https://s3-alpha-sig.figma.com/img/2ddc/7d53/9e5042079dc654e8acaaf3c1132b5d2d?Expires=1701043200&Signature=btumOABlMFfGyhWXoo35SgsWZUDf2K4~CTLywRhOMq-4KI3Wp~Sv~E98HjT5g9d0HeXUVMnZrKia88viJk2lYpXKfdt8UqWqRx877RXddCx0Drgl6LU6RJvsTQkBovT~OzbmE-u1T603-YiCRIOg0Vd~0Q94QEfusp1Vb~gJjE7B5brL50BICDi46w9yGBqaHG4LwF9mHXhp-uoyvU09ba9dBdy3w39fPtrIPzG8K5rvIebnWYHnLJIEHdNHUkVuBxFe3hvpCIlPgaBbWZ4Rs12ZtFdOg-XsrD4jykayeoR9H7lkH3AF1kki3p9O1XbupOplht8tc4t8Q~M1uSSy6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      price: 800,
      disPrice: 600,
      rating: 5,
      like: false,
    },
    {
      name: "Oversized real leather harrington jacket in black",
      Image:
        "https://s3-alpha-sig.figma.com/img/8432/2c10/478be4a135bcac0029f4e99fe0a2406b?Expires=1701043200&Signature=gra2iJAu0TJQjut~wxPMTkjfSfUswhawnjMnp-7rlA20n~CLo-ZDZ5yOD-C7rHOYTQFdrAO2VS49Hxiq~10R5laggb5XbH03rDCXRpxvLGblkfUP0~cP2eWkEnYrFQydOQr0FTCnwmLzIRORowQIvQEAlUUnprgMXki5ssPuOHfO8ymtWy4442ugVF1-e8UrBhGLyXYkfU~g2u4ylUI9D-8lLoeFWTo2lysYz18DCLK4PfqyHbaLDKFBlOngOniNQvt5f1T7xypkWeWZ8wn-K~d3rHQAz7AS9JsPPr2Quxe214IuPVvzUUuvpaPHSyHqMuz7zaBnQmrejmgc32BYlA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      price: 1000,
      disPrice: 500,
      rating: 4,
      like: true,
    },
    {
      name: "96 Nuptse Dip Dye Korea Puffers Jacket",
      Image:
        "https://s3-alpha-sig.figma.com/img/1f2d/a05d/65003ce70e9ae30cb6cfda22837ab717?Expires=1701043200&Signature=eZhG5ePt~L1PskvaF3aLVROjhmFxhtL-vjWOvMZBRawmMgVRjW4NlJuoTrXc0a7jKFWlP0vGv38R2xD2jx0kDQ76lSt4XhUxoht39CwonHnixfLIXnfhR~WWt2qkp1jUIGsVmChOBXmrZMvNKjOfnyXrd8P71qsM7WdmsOXJBT-zjJhlcAnKzHo1toV6d49AGZ88S6IHoTLmFM3VbNsWZDPsSULD4M9dh2ueiLi5wQ3tsNi6hEcx4sCjS6y~cYfRv8qNWHKVlwUUIZ6S1loEo31I6RH3DQgvOf4SGqPoLF73UC~V4wCjQn55Dkk17kECmph9PKPEDG0OrF-BLM4cUA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      price: 2000,
      disPrice: 1500,
      rating: 4,
      like: true,
    },
    {
      name: "1996 Retro Nuptse Jacket in Black",
      Image:
        "https://s3-alpha-sig.figma.com/img/c840/b3a1/4b2205175aa10ee2f96d0a8b549b0989?Expires=1701043200&Signature=dKBWQ3LkahtfvQfmB1xajXvaPVIj2UcjXZG6s5Hb80GLS7UvI7t0lc3b6ZPJN6wo2kHsW14ULGeMQe~JJ1VFSAIwkrIFcAMbRQFljshTjXSf0rv4E3z0-gqvxZYWM-E34rN2Zxvi1uILEbp4VaaXJM6pB~0GAQ205WHY8hSByhEt5oqjs0p5O46wWA9raFT95zgxiIogV6vc7HSujcV4mL2arWnkQw0v2sF2l3C-1m3FUXvtM6b~Xfoqzk5xoCle3LPYPq8TjtDMLu5sv~u9w2DtCsyIK6dRstF6vRBAEU26dZOmAAX0QtqjXhrwU4X0YkBZrap8yyEOT8zGmTbGIw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      price: 1800,
      disPrice: 1200,
      rating: 4,
      like: false,
    },
    {
      name: "Freestyle Crew Racer leather jacket",
      Image:
        "https://s3-alpha-sig.figma.com/img/66c5/4df9/698f4a1cf99dc6b4a9b812714c8cd6ec?Expires=1701043200&Signature=QHFZHquyfzIdLB9boYazPaP4M5HuvpnbmmH9MLeBs2WYg9awouH6bhOsSPQqbuE9RRpwAdBkL9G~yMKqfXm5p1ybwXoKi~1KHhfZjsiJBazkV~F3LkrfUGxMSGYM1h1sg-an1lXszYT4yvO9bjnixBi-xHCj-OuOXLF4iNlxDNO2Lr4osdg3oZ~Rocm9qqfc3k8Y1JSEPGAeB4h2htiddW6mfp-73VNKB1YPg82WbupGXNpoKOyf8ZmQnPOvVTvrpGf32bCV8besJomZDy7Y6F6E5Dfwddv7QCe2bDPTvxXM~uKlQqW0YnffSzwiQr3sgFw09mBJY-Hq9Dq0MtJC~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      price: 1500,
      disPrice: 1000,
      rating: 3,
      like: false,
    },
    {
      name: "Chilliwack black Bomber HUMANATURE",
      Image:
        "https://s3-alpha-sig.figma.com/img/5000/f08b/c6751e51cd4c0cffcc7a18bf35cdf109?Expires=1701043200&Signature=hR4sVQyjPJ2D~0IepiZiWljgnB2rwOz7ZZiNEEu6u90h1dlPrvRoAbJ2RThqBSR88ec6nV6IpYt0bNIFOlktMCudxjodACBxaW6sd21eYLmQWeW5FVuOIWRgshpUSrH1za9~DGR8FKoCyI0unqIf1YVA2-vE8howc0dvo~7IkxQ7rEfjxpaoh4JS3ejjNlz6N83xieD1aoJ1VWgQ30m6cDNdWgZr2v9VTfpVm2A7ceLn5X-yblV7xSqAE6VMDoroQ6~6q5adiK5mXX7tq~LvG-r4b85GWpxvVdu1hkf-yDZj8rAGVfjF6QBwWk8T22BNsVu~Gbs7vSE1qMCV5juAow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      price: 1500,
      disPrice: 1000,
      rating: 3,
      like: false,
    },
  ];
  return (
    <div className="w-full h-full px-8 lg:px-40 my-10 bg-white flex-col gap-12 flex">
      {/* carousel title */}
      <div className="w-full justify-between items-end inline-flex">
        <div className="text-black text-[40px] font-medium font-['Poppins'] leading-[44px]">
          New <br />
          Arrivals
        </div>
        <div className="border-b border-neutral-900 justify-start items-center gap-1 flex">
          <div className="justify-start items-center  flex">
            <div className="text-neutral-900 text-base font-medium font-['Inter'] leading-7">
              More Products
            </div>
            <img
              className="w-10 h-10 mb-[-10px]"
              src={right_arrow_icon}
              alt="right arrow"
            />
          </div>
        </div>
      </div>
      {/* products */}
      <div className="w-full h-fit justify-start items-start gap-6 inline-flex overflow-x-auto">
        {products.map((product) => {
          return (
            <ProductCard
              product={product}
              detailsView={detailsView}
              key={product.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductCarousel;
