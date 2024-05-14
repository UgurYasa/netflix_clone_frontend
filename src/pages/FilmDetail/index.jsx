import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectFilm } from "../../redux/filmSlice";

export default function FilmDetail() {
  //PARAMS
  let { id } = useParams();
  //REDUX
  const { selectFilm } = useSelector((state) => state.film);
  const dispatch = useDispatch();
  //USE EFFECTS
  useEffect(() => {
    dispatch(setSelectFilm(id));
  }, [id]);
  return (
    <div className="w-full max-sm:h-auto h-screen flex justify-center my-5">
      {selectFilm && (
        <div className="flex flex-col  w-full h-full gap-3 my-3 items-center">
          {/* Film Image */}
          <img
            src={selectFilm.images["Poster Art"].url}
            alt={selectFilm.title}
            className="w-1/2 h-2/3 md:object-fill object-contain rounded-xl border-2 border-slate-400"
          />
          {/* FIlm Detail */}
          <div className="flex flex-col gap-y-3 border-[1px] border-slate-400 rounded-xl my-3 p-3 ">
            <p className=" lg:text-3xl text-xl">
              <span className="font-bold uppercase"> title : </span>
              {selectFilm.title}
            </p>
            <p className=" lg:text-xl text-lg">
              <span className="font-bold uppercase"> description : </span>
              {selectFilm.description}
            </p>
            <p className=" lg:text-xl text-lg">
              <span className="font-bold uppercase"> Category : </span>
              <span className="uppercase">{selectFilm.programType}</span>
            </p>
            <p className=" lg:text-xl text-lg">
              <span className="font-bold uppercase"> Release Year : </span>
              {selectFilm.releaseYear}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
