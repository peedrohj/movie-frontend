import React, { useState } from "react";
import MovieCard from "./movie-card";
import { useGetAllMoviesQuery } from "@/lib/redux/api/movie-api";
import { Skeleton } from "@/components/ui/skeleton";
import MovieCardSkeleton from "./movie-card-skeleton";
import { Separator } from "@radix-ui/react-separator";

function MovieList() {
  const { data, error, isLoading, refetch } = useGetAllMoviesQuery({});

  return (
    <div className="flex flex-row">
      <div className="p-5 md:basis-4/5 items-center flex flex-row gap-4 flex-wrap">
        {isLoading && <MovieCardSkeleton />}
        {data &&
          data.map((movie: Movie) => (
            <MovieCard key={movie.id} params={{ id: movie.id, size: movie.size, created_at: movie.created_at }} />
          ))}
      </div>
      
      <div className="p-5 basis-1/5 hidden md:flex">
        <h1 className="text-primart-background text-3xl font-bold">Category</h1>
      </div>
    </div>
  );
}

export default MovieList;
