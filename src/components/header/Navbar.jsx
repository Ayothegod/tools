import React, { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <main>
      <div className="hidden sm:flex">
        <ul className="flex gap-4">
          <a href="#home" className=" font-semibold ">
            <li>Home</li>
          </a>
          <a href="#menu" className=" font-semibold ">
            <li>Menu</li>
          </a>
          <a href="#services" className=" font-semibold">
            <li>Services</li>
          </a>
          <a href="#shop" className=" font-semibold">
            <li>Shop</li>
          </a>
        </ul>
      </div>

      <div className="sm:hidden">
        <Menu
          className="cursor-pointer "
          onClick={() => setOpenMenu(!openMenu)}
        />

        <div
          className={`fixed top-14 right-0 bg-white transform transition-transform ease-in-out duration-300 text-black border-2 p-2  border-black rounded-md ${
            openMenu ? "-translate-x-2" : "translate-x-full"
          }`}
        >
          <ul className="">
            <li className="font-semibold text-lg hover:bg-gray-200 px-4 py-1 rounded-md">
              <a href="#home" className="">
                Home
              </a>
            </li>
            <li className="font-semibold text-lg hover:bg-gray-200 px-4 py-1 rounded-md">
              <a href="#menu" >
                Menu
              </a>
            </li>
            <li className="font-semibold text-lg hover:bg-gray-200 px-4 py-1 rounded-md">
              <a href="#services" >
                Services
              </a>
            </li>
            <li className="font-semibold text-lg hover:bg-gray-200 px-4 py-1 rounded-md">
              <a href="#shop" >
                Shop
              </a>
            </li>
          </ul>
        </div>

      </div>
    </main>
  );
}
