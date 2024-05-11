import React from "react";

export default function Subtitle({ title }) {
  return (
    <div className="flex bg-slate-600 w-full p-5 md:px-16">
      <h2 className="text-white text-2xl">{title}</h2>
    </div>
  );
}
