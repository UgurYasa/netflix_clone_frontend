import React from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Films() {
  //REDUX VARIABLES
  const {films} = useSelector((state) => state.film);
  //REDUX FUNCTION
  const dispatch = useDispatch();
  return(
    <div className="flex flex-col items-center justify-center h-full w-full bg-slate-300">
    <h1 className="text-4xl font-bold">Films</h1>
  </div>
  )
 
}
