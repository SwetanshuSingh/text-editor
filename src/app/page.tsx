"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const { isPending, data: session } = authClient.useSession();

  const signIn = async () => {
    if (session?.user) {
      router.push("/profile");
      return;
    }

    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/profile",
    });
  };

  return (
    <main className="relative w-full h-screen flex flex-col justify-center items-center gap-3 bg-[#F1F1F1]">
      <h2 className="text-3xl font-medium">welcome to pluto</h2>
      <button
        disabled={isPending}
        onClick={signIn}
        className="border border-gray-300 px-5 py-2 rounded-3xl hover:bg-gray-300 transition-colors duration-150"
      >
        continue to app
      </button>
    </main>
  );
};

export default Home;
