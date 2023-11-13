import Header from "@/components/header/header";
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
      <div className="flex flex-col h-screen items-center justify-between mt-5 mx-5">
        <video
          width="1200"
          height="600"
          controls
          className="border-2 rounded-md bg-black border-primary"
          style={{ aspectRatio: "16/9" }}
        >
          <source
            src={`http://localhost:5001/core/movie/${movieId}/video/download`}
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default MoviePage;
