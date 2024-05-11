import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">
        Aradığınız sayfa şu anda kullanılamıyor. Lütfen daha sonra tekrar
        deneyin. 😀
      </h1>
      <Link to="/" className="text-blue-500 mt-5 border-2 border-slate-500 rounded-2xl px-4 py-2">
        <h1 className="text-2xl font-bold">Ana Sayfaya Dön</h1>
        </Link>
    </div>
  );
}
