import React, { useState } from "react";
import MovieCard from "./movie-card";
import { useGetAllMoviesQuery } from "@/lib/redux/api/movie-api";
import { Skeleton } from "@/components/ui/skeleton";
import MovieCardSkeleton from "./movie-card-skeleton";
import { Separator } from "@radix-ui/react-separator";

function MovieList() {
  // const { data, error, isLoading, refetch } = useGetAllMoviesQuery({});
  const data = [
    [
      {
        id: "f4f0e71c-e482-4a77-b305-2336d119aded",
        created_at: "2023-09-24T01:18:53.972902",
        updated_at: null,
        deleted_at: null,
        archived_at: null,
        name: "003.mp4",
        description: "None",
        file_id: "1b0b0b5e-a1af-43ce-895e-7ccb5b397aeb",
        size: "292.2491521835327",
        content_type: "video/mp4",
      },
    ],
    [
      {
        id: "f4f0e71c-e482-4a77-b305-2336d119aded",
        created_at: "2023-09-24T01:18:53.972902",
        updated_at: null,
        deleted_at: null,
        archived_at: null,
        name: "003.mp4",
        description: "None",
        file_id: "1b0b0b5e-a1af-43ce-895e-7ccb5b397aeb",
        size: "292.2491521835327",
        content_type: "video/mp4",
      },
    ],
    [
      {
        id: "f4f0e71c-e482-4a77-b305-2336d119aded",
        created_at: "2023-09-24T01:18:53.972902",
        updated_at: null,
        deleted_at: null,
        archived_at: null,
        name: "003.mp4",
        description: "None",
        file_id: "1b0b0b5e-a1af-43ce-895e-7ccb5b397aeb",
        size: "292.2491521835327",
        content_type: "video/mp4",
      },
    ],
    [
      {
        id: "f4f0e71c-e482-4a77-b305-2336d119aded",
        created_at: "2023-09-24T01:18:53.972902",
        updated_at: null,
        deleted_at: null,
        archived_at: null,
        name: "003.mp4",
        description: "None",
        file_id: "1b0b0b5e-a1af-43ce-895e-7ccb5b397aeb",
        size: "292.2491521835327",
        content_type: "video/mp4",
      },
    ],
    [
      {
        id: "f4f0e71c-e482-4a77-b305-2336d119aded",
        created_at: "2023-09-24T01:18:53.972902",
        updated_at: null,
        deleted_at: null,
        archived_at: null,
        name: "003.mp4",
        description: "None",
        file_id: "1b0b0b5e-a1af-43ce-895e-7ccb5b397aeb",
        size: "292.2491521835327",
        content_type: "video/mp4",
      },
    ],
    [
      {
        id: "f4f0e71c-e482-4a77-b305-2336d119aded",
        created_at: "2023-09-24T01:18:53.972902",
        updated_at: null,
        deleted_at: null,
        archived_at: null,
        name: "003.mp4",
        description: "None",
        file_id: "1b0b0b5e-a1af-43ce-895e-7ccb5b397aeb",
        size: "292.2491521835327",
        content_type: "video/mp4",
      },
    ],
    [
      {
        id: "f4f0e71c-e482-4a77-b305-2336d119aded",
        created_at: "2023-09-24T01:18:53.972902",
        updated_at: null,
        deleted_at: null,
        archived_at: null,
        name: "003.mp4",
        description: "None",
        file_id: "1b0b0b5e-a1af-43ce-895e-7ccb5b397aeb",
        size: "292.2491521835327",
        content_type: "video/mp4",
      },
    ],
    [
      {
        id: "f4f0e71c-e482-4a77-b305-2336d119aded",
        created_at: "2023-09-24T01:18:53.972902",
        updated_at: null,
        deleted_at: null,
        archived_at: null,
        name: "003.mp4",
        description: "None",
        file_id: "1b0b0b5e-a1af-43ce-895e-7ccb5b397aeb",
        size: "292.2491521835327",
        content_type: "video/mp4",
      },
    ],
    [
      {
        id: "f4f0e71c-e482-4a77-b305-2336d119aded",
        created_at: "2023-09-24T01:18:53.972902",
        updated_at: null,
        deleted_at: null,
        archived_at: null,
        name: "003.mp4",
        description: "None",
        file_id: "1b0b0b5e-a1af-43ce-895e-7ccb5b397aeb",
        size: "292.2491521835327",
        content_type: "video/mp4",
      },
    ],
  ];
  return (
    <div className="flex flex-row">
      <div className="p-5 md:basis-4/5 items-center grid grid-cols-1 md:grid-cols-4 gap-4 max-w-fit">
        {/* {isLoading && <MovieCardSkeleton />} */}
        {data &&
          data.map((movie: Movie) => (
            <MovieCard key={movie.id} params={{ id: movie.id }} />
          ))}
      </div>
      
      <div className="p-5 basis-1/5 hidden md:flex">
        <h1 className="text-primart-background text-3xl font-bold">Category</h1>
      </div>
    </div>
  );
}

export default MovieList;
