"use client";
import { generateVideoThumbnails } from "@rajesh896/video-thumbnails-generator";
import React, { useState } from "react";

function CreateMovieThumbnail() {
  const [thumbnails, setThumbnails] = useState<string[]>();

  const handleInputFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target?.files?.[0];
    setThumbnails([]);
    if (selectedFile?.type.includes("video")) {
      handleGenerateThumbnails(selectedFile);
    }
  };

  const handleGenerateThumbnails = async (selectedFile: File) => {
    generateVideoThumbnails(selectedFile, 10, "file")
      .then((res: string[]) => {
        setThumbnails(res);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  const currentThumbnail = () => {
    if (!thumbnails?.length) return "";

    return thumbnails[1];
  };

  return (
    <div className="flex align-middle justify-center gap-8 flex-col md:flex-row mx-8">
      <div>
        <div className="flex justify-center text-center items-center my-5 mx-auto">
          <img
            src={currentThumbnail()}
            alt=" "
            className="w-full h-full md:max-h-[200px] md:min-h-[200px] border-2 text-center text-border border-dashed flex align-middle justify-center "
            style={{ aspectRatio: 16 / 9 }}
          />
        </div>
        <div className="flex gap-2">
          <div className="flex grow">
            <label
              htmlFor="file"
              className="text-primary min-w-full text-center grow cursor-pointer border border-primary rounded p-2"
            >
              Select your video
            </label>
            <input
              id="file"
              className="hidden"
              type="file"
              accept="video/*"
              onChange={handleInputFileChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateMovieThumbnail;
