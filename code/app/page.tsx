"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import bg from "@/public/assets/bg.jpg";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();

  const handleLogin = () => {
    push("/auth/signin");
  };
  const handleRegister = () => {
    push("/auth/signup");
  };

  return (
    <main className="flex min-h-screen md:flex-row min-w-full flex-col-reverse items-center justify-between">
      <div
        className="bg-background min-h-screen lg:w-3/5 md:w-2/5 w-full"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="bg-background flex min-h-screen lg:w-2/5  md:w-3/5 md:px-24 w-full flex-row items-center justify-center ">
        <Card>
          <CardHeader>
            <CardTitle>Welcome to our plataform!</CardTitle>
            <CardDescription>
              Click on the button bellow to login or create your account.
            </CardDescription>
          </CardHeader>

          <CardFooter className="flex justify-between">
            <Button onClick={handleLogin} variant="outline">
              Login
            </Button>
            <Button onClick={handleRegister} type="submit">
              Create my account
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
