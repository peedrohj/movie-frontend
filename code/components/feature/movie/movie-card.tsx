import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
type MoviePropos = {
  params: {
    id: string;
  };
};

import VideoThumbnail from 'react-video-thumbnail';

function MovieCard({ params: { id } }: MoviePropos) {
  return (
    <Link key={id} href={`/movie/${id}`}>
      <Card className="min-w-[350px]">
        <CardHeader>
          {/* <VideoThumbnail
          videoUrl={`http://localhost:5001/core/movie/${id}/video/download`}
          thumbnailHandler={(thumbnail) => console.log(thumbnail)}
          width={450}
          height={300}
          snapshotAtTime={5}
          /> */}
          <img
            src="https://media.istockphoto.com/id/529249803/pt/foto/fundo-de-folhas-de-cor-verde-brilhante.webp?s=2048x2048&w=is&k=20&c=vqI7AUw-FFoqMW631yxdNwNNLDdnOLCgT_wWbQxc8RY="
            alt="Card Image"
            className="w-full"
          />
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardHeader>
          <CardTitle>Nome do filme</CardTitle>
          <CardDescription>00:00</CardDescription>
        </CardHeader>
    </Card>
      </Link>
  );
}

export default MovieCard;
