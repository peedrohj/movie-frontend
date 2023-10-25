"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  generateVideoThumbnails,
  importFileandPreview,
} from "@rajesh896/video-thumbnails-generator";

function AddMoviePage() {
  const [inputFile, setInputFile] = useState<File | null>(null);
  const [inputUrl, setInputUrl] = useState<string>("");
  const [thumbnails, setThumbnails] = useState<string[]>();

  const clearForm = () => {
    setInputFile(null);
    setInputUrl("");
  };

  const handleInputFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target?.files?.[0];
    if (selectedFile?.type.includes("video")) {
      clearForm();

      importFileandPreview(selectedFile).then((url: string) => {
        setInputFile(selectedFile);
        setInputUrl(url);
      });
    }
  };

  const handleGenerateThumbnails = async () => {
    generateVideoThumbnails(inputFile as any, 10, "file")
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
    <div className="flex flex-col justify-center text-center items-center">
      <div className="p-5 w-2/6 justify-center text-center items-center ">
        <h1 className="text-3xl font-bold text-foreground my-5">
          Welcome! Here you can upload your videos.
        </h1>

        <div className="flex justify-center text-center items-center my-5 mx-auto">
          <img src={currentThumbnail()} alt="thumbnail" className="w-full min-h-[300px] border text-center" />
        </div>

        <div className="flex gap-2">
          <div className="text-center grow">
            <Input
              id="file"
              type="file"
              accept="video/*"
              className="text-center cursor-pointer"
              onChange={handleInputFileChange}
            />
          </div>
          <Button onClick={handleGenerateThumbnails}>
            Generate Thumbnails
          </Button>
        </div>

      </div>
    </div>
  );
}

export default AddMoviePage;
