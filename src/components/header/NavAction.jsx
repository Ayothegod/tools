import React, { useState } from "react";
import { ShoppingBag, Search } from "lucide-react";

export default function NavAction() {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <div className="h-fit rounded-sm px-2 py-2 flex items-center gap-2">
      <Search />
      <input
        type="text"
        placeholder="Search"
        className="hidden md:block placeholder:text-black placeholder:font-semibold outline-none sm:w-60"
      />

      <ShoppingBag className="border-l" />
    </div>
  );
}
