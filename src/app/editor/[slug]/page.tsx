import DocPage from "@/components/doc-page";

const DocEditorPage = ({ params }: { params: { slug: string } }) => {
  return (
    <main className="w-full min-h-screen h-full bg-[#F8F8F8] p-5 flex flex-col gap-2 justify-center items-center">
      <DocPage id={params.slug} />
    </main>
  );
};

export default DocEditorPage;
