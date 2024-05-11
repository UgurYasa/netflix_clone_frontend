import { createSlice } from "@reduxjs/toolkit";
import { FILMS } from "../constants/films";

const initialState = {
  films: FILMS.entries,
  categories: [],
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
  },
});

export const { extractCategories, setSortOption,setSearch } = filmSlice.actions;
export default filmSlice.reducer;
