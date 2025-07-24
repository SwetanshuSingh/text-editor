"use client";

import { motion } from "motion/react";

type ChatSidebarProps = {
  showChat: boolean;
};

const ChatSidebar = ({ showChat }: ChatSidebarProps) => {
  return (
    <motion.section
      layout
      className={`h-full ${showChat ? "w-4/12 bg-white flex flex-col" : "w-0"}`}
    >
      <div className="flex-grow flex flex-col pt-5 pb-2 px-5 gap-6">
        <ChatHeader />
        <ChatBody />
      </div>
      <span className="px-3">
        <div className="p-4 border-t border-gray-200 w-full flex flex-col">
          <input
            className="w-full outline-none text-sm font-medium text-black/70 placeholder:text-[#7A7A7A] tracking-tight"
            type="text"
            placeholder="Ask pluto anything"
          />
        </div>
      </span>
    </motion.section>
  );
};

export default ChatSidebar;

const ChatHeader = () => {
  return (
    <span className="flex items-center gap-2.5">
      <ChatIcon />
      <span className="h-3.5 w-[1.2px] bg-[#868686]"></span>
      <p className="text-sm font-medium text-[#868686] tracking-tight">
        Untitled
      </p>
    </span>
  );
};

const ChatBody = () => {
  return (
    <div className="h-full flex flex-col gap-5">
      <div className="w-full pl-1 bg-[#D9D9D9] rounded-md">
        <div className="w-full bg-[#F2F2F2] rounded-s-sm rounded-e-md p-2">
          <p className="font-medium text-[#7A7A7A] text-sm">Hello</p>
        </div>
      </div>

      <p className="text-sm font-medium text-black/70">
        State your learning objective or inquiry.
      </p>

      <div className="w-full pl-1 bg-[#D9D9D9] rounded-md">
        <div className="w-full bg-[#F2F2F2] rounded-s-sm rounded-e-md p-2">
          <p className="font-medium text-[#7A7A7A] text-sm">
            What can you do for me?
          </p>
        </div>
      </div>

      <p className="text-sm font-medium text-black/70">
        I provide precise, comprehensive explanations and structured knowledge
        in any subject you seek to learn. I replace textbooks and courses by
        delivering only necessary and sufficient information, including
        formulas, concepts, and code if needed. Specify a topic or question to
        proceed.
      </p>
    </div>
  );
};

const ChatIcon = () => {
  return (
    <svg
      className="text-[#868686]"
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193c-.34.027-.68.052-1.02.072v3.091l-3-3a49.5 49.5 0 0 1-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095a48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402c-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235c.577.075 1.157.14 1.74.194V21l4.155-4.155"
      />
    </svg>
  );
};
