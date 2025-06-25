"use client";

import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import ColorPicker from "./color-picker";

type DocPageProps = {};

const DocPage = ({}: DocPageProps) => {
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
    <section className="max-w-[600px] w-[600px] h-full font-shadows font-medium text-xl bg-white outline outline-gray-100 shadow-sm flex flex-grow flex-col gap-8 px-10 py-16">
      <input
        id="title"
        type="text"
        placeholder="What are you writing about?"
        className="min-h-12 h-12 outline-none font-semibold text-3xl text-black tracking-wide placeholder:font-geist placeholder:tracking-tight placeholder:text-gray-300"
      />
      <div
        className="h-full flex-grow resize-none outline-none text-2xl font-semibold text-gray-800"
        id="content"
        contentEditable
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
