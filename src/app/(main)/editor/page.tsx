"use client";

import { AnimatePresence, motion } from "motion/react";

const DocumentEditor = () => {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          damping: 20,
          duration: 0.2,
        }}
        className="h-full bg-[#F8F8F8] flex rounded-md outline outline-[#E4E4E4]"
      ></motion.main>
    </AnimatePresence>
  );
};

export default DocumentEditor;
