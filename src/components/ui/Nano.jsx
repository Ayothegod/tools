import React from "react";
import { useStore } from "@nanostores/react";
import { $isCartOpen, $cartItems, $addItemsToCart } from "../../store/cart";

export default function NanoUI() {
  const isCartOpen = useStore($isCartOpen);
  const cartItems = useStore($cartItems);

  const openCart = () => {
    $isCartOpen.set(!isCartOpen);
  };

  const addToCart = () => {
    $addItemsToCart(1, "Chinese shoe", "20", 1)
  }

  const totalPrice = (price, quantity) => {
    return Number(price) * quantity
  }

  return (
    <div>
      <p className="text-2xl font-bold">Nano page</p>
      {/* <button className='border border-primary rounded-md p-2'>Add Users</button> */}

      <div className="flex items-center justify-between">
        <div className="mt-10 mx-10">
          <p className="font-bold text-primary">Buy our product </p>
          <div className="flex items-center gap-8">
            <p className="font-medium">Chinese shoe</p>
            <p className="text-sm font-medium text-secondary">
              <span className="text-red-500">$</span>20
            </p>
          </div>
          <button className="border border-primary rounded-md p-1" onClick={addToCart}>
            Add To Cart
          </button>
        </div>

        <button
          className="border bg-primary text-white font-medium text-sm border-primary rounded-md p-1 fixed top-10 right-96"
          onClick={openCart}
        >
          Open cart
        </button>

        {/* cart */}
        <div className="mx-10">
          {isCartOpen && (
            <div className="border-l p-4 border-black w-48 h-24 ">
              <p className="font-bold text-primary mb-8">Cart Items</p>

              {
                cartItems.length < 1 && <p className="text-sm font-medium text-primary">You dont have items in your basket!</p> 
              }

              {
                cartItems.map(item => (
                  <div key={item.id}>
                    <p>{item.item}</p>
                    <p>{item.price}</p>
                    <p>{item.quantity}</p>

                    <div>
                      <p>Total price: {totalPrice(item.price, item.quantity)}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
