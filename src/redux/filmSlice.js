import { createSlice } from "@reduxjs/toolkit";
import { FILMS } from "../constants/films";

const initialState = {
  films: FILMS.entries,
  categories: [],
  selectFilm: null,
  sortOption: "",
  search: "",
  options: [
    "Yeniye Göre Sırala",
    "Eskiye Göre Sırala",
    "Puana Göre Sırala",
    "Rastgele Sırala",
  ],
};

const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    extractCategories: (state) => {
      if (!state.films || !Array.isArray(state.films)) {
        return; // terminate if there is no films array
      }
      state.films.forEach((film) => {
        // check if the movie category is available
        const existingCategory = state.categories.find(
          (category) => category.categoriesName === film.programType
        );
        if (!existingCategory) {
          // If there is no category, create a new category
          state.categories.push({
            categoriesName: film.programType,
            categoriesImage: film.images["Poster Art"].url,
          });
        }
      });
    },
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSelectFilm: (state, action) => {
      state.selectFilm = state.films.find(
        (film) =>
          film.title.replaceAll(" ", "_").toLowerCase() === action.payload
      );
    },
  },
});

export const { extractCategories, setSortOption, setSearch, setSelectFilm } =
  filmSlice.actions;
export default filmSlice.reducer;
