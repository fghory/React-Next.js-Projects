import logo from "public/logo.webp";
import Image from "next/image";
import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className=" md:hidden  text-gray-500 flex flex-col items-center text-center px-2 mt-48">
        <div className="">
          <Image src={logo} alt="footer logo" />
        </div>
        <p className="text-[13px] mt-2 mb-4">
          Small artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>
        <div className="flex gap-x-4 justify-center">
          <FaTwitterSquare size={30} />
          <FaFacebookSquare size={30} />
          <FaLinkedin size={30} />
        </div>
      </div>
      <div className=" flex justify-between mt-8 md:mt-48 px-4 md:px-8">
        <div className=" hidden md:block w-64 text-gray-500">
          <Image src={logo} alt="footer logo" />
          <p className="text-[13px] mt-2 mb-4">
            Small artisan label that offers a thoughtfully curated collection of
            high quality everyday essentials made.
          </p>
          <div className="flex gap-x-4 justify-center">
            <FaTwitterSquare size={30} />
            <FaFacebookSquare size={30} />
            <FaLinkedin size={30} />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-gray-500">Company</h1>
          <ul>
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-gray-500">Support</h1>
          <ul>
            <li>Support Center</li>
            <li>24h Service</li>
            <li>Privacy Policy</li>
            <li>Quick Chat</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-gray-500">Contact</h1>
          <ul>
            <li>Whatsapp</li>
            <li>Email</li>
          </ul>
        </div>
      </div>
      <div className=" h-[1px] bg-gray-500 mt-24 mb-2"></div>

      <div className="flex justify-between px-2 md:px-8 text-sm md:mb-4">
        <div className="hidden md:flex md:items-center text-xs md:text-base">
          <p className="mr-[2px]">Copyright</p>{" "}
          <FaCopyright className="text-gray-500" size={12} />
          <p className="ml-[2px]">2023 Dine Market</p>
        </div>
        <div className="text-xs md:text-base">
          <p>
            Design by <span className="text-black font-bold">Web Wizards</span>
          </p>
        </div>
        <div className="text-xs md:text-base">
          <p>
            Code by{" "}
            <span className="text-black font-bold">Muhammad Fahad Khan</span>
          </p>
        </div>
      </div>
      <div className=" md:hidden text-xs md:text-base flex justify-center items-center mb-4 mt-2">
        <p className="mr-[2px]">Copyright</p>{" "}
        <FaCopyright className="text-gray-500" size={12} />
        <p className="ml-[2px]">2023 Dine Market</p>
      </div>
    </footer>
  );
};

export default Footer;
