import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-300 min-h-[80vh]">
      {/* Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center px-6 sm:px-10 py-10 sm:py-0">
        <div className="text-[#414141] text-center sm:text-left">
          {/* Top Line + Text */}
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BEST SELLERS</p>
          </div>

          {/* Heading */}
          <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl leading-snug sm:leading-snug py-4">
            Latest Arrivals
          </h1>

          {/* Shop Now */}
          <div className="flex items-center gap-2 justify-center sm:justify-start mt-2">
            <p className="font-semibold text-sm md:text-base cursor-pointer">
              SHOP NOW
            </p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="w-full sm:w-1/2 flex justify-center items-center p-4 sm:p-0">
        <img
          className="w-full max-h-[450px] object-cover sm:object-contain"
          src={assets.hero_img}
          alt="Hero Banner"
        />
      </div>
    </div>
  );
};

export default Hero;
