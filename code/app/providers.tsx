"use client";
import { ReduxProvider } from "@/lib/redux/provider";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
function Providers({ children }: Props) {
  return (
    <SessionProvider>
      <ReduxProvider>{children}</ReduxProvider>
    </SessionProvider>
  );
}

export default Providers;
