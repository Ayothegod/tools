import React from "react";
import deliverVan from "../../assets/delivery.png";
import food1 from "../../assets/Food.png";
import food2 from "../../assets/Food 2.png";

export default function ServiceItem() {
  const data = [
    {
      id: 1,
      imgsrc: food1,
      topic: "Qualityfull Food",
      content:
        "But i must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born",
    },
    {
      id: 2,
      imgsrc: food2,
      topic: "Healthy Food",
      content:
        "But i must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born",
    },
    {
      id: 3,
      imgsrc: deliverVan,
      topic: "Fast Delivery",
      content:
        "But i must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born",
    },
  ];

  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
      {data.map((data) => (
        <div
          key={data.id}
          className="border border-gray-300 p-8 rounded-md flex flex-col items-center justify-center gap-8 transition duration-300 hover:border-none hover:shadow-custom hover:scale-105"
        >
          <div className="bg-primary p-4 rounded-full">
            <img src={data.imgsrc.src} alt={data.topic} className="h-6 w-6" />
          </div>

          <p className="font-bold text-lg ">{data.topic}</p>
          <p className="text-xs text-center font-medium">{data.content}</p>
        </div>
      ))}
    </main>
  );
}
