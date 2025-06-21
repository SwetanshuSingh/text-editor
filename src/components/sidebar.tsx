"use client";

import FileIcon from "@/components/ui/file-icon";
import UserIcon from "@/components/ui/user-icon";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-fit h-full flex flex-col gap-6 items-center p-3 pt-16">
      <Link href="/profile">
        <UserIcon />
      </Link>
      <Link href="/editor">
        <FileIcon />
      </Link>
    </aside>
  );
};

export default Sidebar;
