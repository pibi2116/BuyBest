import React from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";

const ImageList = [
  {
  id: 1,
  img: Image1,
  title: "Up to 50% off on all Men's Wear",
  description: "Discover top deals on trendy and classic men’s fashion essentials.",
},
{
  id: 2,
  img: Image2,
  title: "30% off on all Women's Wear",
  description: "Style meets savings with fashionable picks for every woman.",
},
{
  id: 3,
  img: Image3,
  title: "70% off on all Products Sale",
  description: "Massive markdowns on must-have fashion for everyone.",
},

];

const Hero = ({handleOrderPopup}) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] dark:bg-gray-950 sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:text-white duration-200">
      {/* background */}
      <div className="h-[700px] w-[700px] bg-primary/10 absolute -top-1/6 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div className="px-12">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl font-bold sm:text-6xl lg:text-7xl "
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-sm "
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    <button onClick={handleOrderPopup} className="bg-gradient-to-r from-[#228cb3] to-[#22b37e]  duration-200 text-white py-2 px-4 rounded-full hover:scale-105 ">
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10 "
                  >
                    <img
                      className="w-[300px] h-[300px]  sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto"
                      src={data.img}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
