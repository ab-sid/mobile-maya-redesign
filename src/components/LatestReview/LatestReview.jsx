"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

const LatestReview = () => {
  return (
    <section
      style={{ boxShadow: "0px px 2px 1px #eaeaea" }}
      className="max-w-[1110px] mx-auto border border-[#e9e9e9] mb-3 w-[97%] md:w-full"
    >
      {/* section header */}
      <div className="p-2 bg-white flex justify-between items-center font-oswald text-lg border-b-2">
        <h2 className="font-medium uppercase text-[#5A5759]">Latest Reviews</h2>
        <div className="flex gap-1 text-sm items-center text-[#344ff6]">
          <Link href="#">View More</Link>
          <span>
            <FaArrowRightLong />
          </span>
        </div>
      </div>

      {/* slider review start */}
      <div className="px-5 py-4">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1.5,
            }, // Mobile
            640: {
              slidesPerView: 3,
            }, // Tablet
            768: {
              slidesPerView: 3,
            }, // Small Desktop
            1024: {
              slidesPerView: 4,
            }, // Large Desktop
          }}
          spaceBetween={12}
          pagination={false}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              style={{ boxShadow: "0px 0px 2px 1px #eaeaea" }}
              className="border border-[#e9e9e9] rounded-b-md overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                {/* Review Image */}
                <Image
                  src="/assets/review/review1.jpg"
                  width={254}
                  height={163}
                  alt="review"
                  className="w-full h-[163px] group-hover:scale-125 duration-300"
                />

                {/* Top Rating Overlay */}
                <div className="absolute top-3 flex gap-2 px-3 py-1 bg-[#ffffff51] items-center text-amber-500 z-10">
                  <div className="flex">
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStarHalfStroke />
                    </span>
                  </div>
                  <span>4.5</span>
                </div>

                {/* Bottom Info Overlay */}
                <div className="absolute bottom-0 bg-[#7474744e] w-full text-white px-2 py-1 z-10">
                  <div className="flex justify-between text-sm">
                    <h4>By Admin</h4>
                    <h4>July 7, 2024</h4>
                  </div>
                </div>
              </div>
              {/* review text */}
              <div className="pt-3 px-3 pb-5 bg-white">
                <h2 className="text-xl text-[#5A5759] font-medium mb-2 line-clamp-2">
                  Samsung Galaxy A16 5G Full Review
                </h2>
                <p className="text-base text-[#5A5759] line-clamp-3">
                  Introducing the new Samsung Galaxy A16 5G, changing the way
                  you use your smartphone Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Officia, repellendus?
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{ boxShadow: "0px 0px 2px 1px #eaeaea" }}
              className="border border-[#e9e9e9] rounded-b-md overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                {/* Review Image */}
                <Image
                  src="/assets/review/review2.jpg"
                  width={254}
                  height={163}
                  alt="review"
                  className="w-full h-[163px] group-hover:scale-125 duration-300"
                />

                {/* Top Rating Overlay */}
                <div className="absolute top-3 flex gap-2 px-3 py-1 bg-[#ffffff51] items-center text-amber-500 z-10">
                  <div className="flex">
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStarHalfStroke />
                    </span>
                  </div>
                  <span>4.5</span>
                </div>

                {/* Bottom Info Overlay */}
                <div className="absolute bottom-0 bg-[#7474744e] w-full text-white px-2 py-1 z-10">
                  <div className="flex justify-between text-sm">
                    <h4>By Admin</h4>
                    <h4>July 7, 2024</h4>
                  </div>
                </div>
              </div>
              {/* review text */}
              <div className="pt-3 px-3 pb-5 bg-white">
                <h2 className="text-xl text-[#5A5759] font-medium mb-2 line-clamp-2">
                  Samsung Galaxy A16 5G Full Review
                </h2>
                <p className="text-base text-[#5A5759] line-clamp-3">
                  Introducing the new Samsung Galaxy A16 5G, changing the way
                  you use your smartphone Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Officia, repellendus?
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{ boxShadow: "0px 0px 2px 1px #eaeaea" }}
              className="border border-[#e9e9e9] rounded-b-md overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                {/* Review Image */}
                <Image
                  src="/assets/review/review1.jpg"
                  width={254}
                  height={163}
                  alt="review"
                  className="w-full h-[163px] group-hover:scale-125 duration-300"
                />

                {/* Top Rating Overlay */}
                <div className="absolute top-3 flex gap-2 px-3 py-1 bg-[#ffffff51] items-center text-amber-500 z-10">
                  <div className="flex">
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStarHalfStroke />
                    </span>
                  </div>
                  <span>4.5</span>
                </div>

                {/* Bottom Info Overlay */}
                <div className="absolute bottom-0 bg-[#7474744e] w-full text-white px-2 py-1 z-10">
                  <div className="flex justify-between text-sm">
                    <h4>By Admin</h4>
                    <h4>July 7, 2024</h4>
                  </div>
                </div>
              </div>
              {/* review text */}
              <div className="pt-3 px-3 pb-5 bg-white">
                <h2 className="text-xl text-[#5A5759] font-medium mb-2 line-clamp-2">
                  Samsung Galaxy A16 5G Full Review
                </h2>
                <p className="text-base text-[#5A5759] line-clamp-3">
                  Introducing the new Samsung Galaxy A16 5G, changing the way
                  you use your smartphone Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Officia, repellendus?
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{ boxShadow: "0px 0px 2px 1px #eaeaea" }}
              className="border border-[#e9e9e9] rounded-b-md overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                {/* Review Image */}
                <Image
                  src="/assets/review/review2.jpg"
                  width={254}
                  height={163}
                  alt="review"
                  className="w-full h-[163px] group-hover:scale-125 duration-300"
                />

                {/* Top Rating Overlay */}
                <div className="absolute top-3 flex gap-2 px-3 py-1 bg-[#ffffff51] items-center text-amber-500 z-10">
                  <div className="flex">
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStarHalfStroke />
                    </span>
                  </div>
                  <span>4.5</span>
                </div>

                {/* Bottom Info Overlay */}
                <div className="absolute bottom-0 bg-[#7474744e] w-full text-white px-2 py-1 z-10">
                  <div className="flex justify-between text-sm">
                    <h4>By Admin</h4>
                    <h4>July 7, 2024</h4>
                  </div>
                </div>
              </div>
              {/* review text */}
              <div className="pt-3 px-3 pb-5 bg-white">
                <h2 className="text-xl text-[#5A5759] font-medium mb-2 line-clamp-2">
                  Samsung Galaxy A16 5G Full Review
                </h2>
                <p className="text-base text-[#5A5759] line-clamp-3">
                  Introducing the new Samsung Galaxy A16 5G, changing the way
                  you use your smartphone Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Officia, repellendus?
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default LatestReview;
