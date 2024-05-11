import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { extractCategories } from "../../redux/filmSlice";
import Card from "../../components/Card"

export default function Categories() {
  const { categories } = useSelector((state) => state.film);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(extractCategories());
  }, []);
  return (
    <div className="flex flex-col h-screen w-full bg-slate-300 p-5">
      <div className="grid grid-cols-6 gap-x-4">
      {categories&&categories.map((category) => (
        <Card
          imageUrl={category.categoriesImage}
          title={category.categoriesName}
          isCategory={true}
        />
      ))}
      </div>
    </div>
  );
}
