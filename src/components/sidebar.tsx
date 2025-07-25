"use client";

import FileIcon from "@/components/ui/file-icon";
import UserIcon from "@/components/ui/user-icon";
import LogoutIcon from "@/components/ui/log-out-icon";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  };

  return (
    <aside className="w-fit h-full flex flex-col items-center justify-between px-3 pt-16 pb-3.5">
      <div className="flex flex-col items-center gap-6">
        <Link href="/profile">
          <UserIcon />
        </Link>
        <Link href="/docs">
          <FileIcon />
        </Link>
      </div>
      <button onClick={handleSignOut}>
        <LogoutIcon />
      </button>
    </aside>
  );
};

export default Sidebar;
