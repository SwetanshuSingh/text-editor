"use client";

import { AnimatePresence } from "motion/react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import ColorPicker from "./color-picker";
import { getDocumentById } from "@/actions/get-document-by-id";
import {
  updateDocumentContent,
  updateDocumentTitle,
} from "@/actions/update-document";
import {
  createDocumentWithContent,
  createDocumentWithTitle,
} from "@/actions/create-document";
import { useDeboucne } from "@/hooks/use-debounce";

type PageData = {
  id: string;
  title: string;
  summary: string;
  content: string;
  existingDoc: boolean;
};

type DocPageProps = {
  data: PageData;
};

const DocPage = ({ data }: DocPageProps) => {
  const initalMount = useRef(true);

  const [pageData, setPageData] = useState<PageData>(data);

  const contentRef = useRef<HTMLDivElement>(null);
  const debouncedTitle = useDeboucne(pageData.title, 800);
  const debouncedContent = useDeboucne(pageData.content, 1200);

  const [selectionRange, setSelectionRange] = useState<Range | null>(null);
  const [popoverPosition, setPopoverPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);

  const getSelectionRange = () => {
    const currentSelection = window.getSelection();

    if (!currentSelection || currentSelection.toString() === "") return;

    const range = currentSelection.getRangeAt(0);

    if (!range) return;

    const rect = range.getBoundingClientRect();

    const top = rect.top + window.scrollY - 30;
    const left = rect.left + window.scrollX + rect.width / 2 - 20;

    setSelectionRange(range);
    setPopoverPosition({ top, left });
  };

  const highlightText = (color: string) => {
    if (!selectionRange || !popoverPosition) return;

    let highlightStyleElement = window.document.getElementById("highlight");

    if (!highlightStyleElement) {
      highlightStyleElement = window.document.createElement("style");
      highlightStyleElement.id = "highlight";
      window.document.head.appendChild(highlightStyleElement);
    }

    const uuid = `h-${crypto.randomUUID()}`;
    const cssRule = `::highlight(${uuid}) { background-color: #${color}; }`;

    highlightStyleElement.textContent += cssRule + "\n";

    const highlight = new Highlight(selectionRange);
    CSS.highlights.set(uuid, highlight);

    window.getSelection()?.removeAllRanges();
    setPopoverPosition(null);
    setSelectionRange(null);

    console.log("Style Sheet", highlightStyleElement);
  };

  const handleMouseDown = (evt: MouseEvent) => {
    const target = evt.target as HTMLElement;

    if (target.closest(".color-pill")) return;

    setSelectionRange(null);
    setPopoverPosition(null);
  };

  useEffect(() => {
    window.document.addEventListener("mouseup", getSelectionRange);
    window.document.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.document.removeEventListener("mouseup", getSelectionRange);
      window.document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  useEffect(() => {
    const handleTitleUpdate = async () => {
      if (initalMount.current) {
        initalMount.current = false;
        return;
      }

      if (pageData.existingDoc) {
        const response = await updateDocumentTitle(pageData.id, debouncedTitle);

        if (response.status === "error" || !response.data) {
          // TODO: handle error state here.
          console.log("An error occured while updating the document title");
          return;
        }

        return;
      }

      const response = await createDocumentWithTitle(
        pageData.id,
        debouncedTitle
      );

      if (response.status === "error" || !response.data) {
        // TODO: handle error state here.
        console.log("An error occured while creating document with title");
        return;
      }

      setPageData((pageData) => ({ ...pageData, existingDoc: true }));
      return;
    };

    handleTitleUpdate();
  }, [debouncedTitle]);

  useEffect(() => {
    if (
      contentRef.current &&
      contentRef.current.innerText !== pageData.content
    ) {
      contentRef.current.innerText = pageData.content;
    }
  }, [pageData.content]);

  useEffect(() => {
    const handleContentUpdate = async () => {
      if (pageData.existingDoc) {
        const response = await updateDocumentContent(
          pageData.id,
          debouncedContent
        );

        if (response.status === "error" || !response.data) {
          // TODO: handle error state here.
          console.log("An error occured while updating the document content");
          return;
        }

        return;
      }
      const response = await createDocumentWithContent(
        pageData.id,
        debouncedContent
      );
      if (response.status === "error" || !response.data) {
        // TODO: handle error state here.
        console.log("An error occured while updating the document content");
        return;
      }
      setPageData((pageData) => ({ ...pageData, existingDoc: true }));
    };

    handleContentUpdate();
  }, [debouncedContent]);

  return (
    <section className="max-w-[600px] w-[600px] h-full font-shadows font-medium text-xl bg-white outline outline-gray-100 shadow-sm flex flex-grow flex-col gap-8 p-10">
      <input
        id="title"
        type="text"
        value={pageData.title}
        onChange={(evt) =>
          setPageData((pageData) => ({ ...pageData, title: evt.target.value }))
        }
        placeholder="What are you writing about?"
        className="min-h-12 h-12 outline-none font-semibold text-3xl text-black tracking-wide placeholder:font-geist placeholder:tracking-tight placeholder:text-gray-300"
      />
      <div
        className="h-full flex-grow resize-none outline-none text-2xl text-black/70"
        ref={contentRef}
        id="content"
        contentEditable
        suppressContentEditableWarning
        onInput={(evt) =>
          setPageData((pageData) => ({
            ...pageData,
            content: (evt.target as HTMLDivElement).innerText,
          }))
        }
      ></div>

      <AnimatePresence>
        {popoverPosition && (
          <ColorPicker
            left={popoverPosition.left}
            top={popoverPosition.top}
            highlightText={highlightText}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default DocPage;

// const Component = ({ initalState }: { initalState: string }) => {
//   const [title, setTitle] = useState(initalState);
//   const debouncedTitle = useDeboucne(title, 800);

//   useEffect(() => {
//     // Do an api call here.
//   }, [debouncedTitle]);

//   return (
//     <input
//       value={title}
//       onChange={(evt) => setTitle(evt.target.value)}
//       type="text"
//     />
//   );
// };
