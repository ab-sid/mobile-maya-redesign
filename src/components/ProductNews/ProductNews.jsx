import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const ProductNews = () => {
  return (
    <section className="max-w-[1110px] mx-auto grid grid-cols-12 gap-3 mb-3 w-[98%] md:w-full">
      <div className="col-span-12 md:col-span-9 border border-[#e9e9e9]">
        {/* section header */}
        <div className="p-2 bg-white flex justify-between items-center font-oswald text-lg border-b-2">
          <h2 className="font-medium uppercase text-[#5A5759]">Product News</h2>
          <div className="flex gap-1 text-sm items-center text-[#344ff6]">
            <Link href="#">View More</Link>
            <span>
              <FaArrowRightLong />
            </span>
          </div>
        </div>
        {/* news */}
        <div className="bg-gray-100 p-3 flex flex-col gap-3 flex-grow">
          <Link
            href="#"
            className="border rounded-r-md bg-white flex md:flex-row flex-col"
          >
            <Image
              src="/assets/news/news1.jpg"
              width={240}
              height={128}
              alt="news1"
              className="w-full md:w-[240px] md:h-[128px]"
            ></Image>
            <div className="p-3">
              <h2 className="font-bold text-base text-neutral-800 line-clamp-2">
                Samsung Galaxy S24 Ultra rated as the best display smartphone by
                DXOMark
              </h2>
              <p className="text-sm text-neutral-800 mt-1 line-clamp-2">
                Samsung Galaxy S24 Ultra series gets a Gold label in DXOMark
                scoring. The Galaxy S24 Ultra leads the char Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Eveniet, fugiat?
              </p>
            </div>
          </Link>
          <Link
            href="#"
            className="border rounded-r-md bg-white flex md:flex-row flex-col"
          >
            <Image
              src="/assets/news/news1.jpg"
              width={240}
              height={128}
              alt="news2"
              className="w-full md:w-[240px] md:h-[128px]"
            ></Image>
            <div className="p-3">
              <h2 className="font-bold text-base text-neutral-800 line-clamp-2">
                Samsung Galaxy S24 Ultra rated as the best display smartphone by
                DXOMark
              </h2>
              <p className="text-sm text-neutral-800 mt-1 line-clamp-2">
                Samsung Galaxy S24 Ultra series gets a Gold label in DXOMark
                scoring. The Galaxy S24 Ultra leads the char Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Eveniet, fugiat?
              </p>
            </div>
          </Link>
          <Link
            href="#"
            className="border rounded-r-md bg-white flex md:flex-row flex-col"
          >
            <Image
              src="/assets/news/news1.jpg"
              width={240}
              height={128}
              alt="news3"
              className="w-full md:w-[240px] md:h-[128px]"
            ></Image>
            <div className="p-3">
              <h2 className="font-bold text-base text-neutral-800 line-clamp-2">
                Samsung Galaxy S24 Ultra rated as the best display smartphone by
                DXOMark
              </h2>
              <p className="text-sm text-neutral-800 mt-1 line-clamp-2">
                Samsung Galaxy S24 Ultra series gets a Gold label in DXOMark
                scoring. The Galaxy S24 Ultra leads the char Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Eveniet, fugiat?
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="col-span-12 md:col-span-3 border border-[#e9e9e9]">
        <div className="p-2 bg-white flex justify-between items-center font-oswald text-lg border-b-2">
          <h2 className="font-medium uppercase text-[#5A5759]">Brands</h2>
          <div className="flex gap-1 text-sm items-center text-[#344ff6]">
            <Link href="#">View More</Link>
            <span>
              <FaArrowRightLong />
            </span>
          </div>
        </div>
        <div className="p-3">
          <div className="bg-[#f2f3f5] grid grid-cols-3 gap-3">
            <Link className="p-1.5 border bg-white rounded" href="#">
              <div className="lg:h-10 md:h-20 h-16 flex justify-center pb-2">
                <Image
                  src="/assets/brands/samsung.png"
                  width={71}
                  height={32}
                  alt="samsung"
                ></Image>
              </div>
              <div className="text-center border-t font-medium text-sm pt-[2px] text-[#817F80]">
                Samsung
              </div>
            </Link>
            <Link className="p-1.5 border bg-white rounded" href="#">
              <div className="lg:h-10 md:h-20 h-16 flex justify-center pb-2">
                <Image
                  src="/assets/brands/apple.png"
                  width={71}
                  height={32}
                  alt="Apple"
                ></Image>
              </div>
              <div className="text-center border-t font-medium text-sm pt-[2px] text-[#817F80]">
                Apple
              </div>
            </Link>
            <Link className="p-1.5 border bg-white rounded" href="#">
              <div className="lg:h-10 md:h-20 h-16 flex justify-center pb-2">
                <Image
                  src="/assets/brands/google.png"
                  width={71}
                  height={32}
                  alt="Google"
                ></Image>
              </div>
              <div className="text-center border-t font-medium text-sm pt-[2px] text-[#817F80]">
                Google
              </div>
            </Link>
            <Link className="p-1.5 border bg-white rounded" href="#">
              <div className="lg:h-10 md:h-20 h-16 flex justify-center pb-2">
                <Image
                  src="/assets/brands/google.png"
                  width={71}
                  height={32}
                  alt="Google"
                ></Image>
              </div>
              <div className="text-center border-t font-medium text-sm pt-[2px] text-[#817F80]">
                Google
              </div>
            </Link>
            <Link className="p-1.5 border bg-white rounded" href="#">
              <div className="lg:h-10 md:h-20 h-16 flex justify-center pb-2">
                <Image
                  src="/assets/brands/samsung.png"
                  width={71}
                  height={32}
                  alt="samsung"
                ></Image>
              </div>
              <div className="text-center border-t font-medium text-sm pt-[2px] text-[#817F80]">
                Samsung
              </div>
            </Link>
            <Link className="p-1.5 border bg-white rounded" href="#">
              <div className="lg:h-10 md:h-20 h-16 flex justify-center pb-2">
                <Image
                  src="/assets/brands/apple.png"
                  width={71}
                  height={32}
                  alt="Apple"
                ></Image>
              </div>
              <div className="text-center border-t font-medium text-sm pt-[2px] text-[#817F80]">
                Apple
              </div>
            </Link>
            <Link className="p-1.5 border bg-white rounded" href="#">
              <div className="lg:h-10 md:h-20 h-16 flex justify-center pb-2">
                <Image
                  src="/assets/brands/samsung.png"
                  width={71}
                  height={32}
                  alt="samsung"
                ></Image>
              </div>
              <div className="text-center border-t font-medium text-sm pt-[2px] text-[#817F80]">
                Samsung
              </div>
            </Link>
            <Link className="p-1.5 border bg-white rounded" href="#">
              <div className="lg:h-10 md:h-20 h-16 flex justify-center pb-2">
                <Image
                  src="/assets/brands/apple.png"
                  width={71}
                  height={32}
                  alt="Apple"
                ></Image>
              </div>
              <div className="text-center border-t font-medium text-sm pt-[2px] text-[#817F80]">
                Apple
              </div>
            </Link>
            <Link className="p-1.5 border bg-white rounded" href="#">
              <div className="lg:h-10 md:h-20 h-16 flex justify-center pb-2">
                <Image
                  src="/assets/brands/google.png"
                  width={71}
                  height={32}
                  alt="Google"
                ></Image>
              </div>
              <div className="text-center border-t font-medium text-sm pt-[2px] text-[#817F80]">
                Google
              </div>
            </Link>
            <Link className="p-1.5 border bg-white rounded" href="#">
              <div className="lg:h-10 md:h-20 h-16 flex justify-center pb-2">
                <Image
                  src="/assets/brands/google.png"
                  width={71}
                  height={32}
                  alt="Google"
                ></Image>
              </div>
              <div className="text-center border-t font-medium text-sm pt-[2px] text-[#817F80]">
                Google
              </div>
            </Link>
            <Link className="p-1.5 border bg-white rounded" href="#">
              <div className="lg:h-10 md:h-20 h-16 flex justify-center pb-2">
                <Image
                  src="/assets/brands/samsung.png"
                  width={71}
                  height={32}
                  alt="samsung"
                ></Image>
              </div>
              <div className="text-center border-t font-medium text-sm pt-[2px] text-[#817F80]">
                Samsung
              </div>
            </Link>
            <Link className="p-1.5 border bg-white rounded" href="#">
              <div className="lg:h-10 md:h-20 h-16 flex justify-center pb-2">
                <Image
                  src="/assets/brands/apple.png"
                  width={71}
                  height={32}
                  alt="Apple"
                ></Image>
              </div>
              <div className="text-center border-t font-medium text-sm pt-[2px] text-[#817F80]">
                Apple
              </div>
            </Link>
          </div>
          <div className="flex-1 flex items-end mt-5">
            <button className="w-full border-[2px] text-center h-11 text-neutral-400 bg-white">
              <Link
                className="w-full h-full flex text-base justify-center items-center hover:bg-neutral-100 duration-200"
                href="#"
              >
                More Brands
                <span>
                  <MdKeyboardDoubleArrowRight className="text-neutral-400 w-6 h-6 ml-1" />
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductNews;
