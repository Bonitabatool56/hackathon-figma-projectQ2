import Link from 'next/link';
import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IoCart, IoPersonCircleSharp } from 'react-icons/io5';
import { NavigationMenuDemo } from './NavigationMenu';

const UpperHeader = () => {
  return (
    <div className="flex items-center justify-center h-[38px] w-full bg-[#000000] py-3 gap-4 sm:gap-48">
      <span className="text-white text-sm sm:text-base text-center">
        Sign Up and get 20% off your first order.
        <a className="mx-4 underline" href="/home">
          Sign Up now!
        </a>
      </span>
      <select className="bg-[#000000] text-white mx-2 border border-white rounded px-2">
        <option value="X">X</option>
      </select>
    </div>
  );
};

export default UpperHeader;

export const Header = () => {
  return (
    <header className="w-full h-auto bg-grey-900 flex flex-wrap justify-between items-center px-4 py-2 sm:py-4 md:px-8">
      {/* Left: Logo */}
      <div className="flex-shrink-0">
        <h1 className="text-2xl sm:text-3xl font-bold">SHOP.CO</h1>
      </div>

      {/* Navbar */}
      <ul className="hidden md:flex flex-wrap items-center space-x-5 text-sm sm:text-base">
        <li>
          <Link href="/product/cart/category"><NavigationMenuDemo /></Link>
        </li>
        <li>
          <Link href="/product">On Sale</Link>
        </li>
        <li>
          <Link href="/category">New-Arrivals</Link>
        </li>
        <li>
          <Link href="/cart">Brands</Link>
        </li>
      </ul>

      {/* Search Input */}
      <div className="flex justify-start items-center w-full md:w-[330px] h-[40px] rounded-[62px] bg-[#f0f0f0] mt-2 md:mt-0">
        <IoIosSearch className="text-xl ml-2" />
        <input
          placeholder="Search items..."
          className="w-full ml-2 outline-none h-full rounded-[62px] bg-[#f0f0f0] text-sm sm:text-base"
        />
      </div>

      {/* Right: Cart and Profile */}
      <div className="flex items-center mt-2 md:mt-0 space-x-5">
        <IoCart className="text-2xl" />
        <IoPersonCircleSharp className="text-2xl" />
      </div>

      {/* Mobile Navbar Dropdown */}
      <div className="block md:hidden w-full mt-4">
        <ul className="flex flex-col items-start space-y-2">
          <li>
            <Link href="/shop"><NavigationMenuDemo /></Link>
          </li>
          <li>
            <Link href="/sale">On Sale</Link>
          </li>
          <li>
            <Link href="/new arrivals">New Arrivals</Link>
          </li>
          <li>
            <Link href="/brands">Brands</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
