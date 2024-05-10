import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { extractCategories } from "../../redux/filmSlice";

export default function Categories() {
  const { categories } = useSelector((state) => state.film);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(extractCategories());
  }, []);
  console.log(categories);
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-slate-300">
      <h1 className="text-4xl font-bold">Categories</h1>
    </div>
  )
}
