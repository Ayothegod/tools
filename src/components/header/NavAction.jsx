import React, { useState } from "react";
import { ShoppingBag, Search, ShoppingBasket } from "lucide-react";
import { $basketItems } from "../../store/cart";
import { useStore } from "@nanostores/react";

export default function NavAction() {
  const basketItems = useStore($basketItems)
  const [openSearch, setOpenSearch] = useState(false);
  console.log(basketItems.length);

  const moveToCart = () => {
    console.log("moveToCart");
  };
  return (
    <div className="h-fit rounded-sm px-2 py-2 flex items-center gap-2">
      <Search />
      <input
        type="text"
        placeholder="Search"
        className="hidden md:block placeholder:text-black placeholder:font-semibold outline-none sm:w-60"
      />

      <div onClick={moveToCart} className="p-2 cursor-pointer relative">
        <p className="absolute top-0 bg-primary rounded-full p-2 h-5 w-5 right-0 font-semibold text-white flex items-center justify-center text-sm">{basketItems.length}</p>
        <ShoppingBasket className="" />
      </div>
    </div>
  );
}
