import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Recipe() {
  const data = ["first", "second", "third", "fourth"];
  return (
    <main className="grid grid-cols-2 gap-y-16 gap-x-8">
      {data.map((data) => (
        <div className="h-36 w-32 bg-white rounded-md shadow p-2 relative">
          <div></div>
          <div className="flex flex-col items-center justify-end h-full">
            <p className="font-semibold">Food Combo</p>
            <p className="text-sm font-medium">Mushroom Spice</p>
            <p className="text-xs font-medium">
              <span className="text-red-600">$</span>5.16
            </p>
          </div>

          <div>
            <div className="bg-black w-fit text-white p-1 rounded-full absolute -bottom-3.5 left-4">
              <ArrowRight className="h-5 w-5"/>
            </div>
            <div className="bg-white w-fit text-black p-1 rounded-full absolute -bottom-3.5 right-4">
              <ArrowLeft className="h-5 w-5"/>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
