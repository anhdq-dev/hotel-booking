import React from "react";
import { assets } from "../assets/assets";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#F6F9FC] px-6 pt-8 text-gray-500/80 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        <div className="max-w-80">
          <img
            src={assets.logo || ""}
            alt="logo"
            className="mb-4 h-8 opacity-80 invert md:h-9 "
          />
          <p className="text-sm">
            Discover the world's most extraordinary places to stay, from
            boutique hotels to luxury villas and private islands.
          </p>
          <div className="mt-4 flex items-center gap-3">
            {/* Instagram */}
            <img src={assets.instagramIcon} alt="" className="w-6" />
            {/* Facebook */}
            <img src={assets.facebookIcon} alt="" className="w-6" />
            {/* Twitter */}
            <img src={assets.twitterIcon} alt="" className="w-6" />
            {/* LinkedIn */}
            <img src={assets.linkendinIcon} alt="" className="w-6" />
          </div>
        </div>

        <div>
          <p className="font-playfair text-lg text-gray-800">COMPANY</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-playfair text-lg text-gray-800">SUPPORT</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Safety Information</a>
            </li>
            <li>
              <a href="#">Cancellation Options</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
          </ul>
        </div>

        <div className="max-w-80">
          <p className="font-playfair text-lg text-gray-800">STAY UPDATED</p>
          <p className="mt-3 text-sm">
            Subscribe to our newsletter for inspiration and special offers.
          </p>
          <div className="mt-4 flex items-center">
            <input
              type="text"
              className="h-9 rounded-l border border-gray-300 bg-white px-3 outline-none"
              placeholder="Your email"
            />
            <button className="flex aspect-square h-9 w-9 items-center justify-center rounded-r bg-black">
              {/* Arrow icon */}
              <ArrowRight className="invert" size={20} color="black" />
            </button>
          </div>
        </div>
      </div>
      <hr className="mt-8 border-gray-300" />
      <div className="flex flex-col items-center justify-between gap-2 py-5 md:flex-row">
        <p>© {new Date().getFullYear()} LuxStay. All rights reserved.</p>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
