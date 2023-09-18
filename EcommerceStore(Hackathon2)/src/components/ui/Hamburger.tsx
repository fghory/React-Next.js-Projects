"use client";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const Hamburger = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <section>
      <div
        className="md:hidden z-30 relative"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? (
          <GiHamburgerMenu />
        ) : (
          <RxCross2 className="absolute -top-4 -left-2 text-black text-3xl" />
        )}
      </div>

      {!toggle ? (
        <div className="md:hidden flex items-center text-center bg-white w-screen  absolute top-14 left-0 z-20 pb-2">
          <ul className="gap-x-10 gap-y-4">
            <li className="text-3xl text-black font-bold">
              <Link href="/category/Female" target="_top">
                Female
              </Link>
            </li>
            <li className="text-3xl text-black font-bold">
              <Link href="/category/Male" target="_top">
                Male
              </Link>
            </li>
            <li className="text-3xl text-black font-bold">
              <Link href="/category/Kids" target="_top">
                Kids
              </Link>
            </li>
            <li className="text-3xl text-black font-bold">
              <Link href="/allproducts" target="_top">
                All Products
              </Link>
            </li>
            <li>
              <input
                className="border-2 border-gray-500 rounded-md text-lg md:py-1 pl-2 ml-4"
                placeholder="Search Product "
              ></input>
            </li>
          </ul>
        </div>
      ) : null}
    </section>
  );
};

export default Hamburger;
