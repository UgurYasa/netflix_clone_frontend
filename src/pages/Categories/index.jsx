import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { extractCategories } from "../../redux/filmSlice";
import Card from "../../components/Card"

export default function Categories() {
  const { categories } = useSelector((state) => state.film);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(extractCategories());
  }, [categories]);
  return (
    <div className="flex flex-col md:h-screen  w-full">
      <div className="grid xl:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-8 my-10">
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
