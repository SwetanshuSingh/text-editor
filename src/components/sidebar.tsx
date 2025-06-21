import { FileIcon } from "@/components/ui/file-icon";
import UserIcon from "@/components/ui/user-icon";

const Sidebar = () => {
  return (
    <aside className="w-fit h-full flex flex-col gap-6 items-center p-3 pt-16">
      <UserIcon />
      <FileIcon />
    </aside>
  );
};

export default Sidebar;
