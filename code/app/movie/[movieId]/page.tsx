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
        <ReactPlayer
          url={`http://localhost:5000/core/file/video/${data.file_id}`}
          controls={true} 
          playing={true}
        />
      )}
    </div>
  );
}

export default MoviePage;
