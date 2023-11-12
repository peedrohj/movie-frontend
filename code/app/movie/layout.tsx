import { options } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(options);
  if (!session) redirect("/auth/signin");

  return <main>{children}</main>;
}
