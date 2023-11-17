import React from "react";

const Category = () => {
  const CategoryItems = [
    {
      Image:
        "https://s3-alpha-sig.figma.com/img/8e8d/4312/b7fb39cdd2fe699db12f67fd0e28269b?Expires=1701043200&Signature=m31phjiNF-mYVSJOpOcZv-qEYpfJCov1XD8Q6QKJnsn~7fsn618EuPpAf9vKR9jC3uWFQphooBgL0-OKh9iWqZj2jS-rs4xhVoJat4i0Zfw5sR4SR8-1vXcWhdSrdOcatFT52y9wYqQ-WGFsaWOQblAM59X5s4EfNVP9nezaAEBJhzOqHX5v~ok4L154Ce6JEJWCAnqxpWDLu7Pi7oimE9CaCC-Z5E41VstkjCdERvrp1s9KbR3-JxP2xSYzFyzHWRI5BDweN~Q9geMIyRbkkNSx16mBwwRur7Xky3frOajJo4WC8lFARYIfVSANw8kh-cShEXwBvCt7~H-FlDmbdw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Puffers",
    },
    {
      Image:
        "https://s3-alpha-sig.figma.com/img/5000/f08b/c6751e51cd4c0cffcc7a18bf35cdf109?Expires=1701043200&Signature=hR4sVQyjPJ2D~0IepiZiWljgnB2rwOz7ZZiNEEu6u90h1dlPrvRoAbJ2RThqBSR88ec6nV6IpYt0bNIFOlktMCudxjodACBxaW6sd21eYLmQWeW5FVuOIWRgshpUSrH1za9~DGR8FKoCyI0unqIf1YVA2-vE8howc0dvo~7IkxQ7rEfjxpaoh4JS3ejjNlz6N83xieD1aoJ1VWgQ30m6cDNdWgZr2v9VTfpVm2A7ceLn5X-yblV7xSqAE6VMDoroQ6~6q5adiK5mXX7tq~LvG-r4b85GWpxvVdu1hkf-yDZj8rAGVfjF6QBwWk8T22BNsVu~Gbs7vSE1qMCV5juAow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Bombers",
    },
    {
      Image:
        "https://s3-alpha-sig.figma.com/img/2ddc/7d53/9e5042079dc654e8acaaf3c1132b5d2d?Expires=1701043200&Signature=btumOABlMFfGyhWXoo35SgsWZUDf2K4~CTLywRhOMq-4KI3Wp~Sv~E98HjT5g9d0HeXUVMnZrKia88viJk2lYpXKfdt8UqWqRx877RXddCx0Drgl6LU6RJvsTQkBovT~OzbmE-u1T603-YiCRIOg0Vd~0Q94QEfusp1Vb~gJjE7B5brL50BICDi46w9yGBqaHG4LwF9mHXhp-uoyvU09ba9dBdy3w39fPtrIPzG8K5rvIebnWYHnLJIEHdNHUkVuBxFe3hvpCIlPgaBbWZ4Rs12ZtFdOg-XsrD4jykayeoR9H7lkH3AF1kki3p9O1XbupOplht8tc4t8Q~M1uSSy6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Lightweight jackets",
    },
    {
      Image:
        "https://s3-alpha-sig.figma.com/img/0853/033c/2ceb473af271ebfca5dc37d6414d2c4c?Expires=1701043200&Signature=JkewksC7Kaw4B-qeR7yTYJhKZAZ4iWi2ROeUuK90LbXdOc9RyOxjkHZzHSX6oonQ8rtw4PbDCYERPg0marFffP36o9PFqohj43UIdHCz2l064c4TXLVgYTexpTei2ifBhKoce0DRAxJ7NezZaNGxipbNQfz4fiGUC1Tml~joKTK0nygZZGHutVzakjwAwlK1RRm6qatzUcAdCPCpfC8MeP4LwycsSM42Rnz1q1-xK8Sktr~HJ2Ti8k4cjlDdI2CsAc3DCm~hmrNuSehRpSAdJdiEIujrS4N7Jph2UgbRjJ9IaSc~3OiDano7t4rQR7XpwmXQiwg38~ejLOtyquLtww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: " Gilets",
    },
    {
      Image:
        "https://s3-alpha-sig.figma.com/img/98cf/fe19/da83e01239c2d63dfdec17ca1844c980?Expires=1701043200&Signature=Lzza2xeX9A20iYKZBMPlgVQuW1uiA12AKrv4SUb9D9~PvSgobYd4dZZ518gliBHc-V3gLQxEzNYB1QkJwJbRtPYbRy8h3XljSsa9hIhywHrGh7VpcsJqTXnPTsxlrKCQhy0oAtvtOlCcy--AmIDN61m8-tmU~HLm0XwtCznDrfBaPSfU~LQ3NNMUUFjp8MGifoanud7uxUkliDcIaplwLfOz4GvbyYfaFuHAvoG0K90i28TUyPeeqJSyzPP01eKSZ0RH1jiXi97AkJEGgFlCPXBxSjqs~gzS~98nL~nNdUjiLnpqyZsyEzA5aNzOYfQ9~McakNZWR2yaqegXBe2FKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Coats",
    },
    {
      Image:
        "https://s3-alpha-sig.figma.com/img/8e8d/4312/b7fb39cdd2fe699db12f67fd0e28269b?Expires=1701043200&Signature=m31phjiNF-mYVSJOpOcZv-qEYpfJCov1XD8Q6QKJnsn~7fsn618EuPpAf9vKR9jC3uWFQphooBgL0-OKh9iWqZj2jS-rs4xhVoJat4i0Zfw5sR4SR8-1vXcWhdSrdOcatFT52y9wYqQ-WGFsaWOQblAM59X5s4EfNVP9nezaAEBJhzOqHX5v~ok4L154Ce6JEJWCAnqxpWDLu7Pi7oimE9CaCC-Z5E41VstkjCdERvrp1s9KbR3-JxP2xSYzFyzHWRI5BDweN~Q9geMIyRbkkNSx16mBwwRur7Xky3frOajJo4WC8lFARYIfVSANw8kh-cShEXwBvCt7~H-FlDmbdw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Rainwear",
    },
  ];
  return (
    <div className="w-full h-full px-8 lg:px-40 py-12 bg-white flex-col justify-center items-center gap-12 inline-flex">
      {/* Title of Categoty */}
      <div className="w-full justify-center items-center gap-12 inline-flex">
        <div className="text-zinc-800 text-[40px] font-medium font-['Poppins'] leading-[44px]">
          Top Categories
        </div>
      </div>
      {/* Categorys */}
      <div className="justify-start items-start gap-6 grid grid-cols-3  md:grid-cols-6">
        {CategoryItems.map((Cat_item) => (
          <div className="flex-col justify-start items-start gap-3 inline-flex">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full justify-center items-center inline-flex overflow-hidden">
              <img className="w-28 h-28" src={Cat_item.Image} alt="" />
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
