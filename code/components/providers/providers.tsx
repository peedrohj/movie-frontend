"use client";

import { ReduxProvider } from "@/lib/redux/provider";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";

interface Props {
  children: ReactNode;
}
function Providers({ children }: Props) {
  return (
    <ThemeProvider>
      <SessionProvider>
        <ReduxProvider>{children}</ReduxProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default Providers;
