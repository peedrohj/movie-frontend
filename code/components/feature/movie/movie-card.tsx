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
function MovieCard({ params: { id } }: MoviePropos) {
  return (
    <Card className="md:max-w-sm w-full">
      <Link key={id} href={`/movie/${id}`}>
        <CardContent className="p-0">
          <img
            src="https://media.istockphoto.com/id/529249803/pt/foto/fundo-de-folhas-de-cor-verde-brilhante.webp?s=2048x2048&w=is&k=20&c=vqI7AUw-FFoqMW631yxdNwNNLDdnOLCgT_wWbQxc8RY="
            alt="Card Image"
            className="w-full"
          />
        </CardContent>
        <CardHeader>
          <CardTitle>Nome do filme</CardTitle>
          <CardDescription>00:00</CardDescription>
        </CardHeader>
      </Link>
    </Card>
  );
}

export default MovieCard;
