import Image from "next/image";
import logo from "public/logo.webp";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import Hamburger from "../ui/Hamburger";

const Header = () => {
  return (
    <header>
      <div className=" z-50 bg-white flex justify-between items-center px-2 py-4 md:px-8 fixed top-0 left-0 right-0">
        <div className="md:hidden">
          <Hamburger />
        </div>
        <Link href="/">
          <Image src={logo} alt="logo" className="h-6 w-32 md:h-6 md:w-32" />
        </Link>

        <ul className="hidden md:flex gap-x-10 font-bold">
          <li className="text-sm lg:text-lg">
            <Link href="category/Female">Female</Link>
          </li>
          <li className="text-sm lg:text-lg">
            <Link href="category/Male">Male</Link>
          </li>
          <li className="text-sm lg:text-lg">
            <Link href="category/Kids">Kids</Link>
          </li>
          <li className="text-sm lg:text-lg">
            <Link href="/allproducts">All Products</Link>
          </li>
        </ul>
        <input
          className=" hidden lg:block border-2 border-gray-500 rounded-md text-sm md:py-1 pl-2"
          placeholder="Search Product "
        ></input>
        <div
          className="bg-gray-300 rounded-full h-8 w-8 md:h-10 md:w-10
        flex justify-center items-center"
        >
          <ShoppingCart size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;
