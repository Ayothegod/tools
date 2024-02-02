import { useStore } from "@nanostores/react";
import React from "react";
import { $shoppingBasket, $removeItemFromBasket } from "../../store/cart";
import toast, { Toaster } from "react-hot-toast";

export default function Basket() {
  const basketItems = useStore($shoppingBasket);
  const removeRecipeFromBasket = (name) => {
    $removeItemFromBasket(name)
  }

  return (
    <div className="mt-8 flex flex-col gap-8">
      <Toaster/>
      {basketItems.length ? basketItems.map((item) => (
        <div key={item.name} className="xs:flex sm:flex-col md:flex-row gap-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover xs:w-48 rounded-md"
          />
          <div>
            <p className="font-bold">{item.name}</p>
            <p>Category: {item.foodData.category}</p>

            <div className="mt-2">
              <p className="text-semibold text-primary">Nutrients</p>
              <p className="text-xs font-semibold">
                ENERC_KCAL: {item.foodData.nutrients.ENERC_KCAL}
              </p>
              <p className="text-xs font-semibold">
                PROCNTFAT: {item.foodData.nutrients.PROCNTFAT}
              </p>
              <p className="text-xs font-semibold">
                FAT: {item.foodData.nutrients.FAT}
              </p>
              <p className="text-xs font-semibold">
                CHOCDF: {item.foodData.nutrients.CHOCDF}
              </p>
              <p className="text-xs font-semibold">
                FIBTG: {item.foodData.nutrients.FIBTG}
              </p>
            </div>

            <button
                onClick={() =>
                  removeRecipeFromBasket(
                    item.name
                  )
                }
                className="bg-primary py-2 px-4 text-sm font-bold rounded-full hover:bg-orange-600 text-white mt-2"
              >
                Remove from Basket
              </button>
          </div>
        </div>
      )) : <p>Your basket is empty...</p>}
    </div>
  );
}
