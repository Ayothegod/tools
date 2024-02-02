import React from "react";

export default function Checkout() {
  const checkout = () => {};
  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="enter email address..."
        className="border border-gray-300 rounded-full p-2 outline-primary w-full"
      />

      <button
        onClick={checkout}
        className="bg-primary py-2 px-4 text-sm font-bold rounded-full hover:bg-orange-600 text-white mt-2"
      >
        Checkout now
      </button>
    </div>
  );
}
