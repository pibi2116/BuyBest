import React from "react";


const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 text-white bg-gradient-to-r from-[#228cb3] to-[#22b37e] dark:bg-black/90"
    >
      <div className="container back-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 data-aos="zoom-in" className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            data-aos="zoom-in"
            type="text"
            placeholder="Enter your email"
            className="w-full p-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
