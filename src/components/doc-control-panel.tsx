"use client";

import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from "react";

type DocumentControlPanelProps = {
  currentPageNo: number;
  totalPages: number;
  pages: Page[];
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
};

interface ControlButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const DocumentControlPanel = ({
  currentPageNo,
  totalPages,
  pages,
  setCurrentPage,
}: DocumentControlPanelProps) => {
  const setPrevPage = () => {
    if (currentPageNo === 1) return;

    const prevPage = pages.find((page) => page.idx === currentPageNo - 1);

    if (!prevPage) return;

    setCurrentPage(prevPage);
  };

  const setNextPage = () => {
    if (currentPageNo === totalPages) return;

    const nextPage = pages.find((page) => page.idx === currentPageNo + 1);

    if (!nextPage) return;

    setCurrentPage(nextPage);
  };

  return (
    <div className="w-fit bg-white flex justify-between items-center gap-5 rounded-3xl px-1 py-1 text-sm outline outline-[#F2F2F2] placeholder:text-[#8C8C8C] placeholder:text-sm placeholder:font-semibold">
      <ControlButton onClick={setPrevPage}>
        <ArrowLeft size={18} />
      </ControlButton>

      <ControlButton>
        <Plus size={18} />
      </ControlButton>

      <ControlButton onClick={setNextPage}>
        <ArrowRight size={18} />
      </ControlButton>
    </div>
  );
};

export default DocumentControlPanel;

const ControlButton = ({ children, ...props }: ControlButtonProps) => {
  return (
    <button
      {...props}
      className="p-1.5 text-[#8C8C8C] rounded-full hover:bg-black hover:text-white transition-colors duration-200 ease-linear cursor-pointer"
    >
      {children}
    </button>
  );
};
