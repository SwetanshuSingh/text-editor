import Document from "@/components/document";

export default function DocumentPage({ params }: { params: { slug: string } }) {
  return (
    <main className="w-full h-full bg-[#F8F8F8] p-5 flex justify-center items-center rounded-md outline outline-[#E4E4E4]">
      <Document />
    </main>
  );
}
