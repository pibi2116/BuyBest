import React from "react";
import Slider from "react-slick";

const TestimonialsData = [
  {
    id: 1,
    name: "James Anderson",
    text: "BuyBest offers an amazing collection and quick delivery. I’m thrilled with the quality and style of every purchase!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Emily Johnson",
    text: "The customer service at BuyBest is outstanding, and the fashion choices are always on point. Highly recommend!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Michael Smith",
    text: "I love how easy it is to find trendy clothes at great prices. BuyBest has become my go-to online store.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sophia Williams",
    text: "Fast shipping, quality fabrics, and stylish designs—BuyBest never disappoints. Shopping here is a joy!",
    img: "https://picsum.photos/103/103",
  },
];


const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          {/* Header section  */}
          <p data-aos="fade-up" className="text-sm text-primary">
            Reviews from our Dear Customers
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            inventore laboriosam error.
          </p>
        </div>
        {/* Testimonial Cards section  */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialsData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      className=" w-20 h-20 rounded-full"
                      src={data.img}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-gray-300">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0 " >
                  
                  ”</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
