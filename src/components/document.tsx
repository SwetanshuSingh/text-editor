"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import ColorPicker from "./color-picker";

const Document = () => {
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
    <section className="max-w-[600px] w-[600px] h-full font-shadows font-medium text-xl bg-white outline outline-gray-100 shadow-sm flex flex-col gap-5 px-10 py-16">
      <span className="leading-6 text-black/70">
        <h3 className="font-semibold text-black mb-2">Machine Learning</h3>
        <p className="">
          Software is deterministic. Given some input, if you run the program
          again, you will get the same output. A developer has explicitly
          written code to handle each case.
        </p>
        <p>
          Most AI models¹ are not this way — they are probabilistic. Developers
          don't have to explicitly program the instructions.
        </p>
      </span>

      <span className="leading-6 text-black/70">
        <h3 className="font-semibold text-black mb-2">Neural Networks</h3>
        <p className="">
          AI models are built on neural networks — think of them as a giant web
          of decision-making pathways that learn from examples. Neural networks
          can be used for anything, but I'll focus on language models.
        </p>
        <p>
          A big takeaway for me is: it's just math. You can build a neural
          network from first principles using linear algebra, calculus, and
          statistics. You likely won't do this when there's helpful abstractions
          like PyTorch, but it's helpful for me to demystify what is happening
          under the hood.
        </p>
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

export default Document;
