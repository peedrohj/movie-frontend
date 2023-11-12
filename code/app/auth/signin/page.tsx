"use client"

import Login from "@/components/forms/login";

export default function Home() {
  return (
    <main className="flex h-[100%] md:flex-row min-w-full flex-col-reverse items-center justify-center">
      <Login />
    </main>
  );
}
