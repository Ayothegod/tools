import React, { useState } from "react";
// import { ShoppingBag } from 'lucide-react';
import { Menu } from "lucide-react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <main>
        <div className="hidden sm:flex space-x-4">
          <ul className="">
            <a href="#jdj" className=" font-semibold text-lg">
              <li>Home</li>
            </a>
            <a href="#jhdsjhjhds" className=" font-semibold text-lg">
              <li>Menu</li>
            </a>
            <a href="#jhdjhsjhd" className=" font-semibold text-lg">
              <li>Services</li>
            </a>
            <a href="#jhdhjhs" className=" font-semibold text-lg">
              <li>Shop</li>
            </a>
          </ul>
        </div>

      <div>
        <Menu
          className="cursor-pointer sm:hidden"
          onClick={() => setOpenMenu(!openMenu)}
        />

        <div
          className={`fixed top-14 left-0 w-full h-screen bg-gray-800 transform transition-transform ease-in-out duration-500 
  ${openMenu ? "translate-x-0" : "-translate-x-full"}`}
        >
          <ul className="">
            <a href="#jdj" className=" font-semibold text-lg">
              <li>Home</li>
            </a>
            <a href="#jhdsjhjhds" className=" font-semibold text-lg">
              <li>Menu</li>
            </a>
            <a href="#jhdjhsjhd" className=" font-semibold text-lg">
              <li>Services</li>
            </a>
            <a href="#jhdhjhs" className=" font-semibold text-lg">
              <li>Shop</li>
            </a>
          </ul>
        </div>
      </div>
    </main>
  );
}
