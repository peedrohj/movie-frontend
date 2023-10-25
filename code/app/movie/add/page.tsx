"use client"

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
        console.error(err)
      })
  };

  return (
    <div className="flex flex-col justify-center text-center items-center grow">
      <div className="p-5 grow">
        <h1 className="text-3xl font-bold text-foreground my-5">
          Welcome! Here you can upload your videos.
        </h1>
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
          <Button onClick={handleGenerateThumbnails} >Generate Thumbnails</Button>
        </div>

        {thumbnails?.map((image, index) => (
          <img
            src={image}
            alt="thumbnails"
            style={{ maxWidth: 200 }}
            key={`thumb_${index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default AddMoviePage;
