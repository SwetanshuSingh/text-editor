"use client";

import { AnimatePresence, motion } from "motion/react";

const EditorTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", damping: 15 }}
        className="overflow-hidden"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export default EditorTemplate;
