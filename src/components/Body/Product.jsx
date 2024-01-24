import React from "react";
import test from "../../assets/burger3.jpg";

export default function Product() {
  const data = [1, 2, 3, 4, 5, 6];

  return (
    <div className="mt-10 grid  sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((data, id) => (
        <div key={id} className="rounded-md shadow-custom overflow-hidden">
          <img src={test.src} alt="test" className="h-48 w-full "/>
          <div className="flex items-center justify-between w-full p-4">
            <div className="space-y-2">
                <p className="text-lg font-bold">Gyro Sandwich</p>
                <button className="bg-primary py-2 px-4 text-sm font-bold rounded-md hover:bg-orange-600 text-white">Add to Cart</button>
            </div>
            <div className="space-y-2">
                <div className="text-xs text-gray-400 ml-auto">
                    {/* start icon */}
                    <p>4.9</p>
                </div>
                <p className="text-sm font-semibold">$15.00</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
