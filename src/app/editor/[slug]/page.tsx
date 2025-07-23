import { getDocumentById } from "@/actions/get-document-by-id";
import { redirect } from "next/navigation";
import DocPage from "@/components/doc-page";
import DocEditor from "@/components/doc-editor";

const DocEditorPage = async ({ params }: { params: { slug: string } }) => {
  // const response = await getDocumentById(params.slug);

  // if (response.status === "error" && response.type === "session")
  //   redirect(`${process.env.BETTER_AUTH_URL}`);

  // if (response.status !== "success") {
  //   // TODO: handle any other type of error's

  //   redirect(`${process.env.BETTER_AUTH_URL}/docs`);
  // }

  // const document = response.data;

  return (
    <DocEditor />

    // <main className="w-full min-h-screen h-full bg-[#F8F8F8] p-5 flex flex-col gap-2 justify-center items-center">
    //   {!document ? (
    //     <DocPage
    //       data={{
    //         id: params.slug,
    //         title: "",
    //         summary: "",
    //         content: "",
    //         existingDoc: false,
    //       }}
    //     />
    //   ) : (
    //     <DocPage data={{ ...document, existingDoc: true }} />
    //   )}
    // </main>
  );
};

export default DocEditorPage;
