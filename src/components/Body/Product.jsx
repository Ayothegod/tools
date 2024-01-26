import React, { useEffect } from "react";
import test from "../../assets/burger3.jpg";
import { Star } from "lucide-react";
import { useStore } from "@nanostores/react";
import { fetchData } from "../../hooks/useFetch";

const data = await fetchData()
export default function Product() {
  console.log(data);
  
  return (
    <div className="mt-10 grid xs:grid-cols-2 md:grid-cols-3 gap-4">
      {/* <button onClick={addToCart} className="border-2">update</button> */}

      {data.map((data, id) => (
        <div key={id} className="rounded-md shadow-custom overflow-hidden">
          <img src={test.src} alt="test" className="h-48 w-full " />
          <div className="flex items-center justify-between w-full p-4">
            <div className="space-y-2">
              <p className="text-lg font-bold">Gyro Sandwich</p>
              <button className="bg-primary py-2 px-4 text-sm font-bold rounded-full hover:bg-orange-600 text-white">
                Add to Cart
              </button>
            </div>
            <div className="space-y-2">
              <div className="text-xs text-gray-400 ml-auto flex  items-center gap-2">
                <Star className="h-4 w-4 text-primary" />
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
