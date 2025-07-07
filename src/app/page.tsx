"use client";

import AutoScrollSection from "@/components/auto-scroll-section";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const items = [
  <>
    <span className="bg-[#FFFF0033] text-black py-0.5">Lorem</span> ipsum dolor
    sit amet consectetur adipisicing elit. Excepturi rem nemo itaque animi
    consequuntur magni vel, ipsum sunt sed autem{" "}
    <span className="bg-[#FFFF0033] text-black py-0.5">placeat possimus</span>{" "}
    velit, illo eveniet distinctio suscipit exercitationem{" "}
    <span className="bg-[#FFFF0033] text-black py-0.5">nobis</span> quam.
  </>,
  <>
    <span className="bg-[#FFFF0033] text-black py-0.5">Lorem</span> ipsum dolor
    sit amet consectetur adipisicing elit. Excepturi rem nemo itaque animi
    consequuntur magni vel, ipsum sunt sed autem{" "}
    <span className="bg-[#FFFF0033] text-black py-0.5">placeat possimus</span>{" "}
    velit, illo eveniet distinctio suscipit exercitationem{" "}
    <span className="bg-[#FFFF0033] text-black py-0.5">nobis</span> quam.
  </>,
  <>
    <span className="bg-[#FFFF0033] text-black py-0.5">Lorem</span> ipsum dolor
    sit amet consectetur adipisicing elit. Excepturi rem nemo itaque animi
    consequuntur magni vel, ipsum sunt sed autem{" "}
    <span className="bg-[#FFFF0033] text-black py-0.5">placeat possimus</span>{" "}
    velit, illo eveniet distinctio suscipit exercitationem{" "}
    <span className="bg-[#FFFF0033] text-black py-0.5">nobis</span> quam.
  </>,
  <>
    <span className="bg-[#FFFF0033] text-black py-0.5">Lorem</span> ipsum dolor
    sit amet consectetur adipisicing elit. Excepturi rem nemo itaque animi
    consequuntur magni vel, ipsum sunt sed autem{" "}
    <span className="bg-[#FFFF0033] text-black py-0.5">placeat possimus</span>{" "}
    velit, illo eveniet distinctio suscipit exercitationem{" "}
    <span className="bg-[#FFFF0033] text-black py-0.5">nobis</span> quam.
  </>,
  <>
    <span className="bg-[#FFFF0033] text-black py-0.5">Lorem</span> ipsum dolor
    sit amet consectetur adipisicing elit. Excepturi rem nemo itaque animi
    consequuntur magni vel, ipsum sunt sed autem{" "}
    <span className="bg-[#FFFF0033] text-black py-0.5">placeat possimus</span>{" "}
    velit, illo eveniet distinctio suscipit exercitationem{" "}
    <span className="bg-[#FFFF0033] text-black py-0.5">nobis</span> quam.
  </>,
  <>
    <span className="bg-[#FFFF0033] text-black py-0.5">Lorem</span> ipsum dolor
    sit amet consectetur adipisicing elit. Excepturi rem nemo itaque animi
    consequuntur magni vel, ipsum sunt sed autem{" "}
    <span className="bg-[#FFFF0033] text-black py-0.5">placeat possimus</span>{" "}
    velit, illo eveniet distinctio suscipit exercitationem{" "}
    <span className="bg-[#FFFF0033] text-black py-0.5">nobis</span> quam.
  </>,
  <>
    <span className="bg-[#FFFF0033] text-black py-0.5">Lorem</span> ipsum dolor
    sit amet consectetur adipisicing elit. Excepturi rem nemo itaque animi
    consequuntur magni vel, ipsum sunt sed autem{" "}
    <span className="bg-[#FFFF0033] text-black py-0.5">placeat possimus</span>{" "}
    velit, illo eveniet distinctio suscipit exercitationem{" "}
    <span className="bg-[#FFFF0033] text-black py-0.5">nobis</span> quam.
  </>,
  <>
    <span className="bg-[#FFFF0033] text-black py-0.5">Lorem</span> ipsum dolor
    sit amet consectetur adipisicing elit. Excepturi rem nemo itaque animi
    consequuntur magni vel, ipsum sunt sed autem{" "}
    <span className="bg-[#FFFF0033] text-black py-0.5">placeat possimus</span>{" "}
    velit, illo eveniet distinctio suscipit exercitationem{" "}
    <span className="bg-[#FFFF0033] text-black py-0.5">nobis</span> quam.
  </>,
  <>
    <span className="bg-[#FFFF0033] text-black py-0.5">Lorem</span> ipsum dolor
    sit amet consectetur adipisicing elit. Excepturi rem nemo itaque animi
    consequuntur magni vel, ipsum sunt sed autem{" "}
    <span className="bg-[#FFFF0033] text-black py-0.5">placeat possimus</span>{" "}
    velit, illo eveniet distinctio suscipit exercitationem{" "}
    <span className="bg-[#FFFF0033] text-black py-0.5">nobis</span> quam.
  </>,
];

const Home = () => {
  return (
    <main className="relative w-full h-screen bg-[#EBEBEB] flex p-5 font-rubik gap-5 gap-x-10">
      <div className="absolute inset-0 w-full h-full flex justify-center items-start bg-white/20 backdrop-blur-[1px] z-10 p-8">
        <div className="w-full h-16 bg-black rounded-lg"></div>
      </div>
      <AutoScrollSection
        items={items}
        groupSize={5}
        interval={2000}
        direction="down"
      />

      <AutoScrollSection
        items={items}
        groupSize={5}
        interval={2000}
        direction="up"
      />

      <AutoScrollSection
        items={items}
        groupSize={5}
        interval={2000}
        direction="down"
      />

      <AutoScrollSection
        items={items}
        groupSize={5}
        interval={2000}
        direction="up"
      />
    </main>
  );

  // const router = useRouter();
  // const { isPending, data: session } = authClient.useSession();

  // const signIn = async () => {
  //   if (session?.user) {
  //     router.push("/profile");
  //     return;
  //   }

  //   await authClient.signIn.social({
  //     provider: "google",
  //     callbackURL: "/profile",
  //   });
  // };

  // return (
  //   <main className="relative w-full h-screen flex flex-col justify-center items-center gap-3 bg-[#F1F1F1]">
  //     <h2 className="text-3xl font-medium">welcome to pluto</h2>
  //     <button
  //       disabled={isPending}
  //       onClick={signIn}
  //       className="border border-gray-300 px-5 py-2 rounded-3xl hover:bg-gray-300 transition-colors duration-150"
  //     >
  //       continue to app
  //     </button>
  //   </main>
  // );
};

export default Home;
