import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Effortless everyday looks that blend comfort with style for any occasion.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Shirt",
    description:
      "Bold, expressive prints that add personality to your outfit.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women's Shirt",
    description:
      "Chic and versatile shirts designed to elevate your daily wardrobe.",
  },
];


const TopProducts = ({handleOrderPopup}) => {
  return (
    <div>
      <div className="container">
        {/* Header Section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Trending Products
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Top Rated Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Shop our most-loved styles, handpicked by customers like you. These bestsellers combine quality, comfort, and standout style — fashion that truly delivers.
          </p>
        </div>
        {/* Body Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center ">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-[#63b8aa] hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* description section */}
              <div className="p-4 text-center">
                {/* star rating  */}
                <div className="flex w-full items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold text-[#63b8aa]/80 group-hover:text-white">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button onClick={handleOrderPopup} className="bg-[#63b8aa] hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-[#63b8aa]" 
          
                >
                  Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
