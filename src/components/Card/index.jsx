import React from "react";

export default function Card({ imageUrl, title }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-1/2 object-cover rounded-xl"
      />
      <h3 className="text-lg font-semibold text-gray-800">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </h3>
    </div>
  );
}
