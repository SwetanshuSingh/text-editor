"use client";

import { X } from "lucide-react";
import { motion } from "motion/react";
import ColorPill from "./color-pill";

type ColorPickerProps = {
  left: number;
  top: number;
  highlightText: (color: string) => void;
};

const ColorPicker = ({ left, top, highlightText }: ColorPickerProps) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      style={{
        left,
        top,
      }}
      className="absolute w-fit bg-gray-100 p-1.5 flex justify-start items-center gap-2 rounded-2xl"
    >
      <ColorPill
        className="bg-fuchsia-500"
        onClick={() => highlightText("d946ef")}
      />
      <ColorPill
        className="bg-amber-400"
        onClick={() => highlightText("fbbf24")}
      />
      <ColorPill
        className="bg-pink-300"
        onClick={() => highlightText("f9a8d4")}
      />
      <ColorPill
        className="bg-purple-300"
        onClick={() => highlightText("d8b4fe")}
      />

      <motion.span
        whileHover={{ scale: 1.2 }}
        className="w-4 h-4 rounded-full cursor-pointer bg-white flex justify-center items-center"
      >
        <X size={12} strokeWidth={2.5} className="text-gray-400 " />
      </motion.span>
    </motion.div>
  );
};

export default ColorPicker;
