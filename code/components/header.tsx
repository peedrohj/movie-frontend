"use client";

import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ThemeSwitcher from "./theme-switcher";
import { Input } from "./ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

function Header() {
  return (
    <header className=" p-5 h-18 border-b ">
      <div className="flex flex-row items-center h-full">
        <div className="font-bold basis-1/4 ">
          <Link href="/">
            <h1 className="text-primary md:text-2xl text-xl">Header</h1>
          </Link>
        </div>
        <div className="font-bold basis-3/4 md:basis-2/4 text-center">
          <div className="flex items-center">
            <Input type="email" placeholder="Search" className="mr-2" />
            <Button
              type="submit"
            >
              <MagnifyingGlassIcon />
            </Button>
          </div>
        </div>
        <div className="basis-1/4 hidden md:flex space-x-4 justify-end items-center h-full ">
          <Link href="/">
            <Button variant={"link"} className="hover:text-primary/70">Home</Button>
          </Link>
          <Separator className="h-12 bg-primary" orientation="vertical" />
          <Link href="/auth/signin">
            <Button variant={"link"} className="hover:text-primary/70">Login</Button>
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;
