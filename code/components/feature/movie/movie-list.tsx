import React, { useState } from "react";
import MovieCard from "./movie-card";
import { useGetAllMoviesQuery } from "@/lib/redux/api/movie-api";

function MovieList() {
  const { data, error, isLoading, refetch } = useGetAllMoviesQuery();
  const [movieData, setMovieData] = useState([]);

  return (
    <div className="p-5">
      {data.map((movie) => (
        <MovieCard key={movie.id} />
      ))}
    </div>
  );
}

export default MovieList;
