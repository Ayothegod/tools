import React from "react";
import { Clock5, MapPin, PhoneIncoming } from "lucide-react";

export default function Enquiry() {
  return (
    <main className="grid grid-cols-1 divide-y-2 gap-8 md:grid-cols-3 md:divide-x-2 md:divide-y-0 gshadow md:p-4">
      <div className="flex flex-col items-center pt-2">
        <div className="bg-primary p-1 text-white rounded-full">
          <Clock5 className="h-5 w-5" />
        </div>
        <p className="font-semibold">Today 10:00am - 10:00pm</p>
        <p className="text-xs ">Working time</p>
      </div>
      <div className="flex flex-col items-center pt-2">
        <div className="bg-primary p-1 text-white rounded-full">
          <MapPin className="h-5 w-5" />
        </div>
        <p className="font-semibold">Washington, D.C, DC, USA</p>
        <p className="text-xs ">Our location</p>
      </div>
      <div className="flex flex-col items-center p-2">
        <div className="bg-primary p-1 text-white rounded-full">
          <PhoneIncoming className="h-5 w-5" />
        </div>
        <p className="font-semibold">+0123 456 789</p>
        <p className="text-xs ">Phone number</p>
      </div>
    </main>
  );
}
