"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <section
      style={{ boxShadow: "0px 0px 2px 1px #eaeaea" }}
      className="max-w-[1110px] mx-auto bg-white mb-3 overflow-visible w-[96%] md:w-full"
    >
      {/* section header */}
      <div className="p-2 bg-white flex justify-between items-center font-oswald text-lg border-b-2">
        <h2 className="font-medium uppercase text-[#5A5759]">
          Latest & Upcoming Mobile
        </h2>
        <div className="flex gap-1 text-sm items-center text-[#344ff6]">
          <Link href="#">View More</Link>
          <span>
            <FaArrowRightLong />
          </span>
        </div>
      </div>

      {/* slider */}
      <div className="p-3">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 2,
            }, // Mobile
            640: {
              slidesPerView: 3,
            }, // Tablet
            768: {
              slidesPerView: 4,
            }, // Small Desktop
            1024: {
              slidesPerView: 6,
            }, // Large Desktop
          }}
          spaceBetween={15}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="md:w-[166.5px] border border-[#e9e9e9] bg-white group pro-card">
              <div className="absolute top-1 left-1 p-[1px] px-2 bg-teal-50 bg-opacity-50 rounded-full flex items-center gap-1 z-10">
                <span>4.5</span>
                <span className="text-teal-600 text-xs">
                  <FaStar />
                </span>
              </div>
              <div className="h-40 flex relative justify-center pb-2 pt-4 overflow-hidden w-full">
                <img
                  src="/assets/latest/mobile2.jpg"
                  alt=""
                  className="group-hover:scale-125 duration-300"
                />
              </div>
              <div>
                <h2 className="font-oswald text-[#5A5759] text-center text-base mb-3">
                  Xiomi Poco C53
                </h2>
                <h2 className="text-center text-[#344ff6] font-medium text-base mb-1">
                  ৳. 19,999
                  <span className="text-sm text-orange-500 font-normal ml-[4px]">
                    (Official)
                  </span>
                </h2>
              </div>
              <button className="flex items-center justify-center space-x-1 text-[#5A5759] bg-[#f2f3f5] py-1 border-t-[#e4e4e4] border-t-[1px] w-full hover:bg-neutral-200 duration-300 hover:font-medium">
                <span className="text-xs">
                  <FaPlus />
                </span>
                <span>Compare</span>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:w-[166.5px] border border-[#e9e9e9] bg-white group pro-card">
              <div className="absolute top-1 left-1 p-[1px] px-2 bg-teal-50 bg-opacity-50 rounded-full flex items-center gap-1 z-10">
                <span>4.5</span>
                <span className="text-teal-600 text-xs">
                  <FaStar />
                </span>
              </div>
              <div className="h-40 flex relative justify-center pb-2 pt-4 overflow-hidden w-full">
                <img
                  src="/assets/latest/mobile1.jpg"
                  alt=""
                  className="group-hover:scale-125 duration-300"
                />
              </div>
              <div>
                <h2 className="font-oswald text-[#5A5759] text-center text-base mb-3">
                  Xiomi Poco C53
                </h2>
                <h2 className="text-center text-[#344ff6] font-medium text-base mb-1">
                  ৳. 19,999
                  <span className="text-sm text-orange-500 font-normal ml-[4px]">
                    (Official)
                  </span>
                </h2>
              </div>
              <button className="flex items-center justify-center space-x-1 text-[#5A5759] bg-[#f2f3f5] py-1 border-t-[#e4e4e4] border-t-[1px] w-full hover:bg-neutral-200 duration-300 hover:font-medium">
                <span className="text-xs">
                  <FaPlus />
                </span>
                <span>Compare</span>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:w-[166.5px] border border-[#e9e9e9] bg-white group pro-card">
              <div className="absolute top-1 left-1 p-[1px] px-2 bg-teal-50 bg-opacity-50 rounded-full flex items-center gap-1 z-10">
                <span>4.5</span>
                <span className="text-teal-600 text-xs">
                  <FaStar />
                </span>
              </div>
              <div className="h-40 flex relative justify-center pb-2 pt-4 overflow-hidden w-full">
                <img
                  src="/assets/latest/mobile2.jpg"
                  alt=""
                  className="group-hover:scale-125 duration-300"
                />
              </div>
              <div>
                <h2 className="font-oswald text-[#5A5759] text-center text-base mb-3">
                  Xiomi Poco C53
                </h2>
                <h2 className="text-center text-[#344ff6] font-medium text-base mb-1">
                  ৳. 19,999
                  <span className="text-sm text-orange-500 font-normal ml-[4px]">
                    (Official)
                  </span>
                </h2>
              </div>
              <button className="flex items-center justify-center space-x-1 text-[#5A5759] bg-[#f2f3f5] py-1 border-t-[#e4e4e4] border-t-[1px] w-full hover:bg-neutral-200 duration-300 hover:font-medium">
                <span className="text-xs">
                  <FaPlus />
                </span>
                <span>Compare</span>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:w-[166.5px] border border-[#e9e9e9] bg-white group pro-card">
              <div className="absolute top-1 left-1 p-[1px] px-2 bg-teal-50 bg-opacity-50 rounded-full flex items-center gap-1 z-10">
                <span>4.5</span>
                <span className="text-teal-600 text-xs">
                  <FaStar />
                </span>
              </div>
              <div className="h-40 flex relative justify-center pb-2 pt-4 overflow-hidden w-full">
                <img
                  src="/assets/latest/mobile1.jpg"
                  alt=""
                  className="group-hover:scale-125 duration-300"
                />
              </div>
              <div>
                <h2 className="font-oswald text-[#5A5759] text-center text-base mb-3">
                  Xiomi Poco C53
                </h2>
                <h2 className="text-center text-[#344ff6] font-medium text-base mb-1">
                  ৳. 19,999
                  <span className="text-sm text-orange-500 font-normal ml-[4px]">
                    (Official)
                  </span>
                </h2>
              </div>
              <button className="flex items-center justify-center space-x-1 text-[#5A5759] bg-[#f2f3f5] py-1 border-t-[#e4e4e4] border-t-[1px] w-full hover:bg-neutral-200 duration-300 hover:font-medium">
                <span className="text-xs">
                  <FaPlus />
                </span>
                <span>Compare</span>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:w-[166.5px] border border-[#e9e9e9] bg-white group pro-card">
              <div className="absolute top-1 left-1 p-[1px] px-2 bg-teal-50 bg-opacity-50 rounded-full flex items-center gap-1 z-10">
                <span>4.5</span>
                <span className="text-teal-600 text-xs">
                  <FaStar />
                </span>
              </div>
              <div className="h-40 flex relative justify-center pb-2 pt-4 overflow-hidden w-full">
                <img
                  src="/assets/latest/mobile2.jpg"
                  alt=""
                  className="group-hover:scale-125 duration-300"
                />
              </div>
              <div>
                <h2 className="font-oswald text-[#5A5759] text-center text-base mb-3">
                  Xiomi Poco C53
                </h2>
                <h2 className="text-center text-[#344ff6] font-medium text-base mb-1">
                  ৳. 19,999
                  <span className="text-sm text-orange-500 font-normal ml-[4px]">
                    (Official)
                  </span>
                </h2>
              </div>
              <button className="flex items-center justify-center space-x-1 text-[#5A5759] bg-[#f2f3f5] py-1 border-t-[#e4e4e4] border-t-[1px] w-full hover:bg-neutral-200 duration-300 hover:font-medium">
                <span className="text-xs">
                  <FaPlus />
                </span>
                <span>Compare</span>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:w-[166.5px] border border-[#e9e9e9] bg-white group pro-card">
              <div className="absolute top-1 left-1 p-[1px] px-2 bg-teal-50 bg-opacity-50 rounded-full flex items-center gap-1 z-10">
                <span>4.5</span>
                <span className="text-teal-600 text-xs">
                  <FaStar />
                </span>
              </div>
              <div className="h-40 flex relative justify-center pb-2 pt-4 overflow-hidden w-full">
                <img
                  src="/assets/latest/mobile1.jpg"
                  alt=""
                  className="group-hover:scale-125 duration-300"
                />
              </div>
              <div>
                <h2 className="font-oswald text-[#5A5759] text-center text-base mb-3">
                  Xiomi Poco C53
                </h2>
                <h2 className="text-center text-[#344ff6] font-medium text-base mb-1">
                  ৳. 19,999
                  <span className="text-sm text-orange-500 font-normal ml-[4px]">
                    (Official)
                  </span>
                </h2>
              </div>
              <button className="flex items-center justify-center space-x-1 text-[#5A5759] bg-[#f2f3f5] py-1 border-t-[#e4e4e4] border-t-[1px] w-full hover:bg-neutral-200 duration-300 hover:font-medium">
                <span className="text-xs">
                  <FaPlus />
                </span>
                <span>Compare</span>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:w-[166.5px] border border-[#e9e9e9] bg-white group pro-card">
              <div className="absolute top-1 left-1 p-[1px] px-2 bg-teal-50 bg-opacity-50 rounded-full flex items-center gap-1 z-10">
                <span>4.5</span>
                <span className="text-teal-600 text-xs">
                  <FaStar />
                </span>
              </div>
              <div className="h-40 flex relative justify-center pb-2 pt-4 overflow-hidden w-full">
                <img
                  src="/assets/latest/mobile2.jpg"
                  alt=""
                  className="group-hover:scale-125 duration-300"
                />
              </div>
              <div>
                <h2 className="font-oswald text-[#5A5759] text-center text-base mb-3">
                  Xiomi Poco C53
                </h2>
                <h2 className="text-center text-[#344ff6] font-medium text-base mb-1">
                  ৳. 19,999
                  <span className="text-sm text-orange-500 font-normal ml-[4px]">
                    (Official)
                  </span>
                </h2>
              </div>
              <button className="flex items-center justify-center space-x-1 text-[#5A5759] bg-[#f2f3f5] py-1 border-t-[#e4e4e4] border-t-[1px] w-full hover:bg-neutral-200 duration-300 hover:font-medium">
                <span className="text-xs">
                  <FaPlus />
                </span>
                <span>Compare</span>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:w-[166.5px] border border-[#e9e9e9] bg-white group pro-card">
              <div className="absolute top-1 left-1 p-[1px] px-2 bg-teal-50 bg-opacity-50 rounded-full flex items-center gap-1 z-10">
                <span>4.5</span>
                <span className="text-teal-600 text-xs">
                  <FaStar />
                </span>
              </div>
              <div className="h-40 flex relative justify-center pb-2 pt-4 overflow-hidden w-full">
                <img
                  src="/assets/latest/mobile1.jpg"
                  alt=""
                  className="group-hover:scale-125 duration-300"
                />
              </div>
              <div>
                <h2 className="font-oswald text-[#5A5759] text-center text-base mb-3">
                  Xiomi Poco C53
                </h2>
                <h2 className="text-center text-[#344ff6] font-medium text-base mb-1">
                  ৳. 19,999
                  <span className="text-sm text-orange-500 font-normal ml-[4px]">
                    (Official)
                  </span>
                </h2>
              </div>
              <button className="flex items-center justify-center space-x-1 text-[#5A5759] bg-[#f2f3f5] py-1 border-t-[#e4e4e4] border-t-[1px] w-full hover:bg-neutral-200 duration-300 hover:font-medium">
                <span className="text-xs">
                  <FaPlus />
                </span>
                <span>Compare</span>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
