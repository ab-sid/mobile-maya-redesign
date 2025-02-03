"use client";
import Link from "next/link";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const FindProducts = () => {
  // material ui
  const [value, setValue] = useState([15999, 28999]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="max-w-[1110px] mx-auto grid grid-cols-1 lg:grid-cols-2 pt-7 pb-3 gap-5 lg:gap-3">
      {/* first column */}
      <div
        style={{ boxShadow: "0px 0px 2px 1px #eaeaea" }}
        className="py-3 px-4 lg:px-7 bg-white border border-[#e9e9e9] w-[97%] lg:w-full mx-auto"
      >
        <div className="grid grid-cols-12 gap-7">
          <div className="lg:col-span-7 col-span-12">
            <div>
              <h2 className="uppercase text-[#515ca9] text-3xl font-medium font-oswald text-center pb-6">
                lets find a mobile
              </h2>
              {/* price range */}
              <div>
                <Box>
                  <Slider
                    getAriaLabel={() => "Price range"}
                    value={value}
                    onChange={handleChange}
                    // valueLabelDisplay="auto"
                    // valueLabelFormat={(value) => `$${value}`} // Display the value as a price
                    min={15999} // Set the minimum value
                    max={28999} // Set the maximum value
                  />
                </Box>
              </div>
              {/* price update field */}
              <div className="flex justify-center items-center pt-3 mb-6">
                <div className="flex items-center gap-1 mr-2">
                  <span className="font-bold text-[#5A5759]">TK.</span>
                  <input
                    type="text"
                    value={value[0]}
                    className="w-full lg:w-28 border-2 rounded outline-none px-2 py-1 text-[#5A5759]"
                    readOnly
                  />
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-[#5A5759]">TK.</span>
                  <input
                    type="text"
                    value={value[1]}
                    className="w-full lg:w-28 border-2 rounded outline-none px-2 py-1 text-[#5A5759]"
                    readOnly
                  />
                </div>
              </div>
              <div className="flex justify-center text-center">
                <button className="flex items-center px-12 py-1 bg-[#515CA9] text-white text-lg uppercase rounded-md font-bold">
                  <span>FIND PRODUCTS</span>
                  <span className="text-2xl">
                    <MdKeyboardArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* By price */}
          <div className="lg:col-span-5 col-span-12 relative">
            {/* <span className="border-[0.5px] absolute -left-3 top-12 h-[74%]"></span> */}
            <span className="hidden lg:block w-[1px] h-[69%] top-[60%] -translate-y-1/2 -left-2 bg-neutral-200 absolute"></span>

            <div className="flex items-center justify-between">
              <h3 className="font-bold text-xl text-neutral-700 pb-3">
                By Price
              </h3>

              {/* Toggle Icon for mobile */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-neutral-700"
              >
                {isOpen ? (
                  <FaAngleUp className="w-5 h-5" />
                ) : (
                  <FaAngleDown className="w-5 h-5" />
                )}
              </button>
            </div>

            <span className="w-full bg-neutral-200 h-[1.6px] absolute"></span>

            <div className="pt-3">
              {/* The list of options, collapsed on mobile */}
              <ul
                className={`grid grid-cols-2 md:grid-cols-1 gap-x-1 font-medium pl-1 md:pr-6 ${
                  isOpen ? "block" : "hidden"
                } lg:block`}
              >
                <li className="mb-1 hover:underline">
                  <Link href="#" className="text-[#344ff6]">
                    Below BDT. 5,000
                  </Link>
                </li>
                <li className="mb-1 hover:underline">
                  <Link href="#" className="text-[#344ff6]">
                    BDT. 5,001 To 10,000
                  </Link>
                </li>
                <li className="mb-1 hover:underline">
                  <Link href="#" className="text-[#344ff6]">
                    BDT. 10,001 To 25,000
                  </Link>
                </li>
                <li className="mb-1 hover:underline">
                  <Link href="#" className="text-[#344ff6]">
                    BDT. 25,001 To 40,000
                  </Link>
                </li>
                <li className="mb-1 hover:underline">
                  <Link href="#" className="text-[#344ff6]">
                    BDT. 40,001 To 60,000
                  </Link>
                </li>
                <li className="mb-1 hover:underline">
                  <Link href="#" className="text-[#344ff6]">
                    Over BDT. 60,000
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* second column */}
      <div
        style={{ boxShadow: "0px 0px 2px 1px #eaeaea" }}
        className="grid grid-cols-1 md:grid-cols-2 md:gap-12 py-3 px-4 md:px-7 bg-white border border-[#e9e9e9] w-[97%] md:w-full mx-auto"
      >
        {/* by brand */}
        <div className="relative md:pl-3">
          {/* Heading and toggle button for mobile */}
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-xl text-neutral-700 pb-3">
              By Brand
            </h3>
            <button
              onClick={() => setIsOpen2(!isOpen2)}
              className="md:hidden text-neutral-700"
            >
              {isOpen2 ? (
                <FaAngleUp className="w-5 h-5" />
              ) : (
                <FaAngleDown className="w-5 h-5" />
              )}
            </button>
          </div>

          <span className="w-full bg-neutral-200 h-[1.6px] absolute"></span>

          <div className="mt-3">
            {/* The list of brands, collapsed on mobile */}
            <ul
              className={`grid md:grid-cols-2 grid-cols-3  gap-y-1 pb-4 md:pb-0 ${
                isOpen2 ? "block" : "hidden"
              } md:grid`}
            >
              <li className="hover:underline">
                <Link className="text-[#344ff6]" href="#">
                  Samsung
                </Link>
              </li>
              <li className="hover:underline">
                <Link className="text-[#344ff6]" href="#">
                  OnePlus
                </Link>
              </li>
              <li className="hover:underline">
                <Link className="text-[#344ff6]" href="#">
                  Xiaomi
                </Link>
              </li>
              <li className="hover:underline">
                <Link className="text-[#344ff6]" href="#">
                  Motorola
                </Link>
              </li>
              <li className="hover:underline">
                <Link className="text-[#344ff6]" href="#">
                  Asus
                </Link>
              </li>
              <li className="hover:underline">
                <Link className="text-[#344ff6]" href="#">
                  Vivo
                </Link>
              </li>
              <li className="hover:underline">
                <Link className="text-[#344ff6]" href="#">
                  Apple
                </Link>
              </li>
              <li className="hover:underline">
                <Link className="text-[#344ff6]" href="#">
                  Realme
                </Link>
              </li>
              <li className="hover:underline">
                <Link className="text-[#344ff6]" href="#">
                  Nokia
                </Link>
              </li>
              <li className="hover:underline">
                <Link className="text-[#344ff6]" href="#">
                  Google
                </Link>
              </li>
              <li className="hover:underline">
                <Link className="text-[#344ff6]" href="#">
                  Oppo
                </Link>
              </li>
              <li className="hover:underline">
                <Link className="text-[#344ff6]" href="#">
                  Micromax
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* by features */}
        <div className="relative">
          {/* Heading and toggle button for mobile */}
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-xl text-neutral-700 pb-3">
              By Features
            </h3>
            <button
              onClick={() => setIsOpen3(!isOpen3)}
              className="lg:hidden text-neutral-700"
            >
              {isOpen3 ? (
                <FaAngleUp className="w-5 h-5" />
              ) : (
                <FaAngleDown className="w-5 h-5" />
              )}
            </button>
          </div>

          <span className="w-full bg-neutral-200 h-[1.6px] absolute"></span>

          <div className="mt-3">
            {/* The list of features with transition effect */}
            <ul
              className={`grid grid-cols-1 gap-1 overflow-hidden transition-all duration-300 ease-in-out
            ${
              isOpen3 ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            } lg:max-h-none lg:opacity-100 lg:block`}
            >
              <li className="hover:underline">
                <Link className="text-[#344ff6]" href="#">
                  4G VoLTE Mobile Phones
                </Link>
              </li>
              <li className="hover:underline">
                <Link className="text-[#344ff6]" href="#">
                  5G Mobile
                </Link>
              </li>
              <li className="hover:underline">
                <Link className="text-[#344ff6]" href="#">
                  Punch-hole Camera Mobiles
                </Link>
              </li>
              <li className="hover:underline">
                <Link className="text-[#344ff6]" href="#">
                  Waterproof Mobile
                </Link>
              </li>
              <li className="hover:underline">
                <Link className="text-[#344ff6]" href="#">
                  Slim Mobiles
                </Link>
              </li>
              <li className="hover:underline">
                <Link className="text-[#344ff6]" href="#">
                  Lightweight Mobiles
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindProducts;
