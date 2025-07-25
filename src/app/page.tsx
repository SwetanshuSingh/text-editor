"use client";

import { authClient } from "@/lib/auth-client";
import { ArrowUpRight } from "lucide-react";
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
    <main className="relative w-full h-screen px-3 pt-6 flex flex-col gap-5 bg-[#F1F1F1]">
      <nav className="w-full flex justify-between items-center px-9">
        <AssistantIcon />
        <button className="text-sm bg-black/90 text-white font-semibold rounded-md px-4 py-1.5 font-shadows">
          try now
        </button>
      </nav>

      <div className="w-full flex-grow px-9">
        <div className="max-h-[660px] w-full h-full flex gap-x-5">
          <div className="overflow-hidden max-w-56 flex flex-col gap-y-2">
            <div className="w-full font-shadows text-2xl text-balance text-justify">
              The rapid evolution of{" "}
              <span className="bg-amber-200">artificial intelligence</span> is
              reshaping the world in ways once thought to be purely science
              fiction. From self-driving cars to virtual assistants, machines
              are learning to mimic{" "}
              <span className="bg-green-400">human behavior </span> with
              startling accuracy.
            </div>

            <div className="w-full font-shadows text-lg text-balance text-justify">
              As algorithms grow more advanced, questions around ethics, bias,
              and data privacy become increasingly relevant. The challenge now
              is not just in building smarter systems, but in ensuring they
              operate fairly and transparently.
            </div>

            <div className="w-full font-shadows text-sm italic text-balance text-justify">
              Nestled deep within the valley, the lake shimmered like a sheet of
              <span className="bg-purple-300">polished glass</span> under the
              afternoon sun. The only sounds were the rhythmic chirping of
              crickets and the soft rustling of pine leaves in the breeze.
            </div>
          </div>

          <div className="overflow-hidden max-w-56 flex flex-col gap-y-2">
            <div className="w-full font-shadows text-lg text-balance text-justify">
              The rapid evolution of artificial intelligence is reshaping the
              world in ways once thought to be{" "}
              <span className="bg-lime-400">purely science fiction</span>. From
              self-driving cars to virtual assistants, machines are learning to
              mimic human behavior with startling accuracy.
            </div>

            <div className="w-full font-shadows text-3xl italic text-balance text-justify">
              As algorithms grow more advanced, questions around ethics, bias,
              and data privacy become increasingly relevant. The challenge now
              is not just in <span className="bg-orange-200">building</span>{" "}
              smarter systems, but in ensuring they operate fairly and
              transparently.
            </div>

            <div className="w-full font-shadows text-lg text-balance text-justify">
              Nestled deep within the valley, the lake shimmered like a sheet of
              polished glass under the afternoon sun. The only sounds were the
              rhythmic chirping of crickets and the soft rustling of pine leaves
              in the breeze.
            </div>
          </div>

          <div className="overflow-hidden max-w-56 flex flex-col gap-y-2">
            <div className="w-full font-shadows text-lg text-balance text-justify">
              The rapid evolution of artificial intelligence is reshaping the
              world in ways once thought to be purely science fiction. From
              self-driving cars to virtual assistants, machines are{" "}
              <span className="bg-slate-400">learning to mimic human </span>{" "}
              behavior with startling accuracy.
            </div>

            <div className="w-full font-shadows text-2xl text-balance text-justify">
              As algorithms grow more advanced, questions around ethics, bias,
              and data privacy become{" "}
              <span className="bg-orange-300">increasingly relevant</span>. The
              challenge now is not just in building smarter systems, but in
              ensuring they operate fairly and transparently.
            </div>

            <div className="w-full font-shadows text-lg text-balance text-justify">
              Nestled deep within the valley, the lake shimmered like a sheet of
              polished glass under the afternoon sun. The only sounds were the
              rhythmic chirping of crickets and the soft rustling of pine leaves
              in the breeze.
            </div>
          </div>

          <div className="overflow-hidden max-w-56 flex flex-col gap-y-2">
            <div className="w-full font-shadows text-2xl text-balance text-justify">
              The rapid evolution of artificial intelligence is reshaping the
              world in ways once thought to be{" "}
              <span className="bg-blue-300"> purely science</span> fiction. From
              self-driving cars to virtual assistants, machines are learning to
              mimic human behavior with startling accuracy.
            </div>

            <div className="w-full font-shadows text-lg text-balance text-justify">
              As algorithms grow more advanced, questions around ethics, bias,
              and data privacy become increasingly relevant.{" "}
              <span className="bg-amber-300">
                The challenge now is not just
              </span>{" "}
              in building smarter systems, but in ensuring they operate fairly
              and transparently.
            </div>

            <div className="w-full font-shadows text-sm text-balance text-justify">
              Nestled deep within the valley, the lake shimmered like a sheet of
              polished glass under the afternoon sun. The only sounds were the
              rhythmic chirping of crickets and the soft rustling of pine leaves
              in the breeze.
            </div>
          </div>

          <div className="overflow-hidden max-w-56 flex flex-col gap-y-2">
            <div className="w-full font-shadows italic text-balance text-justify">
              The rapid evolution of artificial intelligence is reshaping the
              world in ways once thought to be purely science fiction. From
              self-driving cars to virtual assistants, machines are learning to
              mimic human behavior with startling accuracy.
            </div>

            <div className="w-full font-shadows text-3xl text-balance text-justify">
              As algorithms grow more advanced, questions around{" "}
              <span className="bg-green-300">ethics, bias, and data</span>{" "}
              privacy become increasingly relevant. The challenge now is not
              just in building smarter systems, but in ensuring they operate
              fairly and transparently.
            </div>

            <div className="w-full font-shadows text-sm text-balance text-justify">
              Nestled deep within the valley, the lake shimmered like a sheet of
              polished glass under the afternoon sun. The only sounds were the
              rhythmic chirping of crickets and the soft rustling of pine leaves
              in the breeze.
            </div>
          </div>

          <div className="overflow-hidden max-w-56 flex flex-col gap-y-2">
            <div className="w-full font-shadows text-sm text-balance text-justify">
              <span className="bg-yellow-200">
                The rapid evolution of artificial{" "}
              </span>{" "}
              intelligence is reshaping the world in ways once thought to be
              purely science fiction. From self-driving cars to virtual
              assistants, machines are learning to mimic human behavior with
              startling accuracy.
            </div>

            <div className="w-full font-shadows text-lg text-balance text-justify">
              As algorithms grow more advanced, questions around ethics, bias,
              and data privacy become increasingly relevant. The challenge now
              is not just in building smarter systems, but in ensuring they
              operate fairly and transparently.
            </div>

            <div className="w-full font-shadows text-2xl italic text-balance text-justify">
              <span className="bg-purple-400">Nestled deep</span> within the
              valley, the lake shimmered like a sheet of polished glass under
              the afternoon sun. The only sounds were the rhythmic chirping of
              crickets and the soft rustling of pine leaves in the breeze.
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center gap-4 py-5">
        <button className="flex items-center gap-0.5 text-sm text-black/90 bg-white hover:bg-black/90 hover:text-white transition-colors duration-200 tracking-wider font-semibold rounded-md px-4 py-1.5 font-shadows">
          <p> playground</p>
          <ArrowUpRight size={14} />
        </button>
      </div>
    </main>
  );
};

