import React from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const switchTheme = (): void => {
    if (theme == "dark") setTheme("ligth");
    if (theme == "ligth") setTheme("dark");
  };

  return (
    <Button variant="link" className="w-9 px-0 " onClick={switchTheme}>
      <SunIcon className="text-primary hover:text-primary/75 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="text-primary hover:text-primary/75 absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default ThemeSwitcher;

