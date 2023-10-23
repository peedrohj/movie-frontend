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
    size: string;
    created_at: string;
  };
};


function MovieCard({ params: { id, size, created_at } }: MoviePropos) {
  return (
    <Link key={id} href={`/movie/${id}`}>
      <Card className="min-w-[300px]">
        <CardContent className="p-0">
          <img
            src="https://media.istockphoto.com/id/529249803/pt/foto/fundo-de-folhas-de-cor-verde-brilhante.webp?s=2048x2048&w=is&k=20&c=vqI7AUw-FFoqMW631yxdNwNNLDdnOLCgT_wWbQxc8RY="
            alt="Card Image"
            className="w-full"
          />
        </CardContent>
        <CardHeader>
          <CardTitle>Nome do filme</CardTitle>
          <CardDescription>Duração: {size}</CardDescription>
          <CardDescription>
            Adicionado em{" "}
            {new Date(created_at).toLocaleDateString("pt-br", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}

export default MovieCard;
