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

  return (
    <div>
      <Header />
        <div className="flex max-w-full flex-col items-center justify-between mt-5">
          <ReactPlayer
            width="746"
            height="420"
            style={{ aspectRatio: "16/9", maxWidth: "100%" }}
            url={`http://localhost:5001/core/movie/${movieId}/video/download`}
            controls={true}
            onError={(error, data) => console.log("ERROR: ", error.error)}
          />
        </div>
    </div>
  );
}

export default MoviePage;
