"use client";

import { usePathname } from "next/navigation";

const UserIcon = () => {
  const pathName = usePathname();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 48 48"
      className={`cursor-pointer transition-colors duration-150 ${
        pathName == "/editor"
          ? "text-black"
          : "text-[#5d5d5d] hover:text-black/80"
      }`}
    >
      <g
        className="transition-colors duration-150"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      >
        <circle cx="24" cy="12" r="8" />
        <path d="M42 44c0-9.941-8.059-18-18-18S6 34.059 6 44" />
      </g>
    </svg>
  );
};

export default UserIcon;
