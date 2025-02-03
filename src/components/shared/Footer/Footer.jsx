import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      {/* footer top */}
      <div className="bg-neutral-300">
        <div className="max-w-[1110px] mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-4 py-8">
          <div className="flex justify-center md:justify-start gap-3">
            <span className="w-7 inline-block">
              <img src="/assets/footer/envlope.svg" alt="message" />
            </span>
            <h2 className="text-lg text-white font-medium text-center">
              Subscribe for top stories & new lunches
            </h2>
          </div>
          <div className="flex items-center gap-3 w-[98%] md:w-full mx-auto">
            <input
              className="flex-grow w-full px-5 placeholder:text-lg py-[9px] outline-none rounded-md"
              type="text"
              name="email"
              placeholder="Your Email Address"
            />
            <input
              className="text-white bg-[#515ca9] px-4 py-2 text-lg rounded-md"
              type="submit"
              value="Subscribe"
            />
          </div>
        </div>
      </div>

      {/* footer center */}
      <div className="bg-neutral-400">
        <div className="max-w-[1110px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-0 text-center md:text-start py-10 text-lg">
          <nav>
            <h2 className="font-medium text-white mb-4">Useful link</h2>
            <ul className="flex flex-col gap-1 text-neutral-900">
              <li>
                <Link href="#">About us</Link>
              </li>
              <li>
                <Link href="#">Privacy policy</Link>
              </li>
              <li>
                <Link href="#">Terms and condition</Link>
              </li>
              <li>
                <Link href="#">DMCA</Link>
              </li>
              <li>
                <Link href="#">Disclaimer</Link>
              </li>
              <li>
                <Link href="#">FAQ</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h2 className="font-medium text-white mb-4">Product Categories</h2>
            <ul className="flex flex-col gap-1 text-neutral-900">
              <li>
                <Link href="#">Mobile Phones</Link>
              </li>
              <li>
                <Link href="#">Tablets</Link>
              </li>
              <li>
                <Link href="#">Watches</Link>
              </li>
              <li>
                <Link href="#">Laptops</Link>
              </li>
              <li>
                <Link href="#">Cameras</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h2 className="font-medium text-white mb-4">Download Our Apps</h2>
            <ul className="flex flex-col justify-center items-center md:items-start gap-1 text-neutral-900">
              <li>
                <Link href="#">
                  {/* <img src="/assets/footer/google-play.svg" alt="footer" /> */}
                  <Image
                    src="/assets/footer/google-play.svg"
                    width={160}
                    height={54}
                    alt="google play"
                  ></Image>
                </Link>
              </li>
              <li>
                <Link href="#">
                  {/* <img src="/assets/footer/appStore.svg" alt="footer2" /> */}
                  <Image
                    src="/assets/footer/appStore.svg"
                    width={160}
                    height={54}
                    alt="google play"
                  ></Image>
                </Link>
              </li>
            </ul>
          </nav>
          <nav>
            {/* <h2 className="font-medium text-white mb-4">Download Our Apps</h2> */}
            <ul className="flex flex-col gap-1 justify-center items-center md:items-start text-neutral-900">
              <li>
                <Link href="#">
                  {/* <img src="/assets/footer/google-play.svg" alt="footer" /> */}
                  <Image
                    src="/assets/logo.png"
                    width={224}
                    height={83}
                    alt="footer logo"
                  ></Image>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* footer bottom */}
      <div className="bg-[#959595]">
        <div className="max-w-[1110px] mx-auto flex flex-col md:flex-row gap-3 justify-between items-center py-3">
          <span className="text-neutral-900 text-lg text-center">
            © 2013-2025 MobileMaya.com | All Rights Reserved
          </span>
          <div className="flex gap-4">
            <div>
              <Link
                className="text-xl text-white bg-neutral-900 rounded-full inline-flex h-10 w-10 justify-center items-center"
                href="#"
              >
                <FaFacebook />
              </Link>
            </div>
            <div>
              <Link
                className="text-xl text-white bg-neutral-900 rounded-full inline-flex h-10 w-10 justify-center items-center"
                href="#"
              >
                <FaTwitter />
              </Link>
            </div>
            <div>
              <Link
                className="text-xl text-white bg-neutral-900 rounded-full inline-flex h-10 w-10 justify-center items-center"
                href="#"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
