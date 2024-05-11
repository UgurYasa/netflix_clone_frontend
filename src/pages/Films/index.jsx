import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import {
  setFilmsFilteredByCategories,
  setFilmsFilteredBySearch,
  setSearch,
  setSelectFilm,
  setSortOption,
  createRandomList,
  createSortByNew,
  createSortByOld,
} from "../../redux/filmSlice";
import { useParams } from "react-router-dom";

export default function Films() {
  //PARAMS
  const { category } = useParams();
  //REDUX
  const { filteredFilms, sortOption, options, search } = useSelector(
    (state) => state.film
  );
  const dispatch = useDispatch();

  //USE EFFECTS
  // Sort Option'a göre filmleri sırala
  useEffect(() => {
    if (sortOption === options[3]) {
      dispatch(createRandomList());
    } else if (sortOption === options[2]) {
      //Burada  Puana göre sıralama yapılacak fakat veri setinde puan bilgisi olmadığı için random sıralama yapılacak
      dispatch(createRandomList());
    } else if (sortOption === options[1]) {
      dispatch(createSortByOld());
    } else {
      dispatch(createSortByNew());
    }
  }, [sortOption]);
  // Arama yaparken filtreleme
  useEffect(() => {
    search.length >= 3 &&
      dispatch(
        setFilmsFilteredBySearch({ search: search, category: category })
      );
    search.length < 3 && dispatch(setFilmsFilteredByCategories(category));
  }, [search]);
  // Kategoriye göre filtreleme
  useEffect(() => {
    dispatch(setFilmsFilteredByCategories(category));
  }, []);

  return (
    <div
      className={`flex flex-col md:px-20 w-full ${
        filteredFilms.length >= 10 ? "h-full" : "h-screen"
      }`}
    >
      <div className="flex md:flex-row flex-col items-center md:justify-between">
        {/* Search Input */}
        <input
          type="search"
          value={search}
          placeholder="Film/Dizi/Oyuncu Ara"
          onChange={(event) => {
            dispatch(setSearch(event.target.value));
          }}
          className="md:w-1/2 w-full h-10 rounded-xl p-4 my-5 border-2 border-gray-300"
        />
        {/* Dropdown Menu */}
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
      {/* Film List */}
      <div className="grid xl:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-8 my-10">
        {filteredFilms &&
          filteredFilms.slice(0, 18).map((film) => (
            <div
              onClick={() => {
                dispatch(setSelectFilm(film));
              }}
            >
              <Card
                imageUrl={film.images["Poster Art"].url}
                title={film.title}
                isCategory={false}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
