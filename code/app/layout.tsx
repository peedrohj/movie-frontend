import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/header";
import Providers from "@/components/providers/providers";

export const metadata: Metadata = {
  title: "Movie APP",
  description: "Page for the movie APP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " min-h-screen min-w-screen"}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
