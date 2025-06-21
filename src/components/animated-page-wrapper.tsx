"use client";

import { AnimatePresence, motion } from "motion/react";

const AnimatedPageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", damping: 15 }}
        className="h-full bg-[#F8F8F8] flex rounded-md outline outline-[#E4E4E4]"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export default AnimatedPageWrapper;
