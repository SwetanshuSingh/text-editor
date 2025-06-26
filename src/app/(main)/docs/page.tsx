import { getDocuments } from "@/actions/get-documents";
import DocIcon from "@/components/ui/doc-icon";
import Link from "next/link";
import { redirect } from "next/navigation";

const DocsPage = async () => {
  const createNewDoc = async () => {
    "use server";
    const uuid = crypto.randomUUID();
    redirect(`${process.env.BETTER_AUTH_URL as string}/editor/${uuid}`);
  };

  const response = await getDocuments();
  const documents = response.data;

  console.log("Docs", response);

  if (response.status == "error") {
    // TODO: handle error state here
  }

  return (
    <main className="w-full h-full bg-[#F8F8F8] p-5 flex flex-col gap-5 rounded-md outline outline-[#E4E4E4]">
      <div className="w-full flex justify-end items-center">
        <form action={createNewDoc}>
          <button
            type="submit"
            className="text-sm font-medium border border-gray-300 px-4 py-2 rounded-3xl hover:bg-gray-300 transition-colors duration-150"
          >
            add
          </button>
        </form>
      </div>

      {!documents || documents.length === 0 ? (
        <div className="h-full flex flex-col justify-center items-center gap-2">
          <DocIcon />
          <p className="text-[#8C8C8C] font-semibold tracking-tight">
            no documents yet.
          </p>
        </div>
      ) : (
        <div className="flex justify-start items-center gap-5">
          {documents.map((document) => (
            <Link key={document.id} href={`/editor/${document.id}`}>
              <div className="w-40 h-52 bg-[#F2F2F2] flex flex-col gap-3 font-shadows p-4 rounded-xl hover:bg-white cursor-pointer transition-all duration-150 hover:translate-y-[-2px]">
                <p className="text-[#5D5D5D] font-semibold">{document.title}</p>
                <p className="text-sm text-[#868686]">
                  {document.summary === "" ? <span className="font-geist tracking-tight font-medium">No Content</span> : document.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
};

export default DocsPage;
