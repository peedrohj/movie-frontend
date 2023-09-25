"use client";

import Header from "@/components/header";
import { useGetMovieQuery } from "@/lib/redux/api/movie-api";
import React from "react";
import ReactPlayer from "react-player";

type PageProps = {
  params: {
    movieId: string;
  };
};

function MoviePage({ params: { movieId } }: PageProps) {
  const { data, error, isLoading, refetch } = useGetMovieQuery({ id: movieId });

  return (
    <div>
      <Header />
      {data && (
        <div className="flex max-w-full flex-col items-center justify-between mt-5">
          <ReactPlayer
            width="746"
            height="420"
            style={{ aspectRatio: "16/9", maxWidth: "100%" }}
            url={`http://localhost:5000/core/file/video/${data.file_id}`}
            controls={true}
          />
        </div>
      )}
    </div>
  );
}

export default MoviePage;
