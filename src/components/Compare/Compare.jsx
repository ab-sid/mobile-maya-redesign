import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Compare = () => {
  return (
    <section
      style={{ boxShadow: "0px 0px 2px 1px #eaeaea" }}
      className="max-w-[1110px] mx-auto border border-[#e9e9e9] bg-[#F2F3F5] mb-7 w-[96%] md:w-full"
    >
      {/* section header */}
      <div className="p-2 bg-white flex justify-between items-center font-oswald text-lg border-b-2">
        <h2 className="font-medium uppercase text-[#5A5759]">
          Latest Comparison
        </h2>
        <div className="flex gap-1 text-sm items-center text-[#344ff6]">
          <Link href="#">View More</Link>
          <span>
            <FaArrowRightLong />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-4 p-3 bg-white">
        <div
          style={{ boxShadow: "0px 0px 2px 1px #eaeaea" }}
          className="border border-[#e9e9e9] px-1 pt-2 pb-3"
        >
          <div className="grid grid-cols-2 relative">
            <span className="absolute top-10 left-1/2 -translate-x-1/2 bg-[#629fb6] z-40 text-white h-8 w-8 text-sm font-medium border-[8px] border-white box-content flex justify-center items-center rounded-full">
              Vs
            </span>
            <span className="w-[1.8px] h-[70%] -translate-x-1/2 bg-gray-200 absolute left-1/2 top-2"></span>
            <div className="pr-4 flex flex-col">
              <div className="relative h-36 w-full">
                <img
                  src="/assets/comparison/1.jpg"
                  alt=""
                  className="h-full mx-auto"
                />
                <span className="absolute top-0 right-[20%] bg-[#629fb6] text-white p-1 rounded">
                  83%
                </span>
              </div>
              <div className="text-center flex flex-col flex-grow mt-2">
                <h2 className="font-medium text-sm text-[#5A5759] flex-grow">
                  Tecno Prova 5 Pro 5G
                </h2>
                <span className="text-orange-800 font-medium pt-4 pb-2 inline-block">
                  Rs. 14,900
                </span>
              </div>
            </div>
            <div className="pl-4 flex flex-col">
              <div className="relative h-36 w-full">
                <img
                  src="/assets/comparison/2.jpg"
                  alt=""
                  className="h-full mx-auto"
                />
                <span className="absolute top-0 left-[20%] bg-[#629fb6] text-white p-1 rounded">
                  83%
                </span>
              </div>
              <div className="text-center flex flex-col flex-grow mt-2">
                <h2 className="font-medium text-sm text-[#5A5759] flex-grow">
                  Samsung Galaxy M34 5G
                </h2>
                <span className="text-orange-800 font-medium pt-4 pb-2 inline-block">
                  Rs. 12,900
                </span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button>
              <Link
                href="#"
                className="uppercase text-base inline-block border-2 border-[#629fb6] px-8 py-1 rounded text-[#629fb6] hover:text-white hover:bg-[#629fb6] duration-200"
              >
                Compare
              </Link>
            </button>
          </div>
        </div>
        <div
          style={{ boxShadow: "0px 0px 2px 1px #eaeaea" }}
          className="border border-[#e9e9e9] px-1 pt-2 pb-3"
        >
          <div className="grid grid-cols-2 relative">
            <span className="absolute top-10 left-1/2 -translate-x-1/2 bg-[#629fb6] z-40 text-white h-8 w-8 text-sm font-medium border-[8px] border-white box-content flex justify-center items-center rounded-full">
              Vs
            </span>
            <span className="w-[1.8px] h-[70%] -translate-x-1/2 bg-gray-200 absolute left-1/2 top-2"></span>
            <div className="pr-4 flex flex-col">
              <div className="relative h-36 w-full">
                <img
                  src="/assets/comparison/1.jpg"
                  alt=""
                  className="h-full mx-auto"
                />
                <span className="absolute top-0 right-[20%] bg-[#629fb6] text-white p-1 rounded">
                  83%
                </span>
              </div>
              <div className="text-center flex flex-col flex-grow mt-2">
                <h2 className="font-medium text-sm text-[#5A5759] flex-grow">
                  Tecno Prova 5 Pro 5G
                </h2>
                <span className="text-orange-800 font-medium pt-4 pb-2 inline-block">
                  Rs. 14,900
                </span>
              </div>
            </div>
            <div className="pl-4 flex flex-col">
              <div className="relative h-36 w-full">
                <img
                  src="/assets/comparison/2.jpg"
                  alt=""
                  className="h-full mx-auto"
                />
                <span className="absolute top-0 left-[20%] bg-[#629fb6] text-white p-1 rounded">
                  83%
                </span>
              </div>
              <div className="text-center flex flex-col flex-grow mt-2">
                <h2 className="font-medium text-sm text-[#5A5759] flex-grow">
                  Samsung Galaxy M34 5G
                </h2>
                <span className="text-orange-800 font-medium pt-4 pb-2 inline-block">
                  Rs. 12,900
                </span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button>
              <Link
                href="#"
                className="uppercase text-base inline-block border-2 border-[#629fb6] px-8 py-1 rounded text-[#629fb6] hover:text-white hover:bg-[#629fb6] duration-200"
              >
                Compare
              </Link>
            </button>
          </div>
        </div>
        <div
          style={{ boxShadow: "0px 0px 2px 1px #eaeaea" }}
          className="border border-[#e9e9e9] px-1 pt-2 pb-3"
        >
          <div className="grid grid-cols-2 relative">
            <span className="absolute top-10 left-1/2 -translate-x-1/2 bg-[#629fb6] z-40 text-white h-8 w-8 text-sm font-medium border-[8px] border-white box-content flex justify-center items-center rounded-full">
              Vs
            </span>
            <span className="w-[1.8px] h-[70%] -translate-x-1/2 bg-gray-200 absolute left-1/2 top-2"></span>
            <div className="pr-4 flex flex-col">
              <div className="relative h-36 w-full">
                <img
                  src="/assets/comparison/1.jpg"
                  alt=""
                  className="h-full mx-auto"
                />
                <span className="absolute top-0 right-[20%] bg-[#629fb6] text-white p-1 rounded">
                  83%
                </span>
              </div>
              <div className="text-center flex flex-col flex-grow mt-2">
                <h2 className="font-medium text-sm text-[#5A5759] flex-grow">
                  Tecno Prova 5 Pro 5G
                </h2>
                <span className="text-orange-800 font-medium pt-4 pb-2 inline-block">
                  Rs. 14,900
                </span>
              </div>
            </div>
            <div className="pl-4 flex flex-col">
              <div className="relative h-36 w-full">
                <img
                  src="/assets/comparison/2.jpg"
                  alt=""
                  className="h-full mx-auto"
                />
                <span className="absolute top-0 left-[20%] bg-[#629fb6] text-white p-1 rounded">
                  83%
                </span>
              </div>
              <div className="text-center flex flex-col flex-grow mt-2">
                <h2 className="font-medium text-sm text-[#5A5759] flex-grow">
                  Samsung Galaxy M34 5G
                </h2>
                <span className="text-orange-800 font-medium pt-4 pb-2 inline-block">
                  Rs. 12,900
                </span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button>
              <Link
                href="#"
                className="uppercase text-base inline-block border-2 border-[#629fb6] px-8 py-1 rounded text-[#629fb6] hover:text-white hover:bg-[#629fb6] duration-200"
              >
                Compare
              </Link>
            </button>
          </div>
        </div>
        <div
          style={{ boxShadow: "0px 0px 2px 1px #eaeaea" }}
          className="border border-[#e9e9e9] px-1 pt-2 pb-3"
        >
          <div className="grid grid-cols-2 relative">
            <span className="absolute top-10 left-1/2 -translate-x-1/2 bg-[#629fb6] z-40 text-white h-8 w-8 text-sm font-medium border-[8px] border-white box-content flex justify-center items-center rounded-full">
              Vs
            </span>
            <span className="w-[1.8px] h-[70%] -translate-x-1/2 bg-gray-200 absolute left-1/2 top-2"></span>
            <div className="pr-4 flex flex-col">
              <div className="relative h-36 w-full">
                <img
                  src="/assets/comparison/1.jpg"
                  alt=""
                  className="h-full mx-auto"
                />
                <span className="absolute top-0 right-[20%] bg-[#629fb6] text-white p-1 rounded">
                  83%
                </span>
              </div>
              <div className="text-center flex flex-col flex-grow mt-2">
                <h2 className="font-medium text-sm text-[#5A5759] flex-grow">
                  Tecno Prova 5 Pro 5G
                </h2>
                <span className="text-orange-800 font-medium pt-4 pb-2 inline-block">
                  Rs. 14,900
                </span>
              </div>
            </div>
            <div className="pl-4 flex flex-col">
              <div className="relative h-36 w-full">
                <img
                  src="/assets/comparison/2.jpg"
                  alt=""
                  className="h-full mx-auto"
                />
                <span className="absolute top-0 left-[20%] bg-[#629fb6] text-white p-1 rounded">
                  83%
                </span>
              </div>
              <div className="text-center flex flex-col flex-grow mt-2">
                <h2 className="font-medium text-sm text-[#5A5759] flex-grow">
                  Samsung Galaxy M34 5G
                </h2>
                <span className="text-orange-800 font-medium pt-4 pb-2 inline-block">
                  Rs. 12,900
                </span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button>
              <Link
                href="#"
                className="uppercase text-base inline-block border-2 border-[#629fb6] px-8 py-1 rounded text-[#629fb6] hover:text-white hover:bg-[#629fb6] duration-200"
              >
                Compare
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compare;
