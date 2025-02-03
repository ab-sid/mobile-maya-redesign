"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5"; // Import the close icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Black Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          // onClick={() => setMenuOpen(false)}
        ></div>
      )}
      {/* Mobile Navbar */}
      <div className="lg:hidden bg-white p-2">
        <div className="flex justify-between items-center">
          <span onClick={() => setMenuOpen(!menuOpen)}>
            <IoMdMenu className="w-8 h-8" />
          </span>
          <Image src="/assets/logo.png" width={160} height={59} alt="logo" />
          <button className="border-[2px] px-2 py-[2px] rounded border-neutral-600 bg-opacity-15">
            <Link href="#">
              <IoSearch className="w-5 h-5" />
            </Link>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu with Slide-in Effect */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-50 transform transition-all duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "66%" }} // Sidebar will take 2/3 of the screen width
      >
        {/* Menu Content */}
        <div className="">
          <div
            style={{ boxShadow: "0px 2px 4px -2px rgba(0, 0, 0, 0.2)" }}
            className=""
          >
            <div className="flex justify-between items-center px-4 py-2">
              <Image
                src="/assets/logo.png"
                width={128}
                height={47}
                alt="sidebar logo"
              ></Image>
              <div className="flex items-center gap-5">
                <span className="mt-[6px]">
                  <Link className="flex relative" href="#">
                    <IoIosNotifications className="text-2xl text-[#5A5759]" />
                    <span className="w-4 h-4 bg-red-600 flex justify-center items-center rounded-full text-white text-[12px] absolute right-0 -top-1">
                      9
                    </span>
                  </Link>
                </span>
                <button className="bg-white border-none text-[#5A5759] text-xl p-0">
                  <FaUser />
                </button>
              </div>
            </div>
          </div>
          {/* <ul className="pl-4">
            <li className="py-2">
              <Link href="#" className="text-[#ffa500]">
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link href="#" className="text-[#5a5759]">
                Top 10
              </Link>
            </li>
            <li className="py-2">
              <Link href="#" className="text-[#5a5759]">
                Brands
              </Link>
            </li>
            <li className="py-2">
              <Link href="#" className="text-[#5a5759]">
                Mobile Collections
              </Link>
            </li>
            <li className="py-2">
              <Link href="#" className="text-[#5a5759]">
                Mobiles
              </Link>
            </li>
            <li className="py-2">
              <Link href="#" className="text-[#5a5759]">
                Comparison
              </Link>
            </li>
            <li className="py-2">
              <Link href="#" className="text-[#5a5759]">
                Price List
              </Link>
            </li>
            <li className="py-2">
              <Link href="#" className="text-[#5a5759]">
                Compare
              </Link>
            </li>
            <li className="py-2">
              <Link href="#" className="text-[#5a5759]">
                Showrooms
              </Link>
            </li>
            <li className="py-2">
              <Link href="#" className="text-[#5a5759]">
                Service Centers
              </Link>
            </li>
            <li className="py-2">
              <Link href="#" className="text-[#5a5759]">
                Reviews
              </Link>
            </li>
            <li className="py-2">
              <Link href="#" className="text-[#5a5759]">
                News & Tips
              </Link>
            </li>
          </ul> */}
          <ul className="flex flex-col font-bold">
            <li className="pl-4 py-2">
              <Link href="#" className="text-[#ffa500] hover:text-[#ffa500]">
                Home
              </Link>
            </li>
            <li className="pl-4 py-2">
              <Link href="#" className="text-[#5a5759] hover:text-[#ffa500]">
                Top 10
              </Link>
            </li>
            <li className="pl-4 py-2">
              <Link href="#" className="text-[#5a5759] hover:text-[#ffa500]">
                Brands
              </Link>
            </li>
            <li className="pl-4 py-2 relative group">
              <Link
                href="#"
                className="text-[#5a5759] flex items-center transition-colors duration-300
                   group-hover:text-[#ffa500]"
              >
                Mobile Collections
                <span
                  className="text-[#5a5759] text-2xl transition-transform duration-300 
                    group-hover:text-[#ffa500] group-hover:rotate-90"
                >
                  <MdOutlineKeyboardArrowRight />
                </span>
              </Link>
              <ul
                className="absolute left-0 mt-2 w-40 pl-2 py-2 bg-[#F2F3F5] shadow border-t-2 hidden 
                    group-hover:block group-hover:dropdown-hover"
              >
                <li>
                  <Link
                    href="#"
                    className="block pl-4 py-2 text-[#5a5759] hover:bg-gray-100 hover:text-[#ffa500]"
                  >
                    Mobile
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block pl-4 py-2 text-[#5a5759] hover:bg-gray-100 hover:text-[#ffa500]"
                  >
                    Tablet
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block pl-4 py-2 text-[#5a5759] hover:bg-gray-100 hover:text-[#ffa500]"
                  >
                    Laptop
                  </Link>
                </li>
              </ul>
            </li>
            <li className="pl-4 py-2">
              <Link href="#" className="text-[#5a5759] hover:text-[#ffa500]">
                Mobiles
              </Link>
            </li>
            <li className="pl-4 py-2">
              <Link href="#" className="text-[#5a5759] hover:text-[#ffa500]">
                Comparison
              </Link>
            </li>
            <li className="pl-4 py-2">
              <Link href="#" className="text-[#5a5759] hover:text-[#ffa500]">
                Price List
              </Link>
            </li>
            <li className="pl-4 py-2">
              <Link href="#" className="text-[#5a5759] hover:text-[#ffa500]">
                Compare
              </Link>
            </li>
            <li className="pl-4 py-2">
              <Link href="#" className="text-[#5a5759] hover:text-[#ffa500]">
                Showrooms
              </Link>
            </li>
            <li className="pl-4 py-2">
              <Link href="#" className="text-[#5a5759] hover:text-[#ffa500]">
                Service Centers
              </Link>
            </li>
            <li className="pl-4 py-2">
              <Link href="#" className="text-[#5a5759] hover:text-[#ffa500]">
                Reviews
              </Link>
            </li>
            <li className="pl-4 py-2">
              <Link href="#" className="text-[#5a5759] hover:text-[#ffa500]">
                News & Tips
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Close Icon Outside the Sidebar, Positioned to the Right */}
      {menuOpen && (
        <button
          onClick={() => setMenuOpen(false)}
          className="lg:hidden fixed text-3xl flex justify-center items-center top-3 left-[67%] z-50 size-8 text-gray-500 bg-[#ffe3e3a9] rounded-md transform transition-all duration-300 ease-in-out"
        >
          <IoClose className="w-5 h-5" />
        </button>
      )}

      {/* Desktop Navbar */}
      <div className="hidden lg:block">
        <div className="border-b-2 bg-[#F2F3F5]">
          <div className="flex justify-between py-1 max-w-[1110px] mx-auto">
            <h2 className="font-normal text-neutral-500 font-roboto">
              Largest Gadget Site in Bangladesh
            </h2>
            <span>
              <Link className="flex relative" href="#">
                <IoIosNotifications className="text-2xl text-[#5A5759]" />
                <span className="w-4 h-4 bg-red-600 flex justify-center items-center rounded-full text-white text-[12px] absolute right-0 -top-1">
                  9
                </span>
              </Link>
            </span>
          </div>
        </div>

        <div className="bg-white">
          <div className="flex justify-between items-center max-w-[1110px] mx-auto bg-white py-2">
            <div>
              <Image
                src="/assets/logo.png"
                width={240}
                height={240}
                alt="logo"
              />
            </div>

            <div className="relative">
              <label className="flex items-center gap-0 w-[450px] rounded border-2 border-neutral-400 pl-2 py-0">
                <input
                  type="text"
                  className="w-full bg-transparent outline-none border-none focus:ring-0"
                  placeholder="What are you looking for?"
                />
                <select
                  className="bg-neutral-300 py-[6px] pl-3 pr-4 h-full font-medium text-[#5a5759] rounded-none focus:outline-none focus:ring-0 mr-0"
                  defaultValue="Mobile"
                >
                  <option>All</option>
                  <option>Mobile</option>
                  <option>Tablet</option>
                  <option>Laptop</option>
                </select>

                <span className="bg-[#F5F5F5] px-4 py-[6px] font-bold text-black text-xl">
                  <Link href="#">
                    <CiSearch />
                  </Link>
                </span>
              </label>
            </div>

            <div>
              <button className="bg-white border-none text-[#5A5759] text-xl p-0">
                <FaUser />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#F2F3F5] shadow-md shadow-neutral-300 z-50 relative">
          <div className="max-w-[1110px] mx-auto">
            <ul className="flex font-bold">
              <li className="pl-3 py-[10px]">
                <Link href="#" className="text-[#ffa500] hover:text-[#ffa500]">
                  Home
                </Link>
              </li>
              <li className="pl-3 py-[10px]">
                <Link href="#" className="text-[#5a5759] hover:text-[#ffa500]">
                  Top 10
                </Link>
              </li>
              <li className="pl-3 py-[10px]">
                <Link href="#" className="text-[#5a5759] hover:text-[#ffa500]">
                  Brands
                </Link>
              </li>
              <li className="pl-3 py-[10px] relative group">
                <Link
                  href="#"
                  className="text-[#5a5759] flex items-center transition-colors duration-300
                   group-hover:text-[#ffa500]"
                >
                  Mobile Collections
                  <span
                    className="text-[#5a5759] text-2xl transition-transform duration-300 
                    group-hover:text-[#ffa500] group-hover:rotate-90"
                  >
                    <MdOutlineKeyboardArrowRight />
                  </span>
                </Link>
                <ul
                  className="absolute left-0 mt-2 w-40 pl-2 py-2 bg-[#F2F3F5] shadow border-t-2 hidden 
                    group-hover:block group-hover:dropdown-hover"
                >
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-[#5a5759] hover:bg-gray-100 hover:text-[#ffa500]"
                    >
                      Mobile
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-[#5a5759] hover:bg-gray-100 hover:text-[#ffa500]"
                    >
                      Tablet
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-[#5a5759] hover:bg-gray-100 hover:text-[#ffa500]"
                    >
                      Laptop
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="pl-3 py-[10px]">
                <Link href="#" className="text-[#5a5759] hover:text-[#ffa500]">
                  Mobiles
                </Link>
              </li>
              <li className="pl-3 py-[10px]">
                <Link href="#" className="text-[#5a5759] hover:text-[#ffa500]">
                  Comparison
                </Link>
              </li>
              <li className="pl-3 py-[10px]">
                <Link href="#" className="text-[#5a5759] hover:text-[#ffa500]">
                  Price List
                </Link>
              </li>
              <li className="pl-3 py-[10px]">
                <Link href="#" className="text-[#5a5759] hover:text-[#ffa500]">
                  Compare
                </Link>
              </li>
              <li className="pl-3 py-[10px]">
                <Link href="#" className="text-[#5a5759] hover:text-[#ffa500]">
                  Showrooms
                </Link>
              </li>
              <li className="pl-3 py-[10px]">
                <Link href="#" className="text-[#5a5759] hover:text-[#ffa500]">
                  Service Centers
                </Link>
              </li>
              <li className="pl-3 py-[10px]">
                <Link href="#" className="text-[#5a5759] hover:text-[#ffa500]">
                  Reviews
                </Link>
              </li>
              <li className="pl-3 py-[10px]">
                <Link href="#" className="text-[#5a5759] hover:text-[#ffa500]">
                  News & Tips
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
