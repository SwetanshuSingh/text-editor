import Sidebar from "@/components/sidebar";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full max-h-screen h-screen flex justify-start bg-[#F5F5F5] overflow-hidden">
      <Sidebar />
      <div className="w-full p-3 pl-0">{children}</div>
    </div>
  );
};

export default MainLayout;
