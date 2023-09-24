"use client";

import MovieList from "@/components/feature/movie/movie-list";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <MovieList />
    </main>
  );
}
