import Link from "next/link";

const DocumentEditor = async () => {
  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  await sleep(1000);

  return (
    <main className="w-full h-full bg-[#F8F8F8] p-5 flex flex-col gap-5 rounded-md outline outline-[#E4E4E4]">
      <div className="w-full flex justify-between items-center">
        {/* <input
          placeholder="search your documents"
          className="w-64 bg-white flex justify-center items-center rounded-2xl px-4 py-1.5 text-sm outline-none placeholder:text-[#8C8C8C] placeholder:text-sm placeholder:font-semibold"
        /> */}
      </div>

      <div className="flex justify-start items-center gap-5">
        <Link href="/editor/124">
          <div className="w-40 h-52 bg-[#F2F2F2] flex flex-col gap-3 font-shadows p-4 rounded-xl hover:bg-white cursor-pointer transition-all duration-150 hover:translate-y-[-2px]">
            <p className="text-[#5D5D5D] font-semibold">Machine Learning</p>
            <p className="text-sm text-[#868686]">
              {" "}
              Software is deterministic. Given some input, if you run the
              program again, you will get the same output.
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default DocumentEditor;
