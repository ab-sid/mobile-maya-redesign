import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const LatestMobile = () => {
  return (
    <section
      style={{ boxShadow: "0px px 2px 1px #eaeaea" }}
      className="max-w-[1110px] mx-auto border border-[#e9e9e9] bg-white mb-3 w-[98%] md:w-full"
    >
      {/* section header */}
      <div className="p-2 bg-white flex justify-between items-center font-oswald text-lg border-b-2">
        <h2 className="font-medium uppercase text-[#5A5759]">
          Latest Mobile Phones
        </h2>
        <div className="flex gap-1 text-sm items-center text-[#344ff6]">
          <Link href="#">View More</Link>
          <span>
            <FaArrowRightLong />
          </span>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3 p-3 ">
        {/* grid card start */}
        <div className="border border-[#e9e9e9] bg-white group pro-card relative">
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
        <div className="border border-[#e9e9e9] bg-white group pro-card relative">
          <div className="absolute top-1 left-1 p-[1px] px-2 bg-teal-50 bg-opacity-50 rounded-full flex items-center gap-1 z-10">
            <span>4.5</span>
            <span className="text-teal-600 text-xs">
              <FaStar />
            </span>
          </div>
          <div className="h-40 flex relative justify-center pb-2 pt-4 overflow-hidden w-full">
            <img
              src="/assets/latest/mobile1.png"
              alt=""
              className="group-hover:scale-125 duration-300"
            />
          </div>
          <div>
            <h2 className="font-oswald text-[#5A5759] text-center text-base mb-3">
              Google Pixel 8 Pro
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
        <div className="border border-[#e9e9e9] bg-white group pro-card relative">
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
              Apple Iphone 16 Pro Max
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
        <div className="border border-[#e9e9e9] bg-white group pro-card relative">
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
        <div className="border border-[#e9e9e9] bg-white group pro-card relative">
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
              Samsung S25 Ultra
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
        <div className="border border-[#e9e9e9] bg-white group pro-card relative">
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
        <div className="border border-[#e9e9e9] bg-white group pro-card relative">
          <div className="absolute top-1 left-1 p-[1px] px-2 bg-teal-50 bg-opacity-50 rounded-full flex items-center gap-1 z-10">
            <span>4.5</span>
            <span className="text-teal-600 text-xs">
              <FaStar />
            </span>
          </div>
          <div className="h-40 flex relative justify-center pb-2 pt-4 overflow-hidden w-full">
            <img
              src="/assets/latest/mobile1.png"
              alt=""
              className="group-hover:scale-125 duration-300"
            />
          </div>
          <div>
            <h2 className="font-oswald text-[#5A5759] text-center text-base mb-3">
              Google Pixel 8 Pro
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
        <div className="border border-[#e9e9e9] bg-white group pro-card relative">
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
              Apple Iphone 16 Pro Max
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
        <div className="border border-[#e9e9e9] bg-white group pro-card relative">
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
        <div className="border border-[#e9e9e9] bg-white group pro-card relative">
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
              Samsung S25 Ultra
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
      </div>
    </section>
  );
};

export default LatestMobile;
