import Link from "next/link";
import React from "react";
import { Separator } from "@/components/ui/separator";
import ThemeSwitcher from "./theme-switcher";
import SearchBar from "./searchBar";
import { options } from "@/lib/auth";
import { getServerSession } from "next-auth";
import ConditionalAvatar from "./conditionalAvatar";

async function Header() {
  const session = await getServerSession(options);
  const isLogged = session ? true : false;

  return (
    <header className=" p-5 h-18 border-b ">
      <div className="flex flex-row items-center h-full">
        <div className="font-bold basis-1/4 ">
          <Link href="/">
            <h1 className="text-primary md:text-2xl text-xl">Header</h1>
          </Link>
        </div>
        <div className="font-bold basis-3/4 md:basis-2/4 text-center">
          <div>
            <SearchBar />
          </div>
        </div>
        <div className="basis-1/4 hidden md:flex space-x-4 justify-end items-center h-full ">
          <ThemeSwitcher />
          <Separator className="h-12 bg-primary" orientation="vertical" />
          <ConditionalAvatar isLogged={isLogged} />
        </div>
      </div>
    </header>
  );
}

export default Header;
