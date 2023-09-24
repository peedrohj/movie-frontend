import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ThemSwitcher from "./theme-switcher";
import { Input } from "./ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

function Header() {
  return (
    <header className=" py-5 px-12 h-18 drop-shadow border-b ">
      <div className="flex flex-row items-center h-full">
        <div className="font-bold basis-1/4 ">
          <h1 className="text-primary text-3xl">Header</h1>
        </div>
        <div className="font-bold basis-2/4 text-center">
          <div className="flex items-center">
            <Input type="email" placeholder="Search" className="mr-2"/>
            <Button type="submit" className="bg-secondary text-primary hover:text-secondary">
                <MagnifyingGlassIcon />
            </Button>
          </div>
        </div>
        <div className="basis-1/4 flex space-x-4 justify-end items-center h-full">
          <Link href="/">
            <Button variant={"link"}>Home</Button>
          </Link>
          <Separator className="h-12" orientation="vertical" />
          <Link href="/auth/signin">
            <Button variant={"link"}>Login</Button>
          </Link>
          <ThemSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;
