import React from "react";
import { FaMedium, FaTelegramPlane } from "react-icons/fa";
import footerlogo from "../assets/images/logo.png";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-3">
      <div className="max-w-6xl mx-auto flex flex-col items-center px-4 text-center">
        <div className="flex flex-col items-center">
          <img
            src={footerlogo}
            alt="ZenPeak Logo"
            className="w-40 h-40 object-contain"
          />
          <p className="text-sm text-gray-300 max-w-sm mb-5">
            Pulvinar scelerisque viverra et, donec nunc orci ullam corporis
            penatibus cras ligula.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 text-sm mb-4">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            About us
          </a>
          <a href="#" className="hover:text-gray-400">
            Team
          </a>
          <a href="#" className="hover:text-gray-400">
            Portfolio
          </a>
          <a href="#" className="hover:text-gray-400">
            Fund Allocation
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact us
          </a>
        </nav>
        <div className="flex gap-4 mb-6">
          <a
            href="https://medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#a97c65] p-2 rounded-full hover:bg-[#8c6551] transition"
          >
            <FaMedium size={18} />
          </a>
          <a
            href="https://telegram.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#a97c65] p-2 rounded-full hover:bg-[#8c6551] transition"
          >
            <FaTelegramPlane size={18} />
          </a>
          <a
            href="https://x.com/home"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#a97c65] p-2 rounded-full hover:bg-[#8c6551] transition"
          >
            <FaXTwitter size={18} />
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center w-full border-t border-gray-700 pt-4 text-xs text-gray-400">
          <div className="flex gap-3 mb-2 md:mb-0">
            <a href="#" className="hover:text-gray-200">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-gray-200">
              Conditions
            </a>
          </div>
          <div>ZenPeak | Copyright ©2024</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
