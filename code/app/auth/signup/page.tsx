import CreateAccount from "@/components/forms/CreateAccount";
import bg from "@/public/assets/bg.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen md:flex-row min-w-full flex-col-reverse items-center justify-between">
      <div
        className="bg-background min-h-screen lg:w-3/5 md:w-2/5 w-full"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      ></div>
      <div className="bg-background flex min-h-screen lg:w-2/5  md:w-3/5 md:px-24 w-full flex-row items-center justify-center ">
        <CreateAccount />
      </div>
    </main>
  );
}
