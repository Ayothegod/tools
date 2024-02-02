import { useStore } from "@nanostores/react";
import React from "react";
import { $shoppingBasket } from "../../store/cart";

export default function CheckoutTab() {
  const basketItems = useStore($shoppingBasket);

  return (
    <div>
      <p className="font-medium">Basket Quantity: {basketItems.length}</p>

      <div>
        {basketItems.map((item, idx) => (
          <div key={item.name}>
            <p className="text-sm">
              item {idx + 1}: <span className="text-primary">{item.name}</span>
            </p>
          </div>
        ))}
      </div>

      <button onClick={() => window.location.href = "/checkout"} className="bg-primary py-2 px-4 text-sm font-bold rounded-full hover:bg-orange-600 text-white mt-4">
        Checkout
      </button>
    </div>
  );
}
