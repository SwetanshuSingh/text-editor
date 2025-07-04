"use client";

import { usePathname } from "next/navigation";

const FileIcon = () => {
  const pathName = usePathname();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      className={`cursor-pointer transition-colors duration-150 ${
        pathName?.startsWith("/docs")
          ? "text-black"
          : "text-[#8C8C8C] hover:text-black/80"
      }`}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        color="currentColor"
      >
        <path d="M3.5 10c0-3.771 0-5.657 1.245-6.828S7.993 2 12 2h.773c3.26 0 4.892 0 6.024.798c.324.228.612.5.855.805c.848 1.066.848 2.6.848 5.67v2.545c0 2.963 0 4.445-.469 5.628c-.754 1.903-2.348 3.403-4.37 4.113c-1.257.441-2.83.441-5.98.441c-1.798 0-2.698 0-3.416-.252c-1.155-.406-2.066-1.263-2.497-2.35c-.268-.676-.268-1.523-.268-3.216z" />
        <path d="M20.5 12a3.333 3.333 0 0 1-3.333 3.333c-.666 0-1.451-.116-2.098.057a1.67 1.67 0 0 0-1.179 1.179c-.173.647-.057 1.432-.057 2.098A3.333 3.333 0 0 1 10.5 22M8 7h7m-7 4h3" />
      </g>
    </svg>
  );
};

export default FileIcon;
