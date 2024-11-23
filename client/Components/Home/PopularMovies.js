import React from "react";
import Titles from "../Titles";
import { BsCollectionFill } from "react-icons/bs";
import Movie from "../Movie";
import Loader from "../Notfications/Loader";
import { Empty } from "../Notfications/Empty";
import { Movies } from "../../Data/MovieData";

function PopularMovies({ isLoading, movies, limit = 8 }) {
  const moviesToDisplay = movies?.length > 0 ? movies : Movies;

  return (
    <div className="my-16">
      <Titles title="Popular Movies" Icon={BsCollectionFill} />
      {isLoading ? (
        <Loader />
      ) : moviesToDisplay.length > 0 ? (
        <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {moviesToDisplay.slice(0, limit).map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="mt-6">
          <Empty message="No popular movies available at the moment. Check back later!" />
        </div>
      )}
    </div>
  );
}

export default PopularMovies;
