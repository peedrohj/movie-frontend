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
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default MovieCard;
