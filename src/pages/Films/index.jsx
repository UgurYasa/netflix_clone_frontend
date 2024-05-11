import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import { setSearch, setSortOption } from "../../redux/filmSlice";

export default function Films() {
  const { films, sortOption, options, search } = useSelector(
    (state) => state.film
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log(search);
  }, [search]);
  return (
    <div className="flex flex-col md:px-20 h-full w-full ">
      <div className="flex md:flex-row flex-col items-center md:justify-between">
        <input
          type="search"
          value={search}
          placeholder="Film/Dizi/Oyuncu Ara"
          onChange={(event) => {
            dispatch(setSearch(event.target.value));
          }}
          className="md:w-1/2 w-full h-10 rounded-xl p-4 my-5 border-2 border-gray-300"
        />

        <select
          value={sortOption}
          onChange={(event) => {
            dispatch(setSortOption(event.target.value));
          }}
          className="md:w-1/3 w-full h-10 rounded-xl text-black  border-2 border-gray-300"
        >
          {options.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
      </div>
      <div className="grid xl:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-8 my-10">
        {films &&
          films
            .slice(0, 18)
            .map((film) => (
              <Card
                imageUrl={film.images["Poster Art"].url}
                title={film.title}
                isCategory={false}
              />
            ))}
      </div>
    </div>
  );
}
