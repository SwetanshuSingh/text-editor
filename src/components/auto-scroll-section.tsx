"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

type AutoScrollGroupedSectionProps = {
  items: React.JSX.Element[];
  groupSize?: number;
  interval?: number;
  direction?: "up" | "down";
};

export default function AutoScrollGroupedSection({
  items,
  groupSize = 5,
  interval = 2000,
  direction = "down",
}: AutoScrollGroupedSectionProps) {
  // Split items into groups
  const groups = [];
  for (let i = 0; i < items.length; i += groupSize) {
    groups.push(items.slice(i, i + groupSize));
  }

  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [groupHeight, setGroupHeight] = useState(0);
  const [groupIndex, setGroupIndex] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const firstGroup = containerRef.current.querySelector("div");
      if (firstGroup) {
        setGroupHeight(firstGroup.clientHeight + 20); // adjust gap
      }
    }
  }, [groupSize]);

  useEffect(() => {
    if (groupHeight === 0) return;

    // initialize
    if (direction === "up") {
      controls.set({ y: -(groups.length - 1) * groupHeight });
      setGroupIndex(groups.length - 1);
    } else {
      controls.set({ y: 0 });
      setGroupIndex(0);
    }

    const timer = setInterval(() => {
      setGroupIndex((prev) => {
        let next;
        if (direction === "down") {
          next = prev + 1;
          if (next >= groups.length) {
            controls.start({ y: 0, transition: springTransition });
            return 0;
          } else {
            controls.start({
              y: -next * groupHeight,
              transition: springTransition,
            });
            return next;
          }
        } else {
          next = prev - 1;
          if (next < 0) {
            controls.start({
              y: -(groups.length - 1) * groupHeight,
              transition: springTransition,
            });
            return groups.length - 1;
          } else {
            controls.start({
              y: -next * groupHeight,
              transition: springTransition,
            });
            return next;
          }
        }
      });
    }, interval);

    // stop scrolling after 4 seconds
    const stopTimeout = setTimeout(() => {
      clearInterval(timer);
    }, 6000);

    return () => {
      clearInterval(timer);
      clearTimeout(stopTimeout);
    };
  }, [groupHeight, controls, groups.length, interval, direction]);

  return (
    <div className="w-1/4 h-full overflow-hidden">
      <motion.div
        ref={containerRef}
        animate={controls}
        className="flex flex-col gap-5"
      >
        {groups.map((group, groupIdx) => (
          <div key={groupIdx} className="flex flex-col gap-5">
            {group.map((text, idx) => (
              <div key={idx}>
                <p className="text-2xl font-medium text-gray-300 text-justify">
                  {text}
                </p>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const springTransition = {
  type: "spring",
  stiffness: 80,
  damping: 20,
  mass: 0.5,
};
