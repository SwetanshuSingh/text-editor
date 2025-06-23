"use client";

import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import ColorPicker from "./color-picker";

type DocPageProps = {
  currentPage: Page;
};

const DocPage = ({ currentPage }: DocPageProps) => {
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

  return (
    <section className="doc-page max-w-[600px] w-[600px] h-full font-shadows font-medium text-xl bg-white outline outline-gray-100 shadow-sm flex flex-col gap-5 px-10 py-16">
      <span className="leading-6 text-black/70">
        <h3 className="font-semibold text-black mb-2">{currentPage.title}</h3>
        <p className="">{currentPage.content}</p>
      </span>

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
