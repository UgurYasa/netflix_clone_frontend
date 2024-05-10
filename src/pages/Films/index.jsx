import React from "react";
import { useSelector} from "react-redux";

export default function Films() {
  const { films} = useSelector((state) => state.film);


  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-slate-300">
      <h1 className="text-4xl font-bold">{films[0].title}</h1>
    </div>
  );
}
