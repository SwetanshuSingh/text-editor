"use client";

import { MouseEventHandler } from "react";
import { motion } from "motion/react";

const ColorPill = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: MouseEventHandler<HTMLSpanElement> | undefined;
}) => {
  return (
    <motion.span
      onClick={onClick}
      onMouseDown={(e) => e.preventDefault()}
      whileHover={{ scale: 1.2 }}
      className={
        "color-pill block w-4 h-4 rounded-full cursor-pointer " + className
      }
    />
  );
};

export default ColorPill;
