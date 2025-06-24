"use client";

import { authClient } from "@/lib/auth-client";

const Home = () => {
  const signIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/profile",
    });
  };

  return (
    <main className="relative w-full h-screen flex flex-col justify-center items-center gap-3 bg-[#F1F1F1]">
      <h2 className="text-3xl font-medium">welcome to pluto</h2>
      <button
        onClick={signIn}
        className="border border-gray-300 px-5 py-2 rounded-3xl hover:bg-gray-300 transition-colors duration-150"
      >
        continue to app
      </button>
    </main>
  );
};

export default Home;
