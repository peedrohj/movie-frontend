"use client";

import React, { useState } from "react";

import CreateMovie from "@/components/forms/CreateMovie";
import CreateMovieThumbnail from "@/components/forms/CreateMovieThumbnail";

function AddMoviePage() {
  const [thumbnails, setThumbnails] = useState<string[]>();

  return (
    <div className="flex flex-col justify-center text-center items-center">
      <div className="flex flex-col w-full ">
        <div className="justify-center text-center items-center">
          <h1 className="text-3xl font-bold text-foreground my-5 mx-8">
            Welcome! Here you can upload your videos.
          </h1>
        </div>

        <div className="flex align-middle justify-center gap-8 flex-col md:flex-row mx-8">
          <CreateMovieThumbnail />
          <CreateMovie />
        </div>
      </div>
    </div>
  );
}

export default AddMoviePage;
