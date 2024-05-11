import React from "react";
import { Link } from "react-router-dom";


export default function Card({ imageUrl, title, isCategory = false }) {
  const path = title.replaceAll(" ", "_").toLowerCase();
  return (
    <Link
      to={isCategory ? `/films/${path}` : `/film_detail/${path}`}
      className="flex flex-col"
    >
      <img
        src={imageUrl}
        alt={title}
        className="md:w-96 h-96 object-cover rounded-xl border-2 border-gray-300 hover:shadow-lg "
      />
      <h3 className="text-lg font-semibold text-gray-800 text-center">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </h3>
    </Link>
  );
}
