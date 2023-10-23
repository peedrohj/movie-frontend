import React, { useState } from "react";
import MovieCard from "./movie-card";
import { useGetAllMoviesQuery } from "@/lib/redux/api/movie-api";
import { Skeleton } from "@/components/ui/skeleton";
import MovieCardSkeleton from "./movie-card-skeleton";

function MovieList() {
  const { data, error, isLoading, refetch } = useGetAllMoviesQuery({});

  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {isLoading && <MovieCardSkeleton />}
      {data &&
        data.map((movie: Movie) => (
          <MovieCard key={movie.id} params={{ id: movie.id }} />
        ))}
    </div>
  );
}

export default MovieList;
