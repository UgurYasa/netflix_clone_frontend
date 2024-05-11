import React from "react";
import { Route, Routes } from "react-router-dom";
import Categories from "../pages/Categories";
import Films from "../pages/Films";
import FilmDetail from "../pages/FilmDetail";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Categories />} />
      <Route path="/films/:category" element={<Films />} />
      <Route path="/film_detail/:id" element={<FilmDetail />} />{" "}
    </Routes>
  );
}
