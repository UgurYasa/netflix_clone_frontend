import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex flex-row p-4 bg-black items-center justify-between border-t-2 w-full md:px-16">
      <Link to="/">
        <h1 className="text-3xl text-white font-bold">BulutMD</h1>
      </Link>
      <div className="flex flex-row items-center gap-x-5">
        <p
          className="text-white text-lg cursor-pointer"
          onClick={() => {
            // Burada giriş'e basıldığında istenen işlemi yapabilirsiniz
            alert("Giriş Yapıldı");
          }}
        >
          Giriş
        </p>
        <button
          className=" bg-red-500 text-white px-4 py-2 rounded border-[1px] border-white"
          onClick={() => {
            // Burada Deneme Başlat'a basıldığında istenen işlemi yapabilirsiniz
            alert("Deneme Başlatıldı");
          }}
        >
          Deneme Başlat
        </button>
      </div>
    </div>
  );
}