export default Home;

const AssistantIcon = () => {
  return (
    <svg
      className="text-black/90"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M5.748 9.195c.607.277.992 1.139 1.04 2.342c.033.797-.06 1.399-.303 1.925c-.564 1.209-1.578 1.252-2.163.092c-.25-.488-.358-1.025-.358-1.778c.006-.803.092-1.274.347-1.795c.363-.742.895-1.035 1.437-.786zm9.768.076c.591.39.998 1.627.916 2.776c-.092 1.371-.699 2.358-1.436 2.358c-.407 0-.824-.358-1.095-.943c-.45-.976-.423-2.613.065-3.567c.363-.716 1.024-.981 1.55-.624zM12.388.029c.223.032.255.06.38.292c.184.336.298.456.64.678c.314.2.314.211.206.726c-.093.434-.039.862.162 1.247c.293.58 1.111 1.187 1.86 1.377c.281.076.395.081.737.022c.222-.033.439-.049.482-.033c.049.022.163.2.26.401c.217.467.76 1.025 1.193 1.226c.705.33 1.47.314 2.206-.05c.206-.102.412-.167.461-.151c.043.016.168.14.276.271c.109.136.326.309.478.385c.249.13.341.146.753.14c.325-.005.488.012.526.06c.157.19.59 2.201.775 3.584c.163 1.241.179 4.017.027 5.23c-.2 1.644-.498 3.053-.91 4.321c-.293.9-.553 1.491-1.09 2.456C20.997 23.675 20.682 24 20.086 24a2.01 2.01 0 0 1-.493-.06c-.353-.119-.895-.536-1.73-1.328c-.986-.932-1.404-1.257-1.924-1.512c-.634-.315-1.258-.342-1.8-.076c-.13.065-.498.358-.807.656c-.65.618-.9.753-1.47.791c-.704.044-1.1-.135-2.206-.992c-.471-.363-.818-.526-1.203-.558c-.466-.038-.808.081-1.561.537c-.743.45-1.139.59-1.654.59c-1.073 0-2.006-.66-2.965-2.097C1.205 18.34.424 16.09.17 13.863c-.098-.84-.114-2.537-.033-3.367c.428-4.266 2.494-7.53 5.828-9.193C7.005.783 8.149.419 9.455.197c.976-.163 2.413-.244 2.933-.168zm-2.239 1.48C7.64 1.758 5.2 3.113 3.731 5.065c-1.529 2.033-2.38 5.399-2.07 8.19c.2 1.85.964 3.947 1.989 5.487c.52.78.72.997 1.084 1.176c.553.271 1.122.174 1.827-.309c.629-.434 1.28-.623 1.978-.585c.71.043.982.184 2.055 1.1c.634.542 1.182.602 1.794.195c.136-.092.44-.325.678-.52c.764-.634 1.35-.857 2.277-.862c1.16-.006 1.913.428 2.981 1.73c.868 1.05 1.204 1.268 1.68 1.089c.781-.298 1.567-2.082 2.082-4.716c.683-3.48.553-6.522-.352-8.37c-.293-.608-.645-.998-.976-1.095c-.206-.06-.27-.055-.704.086c-.418.136-.564.158-1.106.158c-.51 0-.689-.028-.992-.13c-.58-.196-.84-.434-1.486-1.356c-.298-.428-.558-.569-1.263-.71c-1.3-.25-1.832-.477-2.293-.976c-.434-.466-.71-1.09-.91-2.054c-.055-.282-.152-.591-.212-.689c-.222-.357-.759-.488-1.643-.395z"
      />
    </svg>
  );
};
