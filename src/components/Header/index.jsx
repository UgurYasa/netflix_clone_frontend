import React from "react";

export default function Header() {
  return (
    <div className="flex flex-row p-4 bg-black items-center justify-between border-t-2 w-full md:px-16">
      <h1 className="text-3xl text-white font-bold">BulutMD</h1>
      <div className="flex flex-row items-center gap-x-5">
        <p className="text-white text-lg">Giriş</p>
        <button className=" bg-red-500 text-white px-4 py-2 rounded border-[1px] border-white">
          Deneme Başlat
        </button>
      </div>
    </div>
  );
}
