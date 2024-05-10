import { createSlice } from "@reduxjs/toolkit";
import {FILMS} from "../constants/films";

const initialState = {
    films: FILMS.entries,
};

const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    
  },
});

export const { setFirstName, setLastName, setEmail, setPassword,setRoute,reset,register} =
  filmSlice.actions;
export default filmSlice.reducer;
