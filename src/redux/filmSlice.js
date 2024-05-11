import { createSlice } from "@reduxjs/toolkit";
import { FILMS } from "../constants/films";

const initialState = {
  films: FILMS.entries,
  categories: [],
  filteredFilms: [],
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
    // dropdown üzerinden gelen veriyi setle
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
    // Arama yaparken gelen veriyi setle
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    // Seçilen filmi filtrele
    setSelectFilm: (state, action) => {
      state.selectFilm = state.films.find(
        (film) =>
          film.title.replaceAll(" ", "_").toLowerCase() === action.payload
      );
    },
    // Kategoriye göre filtrelenmiş filmleri listele
    setFilmsFilteredByCategories: (state, action) => {
      state.filteredFilms = state.films.filter(
        (film) => film.programType === action.payload
      );
    },
    setFilmsFilteredBySearch: (state) => {
      state.filteredFilms = state.films.filter((film) =>
        film.title
          .replaceAll(" ", "")
          .toLowerCase()
          .includes(state.search.toLowerCase())
      );
    },
  },
});

export const {
  extractCategories,
  setSortOption,
  setSearch,
  setSelectFilm,
  setFilmsFilteredByCategories,
  setFilmsFilteredBySearch,
} = filmSlice.actions;
export default filmSlice.reducer;
